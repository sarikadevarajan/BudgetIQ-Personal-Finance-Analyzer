def calculate_health_score(analytics):

    income = analytics["total_income"]

    expense = analytics["total_expense"]

    savings = analytics["savings"]

    if income == 0:

        return {
            "score": 0,
            "status": "No Income Data"
        }

    savings_rate = (
        savings / income
    ) * 100

    if savings_rate >= 40:

        score = 90
        status = "Excellent"

    elif savings_rate >= 25:

        score = 75
        status = "Good"

    elif savings_rate >= 10:

        score = 60
        status = "Average"

    else:

        score = 40
        status = "Needs Improvement"

    return {

        "score": score,

        "status": status,

        "savings_rate":
        round(savings_rate, 2)

    }