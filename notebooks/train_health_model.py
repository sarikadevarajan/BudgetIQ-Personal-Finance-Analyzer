import pandas as pd
import joblib

from sklearn.ensemble import RandomForestRegressor

df = pd.read_csv(
    "datasets/financial_health_training.csv"
)

X = df[
    [
        "income",
        "expense",
        "savings_rate",
        "largest_expense"
    ]
]

y = df["health_score"]

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)

joblib.dump(
    model,
    "models/health_model.pkl"
)

print(
    "Health Model Saved Successfully"
)