def get_daily_trend(df):

    daily = (
        df[
            df["Transaction_Type"] == "Expense"
        ]
        .groupby("Date")["Amount"]
        .sum()
        .abs()
        .reset_index()
    )

    daily.columns = [
        "date",
        "expense"
    ]

    daily = daily.sort_values("date")

    return daily.to_dict(
        orient="records"
    )