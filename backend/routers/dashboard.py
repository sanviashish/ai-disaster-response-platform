from fastapi import APIRouter

router = APIRouter()

@router.get("/dashboard")
def dashboard():
    return {
        "active_sos": 128,
        "high_risk_zones": 8,
        "rescue_teams": 46,
        "lives_saved": 2514
    }