---
description: Start the Full Stack Application (Frontend + Backend)
---

This workflow helps you start both the Python backend and the Next.js frontend to run the full stack application.

1. **Install Backend Dependencies** (If not already installed)
   Open a terminal in `d:\shoe-store-frontend\shoe-store-frontend\backend` and run:
   ```bash
   pip install fastapi uvicorn
   ```

2. **Start the Backend Server**
   Run the following command in the `backend` directory:
   ```bash
   python main.py
   ```
   *The backend will start on http://127.0.0.1:8000*

3. **Start the Frontend Development Server**
   Open a NEW terminal in `d:\shoe-store-frontend\shoe-store-frontend` and run:
   ```bash
   npm run dev
   ```
   *The frontend will start on http://localhost:3000*

4. **Verify Connection**
   - Open `http://localhost:3000` in your browser.
   - The products should load from the Python backend.
