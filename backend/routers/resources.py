from fastapi import APIRouter

router = APIRouter()


resources = [
    {
        "id": 1,
        "name": "Food Supplies",
        "quantity": 2480,
        "unit": "kits",
        "percentage": 82,
        "status": "Good"
    },
    {
        "id": 2,
        "name": "Water",
        "quantity": 12340,
        "unit": "bottles",
        "percentage": 65,
        "status": "Available"
    },
    {
        "id": 3,
        "name": "Medical Kits",
        "quantity": 930,
        "unit": "kits",
        "percentage": 39,
        "status": "Low"
    },
    {
        "id": 4,
        "name": "Shelter Kits",
        "quantity": 500,
        "unit": "kits",
        "percentage": 91,
        "status": "Good"
    },
    {
        "id": 5,
        "name": "Power Units",
        "quantity": 48,
        "unit": "units",
        "percentage": 27,
        "status": "Critical"
    }
]


@router.get("/resources")
def get_resources():
    return resources