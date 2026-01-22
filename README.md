# VibeCheck 411L

A simple web app that gives you random fortunes, jokes, and mood-based messages. Click buttons, get responses.

## Install npm

npm is the tool that installs the code libraries this project needs.

1. Download Node.js from https://nodejs.org (includes npm automatically)
2. Check if it installed: open your terminal and type `node -v` then press Enter
3. You should see a version number like `v20.x.x`

## Setup Instructions

1. Open your terminal in the project folder
2. Go to the backend folder: `cd backend`
3. Install the required packages: `npm install`
4. Start the server: `node index.js`
5. You should see: `VibeCheck API running at http://localhost:3000`
6. Open `frontend/index.html` in your web browser
7. Click buttons and see the responses

## API Routes

These are the endpoints the backend provides:

- `GET /api/fortune` - Returns a random fortune
- `GET /api/joke` - Returns a random joke
- `GET /api/vibe?mood=happy` - Returns a message based on your mood (happy, tired, or stressed)
- `POST /api/smash` - Increases the smash counter
- `GET /api/smashes` - Shows current smash count
- `GET /api/secret?code=411L` - Returns a secret message (need correct code)

## Buttons and Functions

- **🔮 Fortune** - Get a random fortune about coding
- **😂 Joke** - Get a random programming joke
- **😄 Happy** - Get a message for when you're feeling happy
- **🥱 Tired** - Get a message for when you're feeling tired
- **😵‍💫 Stressed** - Get a message for when you're feeling stressed
- **💥 SMASH!** - Click to increase the smash counter
- **🕵️ Secret** - Unlock a hidden message

## Tutorial

### What This Project Does

This is a web app with two parts:
- **Backend** - A server that runs on your computer and provides data
- **Frontend** - A web page with buttons that shows the data

### How It Works

1. You click a button on the web page
2. The button sends a request to the backend server
3. The server picks a random response and sends it back
4. The web page displays the response

### Making Changes

**To change the messages:**
- Open `backend/index.js`
- Find the `fortunes` or `jokes` arrays
- Add your own messages inside the quotes
- Save the file and restart the server

**To change how buttons look:**
- Open `frontend/css/styles.css`
- Modify the colors, sizes, or spacing
- Save and refresh your browser

**To add new buttons:**
- Add the button in `frontend/index.html`
- Add the button's function in `frontend/app.js`
- Add a new route in `backend/index.js`

### Troubleshooting

**Nothing happens when I click buttons:**
- Make sure the backend is running (you should see "VibeCheck API running at...")
- Check if you opened the HTML file in your browser

**"Cannot find module" error:**
- Run `npm install` in the backend folder

**Port already in use:**
- Another program is using port 3000
- Change the `PORT` number in `backend/index.js` to something else like 3001
