# Chatbot — Embeddable Support Widget

Chatbot is a production-ready, embeddable customer support widget designed for seamless integration into any website.  
It provides a fully isolated frontend using Shadow DOM and a scalable FastAPI backend for structured lead capture.

---

## PROJECT STRUCTURE
Chatbot/
├── widget/              # React Frontend
│   ├── src/
│   │   ├── core/        # Chat Config & Shadow DOM logic
│   │   ├── store/       # Zustand Store (State Machine)
│   │   ├── components/  # Isolated UI Components
│   │   ├── hooks/       # Custom Hooks (useChatEngine)
│   │   └── services/    # API Integration
│   └── vite.config.ts   # Build configuration
├── backend/             # FastAPI Backend
│   ├── app/
│   │   ├── main.py      # Entry point & CORS
│   │   └── schemas.py   # Pydantic Models
│   └── requirements.txt
└── demo.html            # Integration test environment


## Features

- **Isolated Embedding**
  - Shadow DOM ensures zero CSS or JavaScript conflicts with host websites
  - Tailwind CSS v4 styles are injected directly into the Shadow Root

- **Deterministic Chat Flow**
  - Conversation logic implemented as a finite state machine
  - Predictable and maintainable state transitions

- **FastAPI Backend**
  - Asynchronous API built with FastAPI
  - Strict request validation using Pydantic models

- **Lead Capture**
  - Real-time validation for user inputs (email, category selection)
  - Backend-ready structure for persistent storage

- **Modern Tech Stack**
  - React, TypeScript, Vite
  - Zustand for state management
  - Tailwind CSS v4 for styling

---

## Architecture

### Frontend (Widget)

A standalone React application optimized for third-party embedding.

- Framework: React + TypeScript
- State Management: Zustand
- Styling: Tailwind CSS v4 (Shadow DOM scoped)
- Icons: Lucide React
- Bundler: Vite (single bundle output)

-Setup
cd widget
npm install
npm run dev

-Development server runs at:
http://localhost:5173

### Backend (API)

A lightweight backend service responsible for validation and data intake.

- Framework: FastAPI
- Validation: Pydantic
- CORS: Restricted configuration for widget origin

SETUP
-create a venv environemnt using py -m venv venv 
-source venv/Scripts/activate 
-install requirement.txt using pip 
-run uvicorn app.main:app --reload

Backend server runs at:
http://localhost:8000




##Production Build & Embed Test

To test the widget as it would run on a client website:
Build the widget:

cd widget
npm run build


Open demo.html located in the project root.
The Chatbot widget should appear in the bottom-right corner with full style isolation.


---



## Installation & Setup

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
