from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .schemas import LeadCreate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

leads_db = []

@app.get("/")
def read_root():
    return {"status": "active", "service": "Chatbot Backend"}

@app.post("/api/leads")
async def create_lead(lead: LeadCreate):
    lead_data = lead.dict()
    leads_db.append(lead_data)
    print("------------------------------------------------")
    print(f"🔥 NEW LEAD CAPTURED: {lead.email}")
    print(f"📂 Category: {lead.category}")
    print(f"📦 Payload: {lead_data}")
    print("------------------------------------------------")
    
    return {
        "status": "success", 
        "lead_id": len(leads_db), 
        "message": "Lead saved successfully"
    }