import joblib

model = joblib.load(
    "models/forecast_model.pkl"
)

prediction = model.predict(
    [[13]]
)

print(
    "Predicted Next Month Expense:",
    round(prediction[0], 2)
)