from pydantic import BaseModel, EmailStr
from typing import Optional, Dict, Any

class LeadCreate(BaseModel):
    email: EmailStr
    name: Optional[str] = None
    category: Optional[str] = "general"
    metadata: Optional[Dict[str, Any]] = {}