from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.upload_routes import router
from routes.retirement_routes import router as retirement_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(retirement_router)
@app.get("/")
def home():
    return {
        "message": "BudgetIQ Backend Running"
    }