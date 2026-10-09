 Chatbot — Embeddable Support Widget

Chatbot is a production-ready, embeddable customer support widget designed for seamless integration into any website.
It delivers a fully isolated frontend using Shadow DOM and a scalable FastAPI backend for structured lead capture and validation.

✨ Key Highlights

⚡ Plug-and-play embeddable widget

🧩 Fully isolated UI (Shadow DOM)

🔁 Deterministic, state-driven chat flow

🚀 FastAPI backend with strict validation

🧪 Demo environment for real-world testing

📁 Project Structure
Chatbot/
├── widget/                     # React Frontend (Embeddable Widget)
│   ├── src/
│   │   ├── core/               # Chat configuration & Shadow DOM logic
│   │   ├── store/              # Zustand store (state machine)
│   │   ├── components/         # Isolated UI components
│   │   ├── hooks/              # Custom hooks (useChatEngine)
│   │   └── services/           # API integration layer
│   └── vite.config.ts          # Vite build configuration
│
├── backend/                    # FastAPI Backend
│   ├── app/
│   │   ├── main.py             # Application entry point & CORS config
│   │   └── schemas.py          # Pydantic models
│   └── requirements.txt
│
└── demo.html                   # Client-side embed test environment


🚀 Features
🔒 Isolated Embedding

Shadow DOM prevents CSS & JS conflicts with host websites

Tailwind CSS v4 styles are injected directly into the Shadow Root

🔁 Deterministic Chat Flow

Conversation logic implemented as a finite state machine

Predictable, debuggable, and maintainable transitions

⚙️ FastAPI Backend

Fully asynchronous API built with FastAPI

Strict request validation using Pydantic models

📥 Lead Capture

Real-time validation (email, category selection)

Backend-ready structure for persistent storage or CRM integration

🧰 Modern Tech Stack

Frontend: React, TypeScript, Vite

State Management: Zustand

Styling: Tailwind CSS v4

Icons: Lucide React

🏗 Architecture Overview
Frontend — Widget

A standalone React application optimized for third-party embedding.

Framework: React + TypeScript

State Management: Zustand

Styling: Tailwind CSS v4 (Shadow DOM scoped)

Bundler: Vite (single bundle output)

🔧 Setup
cd widget
npm install
npm run dev


Development server:

http://localhost:5173

Backend — API

A lightweight backend responsible for validation and structured data intake.

Framework: FastAPI

Validation: Pydantic

CORS: Restricted to widget origin

🔧 Setup
cd backend
python -m venv venv


Activate virtual environment:

# macOS / Linux
source venv/bin/activate

# Windows
venv\Scripts\activate


Install dependencies and start server:

pip install -r requirements.txt
uvicorn app.main:app --reload


Backend server:

http://localhost:8000

🧪 Production Build & Embed Test

To test the widget exactly as it would appear on a client website:

1️⃣ Build the Widget
cd widget
npm run build

2️⃣ Test Embedding

Open demo.html from the project root in your browser.

✔️ The Chatbot widget should appear in the bottom-right corner
✔️ Full style and behavior isolation confirmed via Shadow DOM

📦 Installation Summary
Backend Quick Start
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
