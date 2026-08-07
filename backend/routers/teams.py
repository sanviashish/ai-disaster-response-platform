from fastapi import APIRouter

router = APIRouter()

@router.get("/teams")
def get_teams():
    return [
        {
            "id": 1,
            "team": "NDRF Team A",
            "members": 12,
            "status": "On Mission",
            "location": "Bhubaneswar"
        },
        {
            "id": 2,
            "team": "ODRAF Team B",
            "members": 10,
            "status": "Available",
            "location": "Cuttack"
        }
    ]