import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv(
    "datasets/financial_transactions_train.csv"
)

print(df.head())

print("\nDataset Shape:")
print(df.shape)

print("\nMissing Values:")
print(df.isnull().sum())

print("\nCategory Distribution:")
print(df["Label"].value_counts())

plt.figure(figsize=(12,6))

sns.countplot(
    y=df["Label"],
    order=df["Label"].value_counts().index
)

plt.title("Transaction Category Distribution")

plt.tight_layout()

plt.show()