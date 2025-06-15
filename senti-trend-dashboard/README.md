# SentiTrend Dashboard

## Overview
SentiTrend Dashboard is a web application that visualizes sentiment analysis data. It fetches trending sentiment data and displays it in a chart format.

## Project Structure
```
senti-trend-dashboard
├── src
│   ├── index.html         # Main HTML document for the dashboard
│   ├── styles             # Directory containing CSS files
│   │   └── style.css      # Styles for the dashboard
│   ├── scripts            # Directory containing JavaScript files
│   │   └── app.js         # Logic for fetching sentiment data and rendering the chart
├── README.md              # Documentation for the project
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open `src/index.html` in a web browser to view the dashboard.

## Usage
- The dashboard fetches sentiment data from a local server running at `http://localhost:8000/trending?limit=1`.
- Ensure the server is running to display the sentiment chart correctly.

## Linking Files
In `src/index.html`, ensure to include the CSS and JavaScript files as follows:

1. Link the CSS file in the `<head>` section:
   ```html
   <link rel="stylesheet" href="styles/style.css">
   ```

2. Link the JavaScript file before the closing `</body>` tag:
   ```html
   <script src="scripts/app.js"></script>
   ```