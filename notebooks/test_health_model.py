import sys
import os

sys.path.append(
    os.path.abspath("backend")
)

from services.health_ml_service import (
    predict_health_score
)

result = predict_health_score(
    income=80000,
    expense=30000,
    savings_rate=62,
    largest_expense=5000
)

print(result)