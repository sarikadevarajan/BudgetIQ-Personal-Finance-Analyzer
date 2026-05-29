def calculate_retirement(
    current_age,
    retirement_age,
    monthly_savings,
    annual_return=12
):

    years = retirement_age - current_age

    months = years * 12

    monthly_return = annual_return / 100 / 12

    future_value = (
        monthly_savings *
        (((1 + monthly_return) ** months) - 1)
        / monthly_return
    )

    return {
        "years_remaining": years,
        "future_corpus": round(future_value, 2)
    }