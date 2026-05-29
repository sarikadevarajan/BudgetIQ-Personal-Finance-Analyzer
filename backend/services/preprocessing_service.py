import pandas as pd


def clean_transactions(df):

    # Remove balance forward rows

    df = df[
        ~df["Description"].str.contains(
            "BALANCE FORWARD",
            case=False,
            na=False
        )
    ]

    # Convert amount

    

    # Convert balance

    df["Balance"] = (
        df["Balance"]
        .astype(str)
        .str.replace(",", "", regex=False)
        .astype(float)
    )
    
    
    df["Deposit"] = (
        df["Deposit"]
        .fillna("0")
        .astype(str)
        .str.replace(",", "")
        .astype(float)
    )

    df["Withdrawal"] = (
        df["Withdrawal"]
        .fillna("0")
        .astype(str)
        .str.replace(",", "")
        .astype(float)
    )
    
    df["Amount"] = (
        df["Deposit"] -
        df["Withdrawal"]
)

    df.reset_index(
        drop=True,
        inplace=True
    )

    return df