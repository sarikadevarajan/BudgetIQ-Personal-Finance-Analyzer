def generate_budget_recommendations(analytics):

    recommendations = []

    spending = analytics["category_spending"]

    for category, amount in spending.items():

        if amount > 5000:

            recommended = amount * 0.8

            savings = amount - recommended

            recommendations.append({

                "category": category,

                "current_spending": round(amount, 2),

                "recommended_budget": round(recommended, 2),

                "potential_savings": round(savings, 2)

            })

    return recommendations