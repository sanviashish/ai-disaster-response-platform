from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.dashboard import router as dashboard_router
from routers.sos import router as sos_router
from routers.hospitals import router as hospitals_router
from routers.teams import router as teams_router
from routers.resources import router as resources_router
from routers.camps import router as camps_router
from routers.ai import router as ai_router


app = FastAPI(
    title="AI Disaster Response API",
    version="1.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(dashboard_router)
app.include_router(sos_router)
app.include_router(hospitals_router)
app.include_router(teams_router)
app.include_router(resources_router)
app.include_router(camps_router)
app.include_router(ai_router)


@app.get("/")
def home():
    return {"message": "Backend Running!"}