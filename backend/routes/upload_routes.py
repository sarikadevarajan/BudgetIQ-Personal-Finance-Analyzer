from fastapi import APIRouter, UploadFile, File
import os
from services.pdf_service import extract_text_from_pdf
from services.statement_parser import parse_statement
from services.preprocessing_service import clean_transactions
from services.categorization_service import add_categories
from services.analytics_service import generate_analytics
from services.transaction_type_service import (add_transaction_type)
from services.health_score_service import (
    calculate_health_score
)
from services.insights_service import generate_insights
from services.budget_service import (
    generate_budget_recommendations
)
from services.trend_service import get_monthly_trend
from services.forecast_service import (
    generate_forecast
)
from services.health_ml_service import (
    predict_health_score
)


router = APIRouter()

UPLOAD_FOLDER = "uploads"

# Create uploads folder if not exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:

        content = await file.read()
        buffer.write(content)

    extracted_text = extract_text_from_pdf(file_path)
    
    text_file_path = os.path.join(UPLOAD_FOLDER,"extracted_text.txt")
    
    with open(text_file_path,"w",encoding="utf-8") as f:
        f.write(extracted_text)
        
    print("Created:", text_file_path)
    
    
    print(extracted_text[:5000])
    df = parse_statement(extracted_text)
    print("\n===== DATAFRAME INFO =====")
    print("Columns:", df.columns.tolist())
    print("Shape:", df.shape)
    print(df.head())
    print("=========================\n")
    df = clean_transactions(df)
    print(df.head(10))
    
    df = add_categories(df)
    df = add_transaction_type(df)
    analytics = generate_analytics(df)
    budget_recommendations = (generate_budget_recommendations(analytics))
    health_score = calculate_health_score(analytics)
    if analytics["total_income"] > 0:
        savings_rate = (analytics["savings"]/ analytics["total_income"]) * 100
    else:
        savings_rate = 0  

    health_score = predict_health_score(
      analytics["total_income"],
      analytics["total_expense"],
      savings_rate,
      analytics["largest_expense"]
    ) 
    insights = generate_insights(analytics,health_score)
    
    monthly_trend = get_monthly_trend(df)
    forecast = generate_forecast(monthly_trend)
    
    
    print("Before cleaning:", len(df))

    df = clean_transactions(df)

    print("After cleaning:", len(df))
    print(df.head())

    return {
        "message": "PDF Uploaded Successfully",
        "total_transactions": len(df),
        "analytics": analytics,
        "health_score": health_score,
        "insights": insights,
        "budget_recommendations":budget_recommendations,
        "monthly_trend": monthly_trend,
        "forecast": forecast,
        "transactions": df.head(10).to_dict(orient="records")
    }