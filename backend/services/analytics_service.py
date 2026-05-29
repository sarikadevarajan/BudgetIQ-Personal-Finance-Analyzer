import pandas as pd
def generate_analytics(df):
    
    df["Date"] = pd.to_datetime(
        df["Date"],
        format="%d %b %y",
        errors="coerce"
    )
    
    df = df.dropna(
        subset=["Date"]
    )
    
    start_date = df["Date"].min()
    end_date = df["Date"].max()
    
    months = (
        (end_date.year - start_date.year) * 12
        + (end_date.month - start_date.month)
        + 1
    )
    
    months = max(months, 1)

    total_income = (
        df[
            df["Transaction_Type"] == "Income"
        ]["Amount"]
        .sum()
    )

    total_expense = abs(
        df[
            df["Transaction_Type"] == "Expense"
        ]["Amount"]
        .sum()
    )

    savings = (
        total_income -
        total_expense
    )
    
    avg_monthly_income = (
    total_income / months
)

    avg_monthly_expense = (
        total_expense / months
)

    avg_monthly_savings = (
        savings / months
)

    current_balance = (
        df["Balance"].iloc[-1]
    )

    largest_expense = abs(
        df[
            df["Transaction_Type"] == "Expense"
        ]["Amount"]
        .min()
    )

    category_spending = (
        abs(
        df[
            df["Transaction_Type"] == "Expense"
        ]
        .groupby("Category")["Amount"]
        .sum()
        )
        .to_dict()
    )
    
    print("Months:", months)
    print("Total Income:", total_income)
    print("Total Expense:", total_expense)
    print("Average Income:", avg_monthly_income)
    print("Average Expense:", avg_monthly_expense)

    return {

        "total_income":
        float(total_income),

        "total_expense":
        float(total_expense),

        "savings":
        float(savings),
        
        "months":
        months,
        
              
        "avg_monthly_income":
        float(avg_monthly_income),

        "avg_monthly_expense":
        float(avg_monthly_expense),

        "avg_monthly_savings":
        float(avg_monthly_savings),


        "current_balance":
        float(current_balance),

        "largest_expense":
        float(largest_expense),

        "category_spending":
        category_spending

    }