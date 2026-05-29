def get_monthly_trend(df):
    
    df["Amount"] = (
        df["Amount"]
        .astype(str)
        .str.replace(",", "")
        .astype(float)
)

    df["Month"] = df["Date"].dt.strftime("%b")

    monthly = (
        df[
            df["Transaction_Type"] == "Expense"
        ]
        .groupby("Month")["Amount"]
        .sum()
        .abs()
        .reset_index()
)
    monthly.columns = [
        "month",
        "expense"
    ]

    month_order = {
        "Jan": 1,
        "Feb": 2,
        "Mar": 3,
        "Apr": 4,
        "May": 5,
        "Jun": 6,
        "Jul": 7,
        "Aug": 8,
        "Sep": 9,
        "Oct": 10,
        "Nov": 11,
        "Dec": 12
    }

    monthly["order"] = (
        monthly["month"]
        .map(month_order)
    )

    monthly = (
        monthly
        .sort_values("order")
        .drop(columns=["order"])
    )

    return monthly.to_dict(
        orient="records"
    )