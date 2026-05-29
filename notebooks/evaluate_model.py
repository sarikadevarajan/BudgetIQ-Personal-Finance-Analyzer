import pandas as pd
import joblib

from sklearn.model_selection import train_test_split

from sklearn.metrics import (
    accuracy_score,
    classification_report
)

df = pd.read_csv(
    "datasets/financial_transactions_train.csv"
)

X = df["Transaction_Text"]

y = df["Label"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = joblib.load(
    "models/category_model.pkl"
)

vectorizer = joblib.load(
    "models/vectorizer.pkl"
)

X_test_vec = vectorizer.transform(
    X_test
)

predictions = model.predict(
    X_test_vec
)

print(
    "Accuracy:",
    accuracy_score(
        y_test,
        predictions
    )
)

print(
    classification_report(
        y_test,
        predictions
    )
)