from fastapi import APIRouter

from services.retirement_service import (
    calculate_retirement
)

router = APIRouter()

@router.post("/retirement")

def retirement_plan(data: dict):

    result = calculate_retirement(
        data["current_age"],
        data["retirement_age"],
        data["monthly_savings"]
    )

    return result