def generate_insights(analytics, health_score):

    insights = []

    if analytics["savings"] > 0:

        insights.append(
            f"You saved ₹{analytics['savings']:.2f} during this period."
        )

    if analytics["largest_expense"] > 10000:

        insights.append(
            "You made a high-value purchase. Review if it was necessary."
        )

    highest_category = max(
        analytics["category_spending"],
        key=analytics["category_spending"].get
    )

    insights.append(
        f"Highest spending category: {highest_category}"
    )

    if health_score["score"] >= 80:

        insights.append(
            "Your financial health is excellent."
        )

    elif health_score["score"] >= 60:

        insights.append(
            "Your financial health is good, but there is room for improvement."
        )

    else:

        insights.append(
            "Focus on increasing savings and reducing unnecessary expenses."
        )

    return insights