# Spotify API Setup Guide

The Spotify token you provided has insufficient permissions. Here's how to get a proper token:

## Option 1: Quick Token (Expires in 1 hour)

1. Go to https://developer.spotify.com/console/get-recently-played/
2. Click **"GET TOKEN"**
3. Select the scope: **`user-read-recently-played`**
4. Click **"Request Token"**
5. Copy the token and update your `.env` file:
   ```
   SPOTIFY_ACCESS_TOKEN=your_new_token_here
   ```
6. Restart the backend: The server will auto-restart when you save `.env`

## Option 2: Long-lived Token (Recommended)

Create a Spotify app and use OAuth with refresh tokens:

1. Go to https://developer.spotify.com/dashboard
2. Click **"Create App"**
3. Fill in:
   - App name: "Personal Life Feed"
   - App description: "Personal data aggregation"
   - Redirect URI: `http://localhost:8888/callback`
4. Save and note your **Client ID** and **Client Secret**

5. Use the Spotify Web API authorization flow to get a refresh token:
   ```bash
   # Install spotify-web-api-node
   npm install spotify-web-api-node
   ```

6. Or use this quick Python script:
   ```python
   import requests
   import base64
   
   CLIENT_ID = 'your_client_id'
   CLIENT_SECRET = 'your_client_secret'
   REDIRECT_URI = 'http://localhost:8888/callback'
   
   # Step 1: Get authorization URL
   auth_url = f'https://accounts.spotify.com/authorize?client_id={CLIENT_ID}&response_type=code&redirect_uri={REDIRECT_URI}&scope=user-read-recently-played'
   
   print(f'Visit this URL: {auth_url}')
   code = input('Enter the code from the redirect URL: ')
   
   # Step 2: Exchange code for token
   auth_string = f'{CLIENT_ID}:{CLIENT_SECRET}'
   auth_bytes = auth_string.encode('utf-8')
   auth_base64 = base64.b64encode(auth_bytes).decode('utf-8')
   
   response = requests.post('https://accounts.spotify.com/api/token', 
       headers={'Authorization': f'Basic {auth_base64}'},
       data={
           'grant_type': 'authorization_code',
           'code': code,
           'redirect_uri': REDIRECT_URI
       }
   )
   
   tokens = response.json()
   print(f'\nAccess Token: {tokens["access_token"]}')
   print(f'Refresh Token: {tokens["refresh_token"]}')
   ```

## Current Issue

Your token error: `Insufficient client scope`

This means your token doesn't have the `user-read-recently-played` permission.

## Quick Fix

The fastest way is **Option 1** above - it takes 30 seconds!
