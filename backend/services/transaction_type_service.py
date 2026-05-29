def detect_transaction_type(description):

    description = description.upper()

    income_keywords = [
        "SALARY",
        "INTEREST",
        "CREDIT",
        "IMPS",
        "NEFT",
        "RTGS",
        "SBIN",
        "CRADJ"
    ]

    for keyword in income_keywords:

        if keyword in description:
            return "Income"

    return "Expense"
def add_transaction_type(df):

    df["Transaction_Type"] = (
        df["Description"]
        .apply(detect_transaction_type)
    )

    return df