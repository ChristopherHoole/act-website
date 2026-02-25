"""
Test Google Sheets API connection for ACT Website Leads.
This verifies the service account credentials work correctly.
"""

import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime

# Path to credentials file
creds_file = r'C:\Users\User\Desktop\act-website\google-credentials.json'

# Sheet ID from your Google Sheet URL
SHEET_ID = '1zRTPuzwvHDSq23RqJ9iiRaNZ8bSOMmndUzxiP_DW38I'

try:
    print("Testing Google Sheets connection...")
    print(f"Using credentials: {creds_file}")
    print(f"Sheet ID: {SHEET_ID}")
    print()
    
    # Authenticate
    scopes = ['https://www.googleapis.com/auth/spreadsheets']
    creds = Credentials.from_service_account_file(creds_file, scopes=scopes)
    client = gspread.authorize(creds)
    
    print("✅ Authentication successful")
    
    # Open sheet
    sheet = client.open_by_key(SHEET_ID).sheet1
    print(f"✅ Opened sheet: {sheet.title}")
    
    # Test write - add a test row
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    test_row = [
        timestamp,                    # Timestamp
        'Test User',                  # Name
        'test@example.com',           # Email
        'Test Company',               # Company
        'Tester',                     # Role
        'Testing the API connection', # Looking For
        '+44 1234 567890',           # Phone
        '127.0.0.1',                 # IP Address
        'Test Script',               # User Agent
        'test'                       # Status
    ]
    
    sheet.append_row(test_row)
    print(f"✅ Wrote test row to sheet at {timestamp}")
    print()
    print("=" * 60)
    print("SUCCESS! Google Sheets setup is working correctly.")
    print("=" * 60)
    print()
    print("Next steps:")
    print("1. Open your Google Sheet in browser")
    print("2. Verify you see the test row")
    print("3. Reply 'STEP B COMPLETE' to Christopher")
    
except FileNotFoundError:
    print("❌ ERROR: Credentials file not found")
    print(f"   Looking for: {creds_file}")
    print()
    print("Solution: Make sure you downloaded the JSON credentials file")
    print("and saved it as 'google-credentials.json' in C:\\Users\\User\\Desktop\\act-website\\")
    
except Exception as e:
    print(f"❌ ERROR: {type(e).__name__}")
    print(f"   {str(e)}")
    print()
    print("Common issues:")
    print("1. Sheet not shared with service account email")
    print("2. Google Sheets API not enabled in Cloud Console")
    print("3. Wrong Sheet ID")
    print()
    print("Check the setup instructions in Step B and try again.")
