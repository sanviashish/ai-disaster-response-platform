from fastapi import APIRouter

router = APIRouter()

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

@router.get("/sos")
def get_sos():
    return sos_requests

@router.post("/sos")
def create_sos(request: dict):
    request["id"] = len(sos_requests) + 1
    sos_requests.append(request)
    return {
        "message": "SOS created successfully",
        "sos": request
    }