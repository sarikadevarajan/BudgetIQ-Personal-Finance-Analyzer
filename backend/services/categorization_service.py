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
    "category_model.pkl"
)

VECTORIZER_PATH = os.path.join(
    BASE_DIR,
    "models",
    "vectorizer.pkl"
)

model = joblib.load(MODEL_PATH)

vectorizer = joblib.load(VECTORIZER_PATH)


def categorize_transaction(description):

    description_upper = description.upper()

    # Banking-specific rules

    if "ATM WITHDRAWAL" in description_upper:
        return "Cash Withdrawal"

    elif "UPI" in description_upper:
        return "UPI Transfer"

    elif "IMPS" in description_upper:
        return "Bank Transfer"

    elif "NEFT" in description_upper:
        return "Bank Transfer"
    
    elif "SWIGGY" in description:
        return "Food"
    
    elif "INTEREST" in description_upper:
        return "Interest"

    elif "PURCHASE" in description:
        return "Shopping"

    elif "AIRTEL" in description:
        return "Bills"

    elif "AMAZON" in description:
        return "Shopping"

    
    # ML Prediction

    try:

        vector = vectorizer.transform(
            [description]
        )
        
        probabilities = model.predict_proba(
            vector
        )[0]
        
        max_probability = max(
          probabilities
        )
        
        prediction = model.predict(
           vector
        )[0]
        
        if max_probability < 0.70:
           return "Others"

        return prediction

    

    except Exception:

        return "Others"


def add_categories(df):

    df["Category"] = df["Description"].apply(
        categorize_transaction
    )

    return df