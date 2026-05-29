from services.forecast_service import generate_forecast

data = [
    {"month": "A", "expense": 12000},
    {"month": "B", "expense": 14000},
    {"month": "C", "expense": 13000},
    {"month": "D", "expense": 16000}
]

print(
    generate_forecast(data)
)