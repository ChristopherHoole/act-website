"""
Vercel Serverless Function: Contact Form Lead Submission
Handles POST requests from christopherhoole.online website contact form.

Ported from Flask api.py (Chat 32) and adapted for Vercel serverless deployment.
"""

from http.server import BaseHTTPRequestHandler
import json
import re
import os
from datetime import datetime

# Google Sheets integration
import gspread
from google.oauth2.service_account import Credentials


# ============================================================================
# CONFIGURATION
# ============================================================================

# Google Sheet ID (from Step B)
SHEET_ID = '1zRTPuzwvHDSq23RqJ9iiRaNZ8bSOMmndUzxiP_DW38I'

# Credentials file path (relative to function root)
CREDENTIALS_FILE = 'google-credentials.json'

# Allowed CORS origins
ALLOWED_ORIGINS = [
    'https://www.christopherhoole.online',
    'https://christopherhoole.online',
    'http://localhost:3000'  # For local testing
]


# ============================================================================
# VALIDATION FUNCTIONS (Ported from Flask api.py)
# ============================================================================

def validate_email(email):
    """
    Validate email format using regex.
    
    Returns:
        bool: True if valid email format
    """
    if not email or not isinstance(email, str):
        return False
    
    # Email regex pattern (from Flask api.py line 656)
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    try:
        return bool(re.match(pattern, email))
    except Exception:
        return False


def sanitize_input(text):
    """
    Sanitize text input by stripping whitespace and removing HTML tags.
    
    Returns:
        str: Sanitized string
    """
    if not text or not isinstance(text, str):
        return ""
    
    # Strip whitespace
    text = text.strip()
    
    # Remove HTML tags (basic XSS prevention)
    text = re.sub(r'<[^>]*>', '', text)
    
    # Remove potential script content
    text = re.sub(r'<script.*?</script>', '', text, flags=re.IGNORECASE | re.DOTALL)
    
    return text


def validate_lead_data(data):
    """
    Validate lead submission data.
    
    Args:
        data: dict with lead fields
        
    Returns:
        (is_valid, errors_dict) tuple
        - is_valid: bool
        - errors_dict: dict of field -> error message
    """
    errors = {}
    
    # Required: name
    name = data.get('name', '').strip()
    if not name:
        errors['name'] = 'Name is required'
    elif len(name) < 2:
        errors['name'] = 'Name must be at least 2 characters'
    elif len(name) > 100:
        errors['name'] = 'Name must be less than 100 characters'
    
    # Required: email
    email = data.get('email', '').strip()
    if not email:
        errors['email'] = 'Email is required'
    elif not validate_email(email):
        errors['email'] = 'Invalid email format'
    
    # Optional: company
    company = data.get('company', '').strip()
    if company and len(company) > 100:
        errors['company'] = 'Company name must be less than 100 characters'
    
    # Optional: role
    role = data.get('role', '').strip()
    if role and len(role) > 100:
        errors['role'] = 'Role must be less than 100 characters'
    
    # Optional: looking_for
    looking_for = data.get('looking_for', '').strip()
    if looking_for and len(looking_for) > 500:
        errors['looking_for'] = 'Message must be less than 500 characters'
    
    # Optional: phone
    phone = data.get('phone', '').strip()
    if phone and len(phone) > 50:
        errors['phone'] = 'Phone number must be less than 50 characters'
    
    is_valid = len(errors) == 0
    return is_valid, errors


# ============================================================================
# GOOGLE SHEETS INTEGRATION
# ============================================================================

def get_sheets_client():
    """
    Initialize and return authenticated Google Sheets client.
    
    Returns:
        gspread.Client
    """
    # Get absolute path to credentials file
    # In Vercel, files are in /var/task/api/
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Try multiple possible credential paths
    possible_paths = [
        os.path.join(script_dir, CREDENTIALS_FILE),  # Same directory as this file
        os.path.join(script_dir, '..', CREDENTIALS_FILE),  # Parent directory
        CREDENTIALS_FILE  # Current working directory
    ]
    
    creds_path = None
    for path in possible_paths:
        if os.path.exists(path):
            creds_path = path
            break
    
    if not creds_path:
        raise FileNotFoundError(f"Credentials file not found. Tried: {possible_paths}")
    
    # Authenticate with service account
    scopes = ['https://www.googleapis.com/auth/spreadsheets']
    creds = Credentials.from_service_account_file(creds_path, scopes=scopes)
    client = gspread.authorize(creds)
    
    return client


