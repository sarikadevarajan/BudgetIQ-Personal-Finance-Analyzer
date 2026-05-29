import pandas as pd
import joblib

from sklearn.linear_model import LinearRegression

df = pd.read_csv(
    "datasets/bank_statements.csv"
)

# Convert timestamp

df["transactionTimestamp"] = pd.to_datetime(
    df["transactionTimestamp"]
)

# Only expenses

expenses = df[
    df["type"] == "DEBIT"
]

# Create month column

expenses["Month"] = (
    expenses["transactionTimestamp"]
    .dt.month
)

# Monthly spending

monthly_expense = (
    expenses
    .groupby("Month")["amount"]
    .sum()
    .reset_index()
)

X = monthly_expense[["Month"]]

y = monthly_expense["amount"]

model = LinearRegression()

model.fit(X, y)

joblib.dump(
    model,
    "models/forecast_model.pkl"
)

print(
    "Forecast Model Saved Successfully"
)

print(monthly_expense)