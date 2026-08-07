from fastapi import APIRouter

router = APIRouter()


@router.get("/ai/recommendation")
def get_ai_recommendation():

    return {
        "recommendation": "Deploy 2 additional rescue teams to the eastern coastline. Flood probability has increased significantly.",
        "confidence": 96,
        "priority": "High",
        "action": "Deploy rescue teams"
    }