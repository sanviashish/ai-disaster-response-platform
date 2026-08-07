from fastapi import APIRouter

router = APIRouter()


camps = [
    {
        "id": 1,
        "name": "Camp Alpha",
        "location": "Bhubaneswar",
        "occupancy": 320,
        "capacity": 500,
        "food_stock": "Sufficient",
        "water_supply": "Available",
        "medical_team": "Present",
        "status": "Open"
    },
    {
        "id": 2,
        "name": "Camp Bravo",
        "location": "Cuttack",
        "occupancy": 470,
        "capacity": 500,
        "food_stock": "Low",
        "water_supply": "Available",
        "medical_team": "Present",
        "status": "Nearly Full"
    }
]


@router.get("/camps")
def get_camps():
    return camps