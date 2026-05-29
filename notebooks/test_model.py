import joblib

model = joblib.load(
    "models/category_model.pkl"
)

vectorizer = joblib.load(
    "models/vectorizer.pkl"
)

samples = [

    "Flipkart",

    "Credit card EMI payment",

    "NPS contribution",

    "Netflix subscription"

]

for text in samples:

    vec = vectorizer.transform(
        [text]
    )

    prediction = model.predict(
        vec
    )[0]

    print(
        text,
        " --> ",
        prediction
    )