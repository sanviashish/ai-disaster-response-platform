from fastapi import APIRouter
from pydantic import BaseModel


router = APIRouter()


# -----------------------------
# SOS Data Model
# -----------------------------

class SOSCreate(BaseModel):
    name: str
    location: str
    priority: str


# -----------------------------
# Temporary SOS Data
# -----------------------------

sos_requests = [
    {
        "id": 1,
        "name": "Rahul",
        "location": "Bhubaneswar",
        "priority": "High",
        "status": "Pending"
    },
    {
        "id": 2,
        "name": "Priya",
        "location": "Cuttack",
        "priority": "Medium",
        "status": "Rescued"
    }
]


# -----------------------------
# GET /sos
# -----------------------------

@router.get("/sos")
def get_sos():
    return sos_requests


# -----------------------------
# POST /sos
# -----------------------------

@router.post("/sos")
def create_sos(request: SOSCreate):

    new_sos = {
        "id": len(sos_requests) + 1,
        "name": request.name,
        "location": request.location,
        "priority": request.priority,
        "status": "Pending"
    }

    sos_requests.append(new_sos)

    return {
        "message": "SOS created successfully",
        "sos": new_sos
    }