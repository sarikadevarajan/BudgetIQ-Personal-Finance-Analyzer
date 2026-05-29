import os
import joblib

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(
            os.path.abspath(__file__)
        )
    )
)

MODEL_PATH = os.path.join(
    BASE_DIR,
    "models",
    "health_model.pkl"
)

model = joblib.load(
    MODEL_PATH
)


def predict_health_score(
    income,
    expense,
    savings_rate,
    largest_expense
):

    prediction = model.predict(
        [[
            income,
            expense,
            savings_rate,
            largest_expense
        ]]
    )[0]

    score = round(prediction)

    if score >= 80:
        status = "Excellent"
    elif score >= 60:
        status = "Good"
    elif score >= 40:
        status = "Average"
    else:
        status = "Poor"

    return {
        "score": score,
        "status": status,
        "savings_rate": round(
            savings_rate,
            2
        )
    }