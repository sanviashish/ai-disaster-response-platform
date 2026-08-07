from fastapi import APIRouter

router = APIRouter()

@router.get("/hospitals")
def get_hospitals():
    return [
        {
            "id": 1,
            "name": "AIIMS Bhubaneswar",
            "available_beds": 25,
            "oxygen": True,
            "location": "Bhubaneswar"
        },
        {
            "id": 2,
            "name": "Capital Hospital",
            "available_beds": 12,
            "oxygen": True,
            "location": "Bhubaneswar"
        }
    ]