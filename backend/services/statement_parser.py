import re
import pandas as pd


def parse_statement(text):

    lines = text.split("\n")

    lines = [
        line.strip()
        for line in lines
        if line.strip()
    ]

    transactions = []

    date_pattern = r"^\d{2}\s\w{3}\s\d{2}"

    for line in lines:

        if re.match(date_pattern, line):

            amounts = re.findall(
                r'[\d,]+\.\d{2}',
                line
            )

            deposit = None
            withdrawal = None
            balance = None

            if len(amounts) == 2:

    # Either Deposit+Balance
    # or Withdrawal+Balance

                balance = amounts[-1]

                amount_value = float(
                    amounts[0].replace(",", "")
                )

                if any(
                    keyword in line.upper()
                    for keyword in [
                        "CREDIT",
                        "SALARY",
                        "INCOME",
                        "REFUND"
                    ]
                ):
                    deposit = amounts[0]

                else:
                    withdrawal = amounts[0]

            cleaned_line = line

            for value in amounts:

                cleaned_line = cleaned_line.replace(
                    value,
                    ""
                )

            parts = cleaned_line.split()

            description = " ".join(parts[6:])

            transactions.append({

                "Date":
                " ".join(parts[:3]),

                "Value_Date":
                " ".join(parts[3:6]),

                "Description":
                description,
                
                "Deposit":
                deposit,

                "Withdrawal":
                withdrawal,

                "Balance":
                balance

            })

    return pd.DataFrame(transactions)