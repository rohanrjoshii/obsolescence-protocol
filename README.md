# Personal Life API 🖥️

A unified API endpoint that aggregates your digital life data from various sources into a structured feed with a retro-brutalist Windows 95-inspired UI.

## 🎨 Design System: OBSOLESCENCE PROTOCOL

A dark, glitchy, retro-futuristic interface inspired by:
- Windows 95 / PC-98 aesthetics
- Digital archaeology and haunted software
- Terminal green & toxic magenta color palette
- CRT scanlines and glitch effects
- 3D beveled windows

## Features

- 📊 **GitHub Activity**: Commits, PRs, issues, branch creation
- 💪 **Workout Data**: Strava, Fitbit support
- 😴 **Sleep Tracking**: Oura Ring integration
- 🎵 **Music Listening**: Spotify recently played
- ⏱️ **Time Tracking**: RescueTime productivity data
- 🔄 **Unified Feed**: All data merged into a chronological timeline
- 🎮 **Retro UI**: Complete Win95-style interface with glitch effects

## 🚀 Quick Start

### Backend Setup
```bash
# Install dependencies
npm install

# Configure API tokens
cp .env.example .env
# Edit .env with your tokens (see API Setup below)

# Run backend
npm run dev
```

Backend runs on: **http://localhost:3000**

### Frontend Setup
```bash
cd frontend

# Install dependencies  
npm install

# Run frontend
npm run dev
```

Frontend runs on: **http://localhost:5173** 👈 Open this!

## 🔑 API Setup

### ✅ GitHub (Working!)
1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Select scopes: `repo`, `user`
4. Copy token to `.env`:
   ```
   GITHUB_TOKEN=github_pat_your_token
   GITHUB_USERNAME=your_username
   ```

### 🎵 Spotify (Needs Scope Fix)

**Issue**: Your token has insufficient permissions.

**Quick Fix** (30 seconds):
1. Visit https://developer.spotify.com/console/get-recently-played/
2. Click **"GET TOKEN"**
3. Check scope: `user-read-recently-played`
4. Copy token to `.env`
5. Backend will auto-restart

See [SPOTIFY_SETUP.md](./SPOTIFY_SETUP.md) for detailed instructions.

### 💪 Strava (Optional)
1. Create app at https://www.strava.com/settings/api
2. Get access token
3. Add to `.env`: `STRAVA_ACCESS_TOKEN=your_token`

### 😴 Oura Ring (Optional)
1. Get token at https://cloud.ouraring.com/personal-access-tokens
2. Add to `.env`: `OURA_ACCESS_TOKEN=your_token`

### ⏱️ RescueTime (Optional)
1. Get API key at https://www.rescuetime.com/anapi/manage
2. Add to `.env`: `RESCUETIME_API_KEY=your_key`

## 📡 API Endpoints

### `GET /api/feed`
Get your unified life feed

**Query Parameters:**
- `from`: Start date (ISO 8601)
- `to`: End date (ISO 8601)  
- `sources`: Comma-separated (e.g., `github,music`)
- `limit`: Max items (default: 100)

**Example:**
```bash
curl "http://localhost:3000/api/feed?from=2026-08-01&limit=20"
```

### `GET /api/sources`
List all data sources and their status

### `GET /api/sources/:source`
Get data from a specific source

## 🎨 UI Features

- ✅ Win95 3D beveled windows
- ✅ Glitch text with chromatic aberration
- ✅ CRT scanlines overlay
- ✅ WebGL animated background shader
- ✅ Dithering patterns
- ✅ Terminal-style command inputs
- ✅ Staggered window layouts
- ✅ Date range picker (7, 30, 90 days)
- ✅ Auto-refresh every 5 minutes
- ✅ Fully responsive

## 🐛 Current Status

| Source | Status | Notes |
|--------|--------|-------|
| GitHub | ✅ Working | Showing commits & events |
| Spotify | ⚠️ Scope Issue | Token needs `user-read-recently-played` |
| Strava | ❌ Not Configured | Add token to enable |
| Oura | ❌ Not Configured | Add token to enable |
| RescueTime | ❌ Not Configured | Add token to enable |

## 📝 Next Steps

1. **Fix Spotify**: Get new token with proper scope (see SPOTIFY_SETUP.md)
2. **Add More Sources**: Configure Strava, Oura, RescueTime
3. **Customize**: Adjust date ranges, add filters
4. **Extend**: Add more data sources or custom integrations

## 🎯 Example Response

```json
{
  "feed": [
    {
      "id": "github-17503976902",
      "type": "commit",
      "source": "github",
      "timestamp": "2026-08-12T18:02:55.000Z",
      "data": {
        "repo": "rohanrjoshii/daily-activity",
        "commits": 1,
        "branch": "main"
      }
    }
  ],
  "meta": {
    "total": 1,
    "sources": ["github"]
  }
}
```

## License

MIT