def write_lead_to_sheet(lead_data, ip_address, user_agent):
    """
    Write lead data to Google Sheet.
    
    Args:
        lead_data: dict with sanitized lead fields
        ip_address: str
        user_agent: str
        
    Returns:
        int: Row number where data was written
    """
    # Get authenticated client
    client = get_sheets_client()
    
    # Open sheet by ID
    sheet = client.open_by_key(SHEET_ID).sheet1
    
    # Prepare row data (must match header order from Step B)
    # Headers: Timestamp, Name, Email, Company, Role, Looking For, Phone, IP Address, User Agent, Status
    timestamp = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
    
    row = [
        timestamp,
        lead_data.get('name', ''),
        lead_data.get('email', ''),
        lead_data.get('company', ''),
        lead_data.get('role', ''),
        lead_data.get('looking_for', ''),
        lead_data.get('phone', ''),
        ip_address,
        user_agent[:500],  # Limit user agent length
        'new'  # Status
    ]
    
    # Append row to sheet
    sheet.append_row(row)
    
    # Return row number (approximation - actual row count)
    return sheet.row_count


# ============================================================================
# VERCEL SERVERLESS HANDLER
# ============================================================================

class handler(BaseHTTPRequestHandler):
    """
    Vercel serverless function handler for /api/leads endpoint.
    
    Handles:
    - OPTIONS: CORS preflight
    - POST: Lead submission
    """
    
    def _set_cors_headers(self):
        """Set CORS headers based on request origin."""
        origin = self.headers.get('Origin', '')
        
        if origin in ALLOWED_ORIGINS:
            self.send_header('Access-Control-Allow-Origin', origin)
            self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')
    
    def _send_json_response(self, status_code, data):
        """Send JSON response with CORS headers."""
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self._set_cors_headers()
        self.end_headers()
        
        response_json = json.dumps(data)
        self.wfile.write(response_json.encode('utf-8'))
    
    def do_OPTIONS(self):
        """Handle CORS preflight request."""
        self.send_response(200)
        self._set_cors_headers()
        self.end_headers()
    
    def do_POST(self):
        """Handle lead submission POST request."""
        try:
            # Get request body
            content_length = int(self.headers.get('Content-Length', 0))
            
            if content_length == 0:
                self._send_json_response(400, {
                    "success": False,
                    "message": "Invalid request",
                    "error": "Request body must be JSON"
                })
                return
            
            body = self.rfile.read(content_length)
            
            # Parse JSON
            try:
                data = json.loads(body.decode('utf-8'))
            except json.JSONDecodeError:
                self._send_json_response(400, {
                    "success": False,
                    "message": "Invalid JSON",
                    "error": "Request body must be valid JSON"
                })
                return
            
            # Validate lead data
            is_valid, errors = validate_lead_data(data)
            
            if not is_valid:
                self._send_json_response(400, {
                    "success": False,
                    "message": "Validation failed",
                    "errors": errors
                })
                return
            
            # Sanitize all inputs
            sanitized_data = {
                'name': sanitize_input(data.get('name', '')),
                'email': sanitize_input(data.get('email', '')),
                'company': sanitize_input(data.get('company', '')),
                'role': sanitize_input(data.get('role', '')),
                'looking_for': sanitize_input(data.get('looking_for', '')),
                'phone': sanitize_input(data.get('phone', ''))
            }
            
            # Get IP address and user agent
            # Vercel provides X-Forwarded-For header with client IP
            ip_address = self.headers.get('X-Forwarded-For', 
                                         self.headers.get('X-Real-IP', 'unknown'))
            user_agent = self.headers.get('User-Agent', '')
            
            # Write to Google Sheet
            try:
                row_number = write_lead_to_sheet(sanitized_data, ip_address, user_agent)
            except FileNotFoundError as e:
                self._send_json_response(500, {
                    "success": False,
                    "message": "Configuration error",
                    "error": "Google Sheets credentials not found"
                })
                return
            except Exception as e:
                # Log error but don't expose internal details to client
                print(f"Google Sheets error: {str(e)}")
                self._send_json_response(500, {
                    "success": False,
                    "message": "Storage error",
                    "error": "Failed to save submission. Please try again."
                })
                return
            
            # Success response
            self._send_json_response(200, {
                "success": True,
                "message": "Thank you! We'll be in touch soon.",
                "lead_id": row_number  # Row number in sheet (not critical, for debugging)
            })
            
        except Exception as e:
            # Catch-all for unexpected errors
            print(f"Unexpected error in /api/leads: {str(e)}")
            self._send_json_response(500, {
                "success": False,
                "message": "Submission failed",
                "error": "An unexpected error occurred. Please try again."
            })
