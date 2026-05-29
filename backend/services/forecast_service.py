from sklearn.linear_model import LinearRegression
import numpy as np
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score
)
from sklearn.ensemble import RandomForestRegressor

def generate_forecast(monthly_trend):

    # Need at least 2 months of data

    if len(monthly_trend) < 2:

        return {
            "message": "Not enough data for forecasting"
        }

    expenses = [
        abs(item["expense"])
        for item in monthly_trend
    ]

    current_expense = expenses[-1]

    

    if len(expenses) < 3:

        change = expenses[-1] - expenses[-2]

        predicted = expenses[-1] + change

        change_percent = (
            (predicted - current_expense)
            / current_expense
        ) * 100

        if predicted > current_expense:
            trend = "Increase"
        elif predicted < current_expense:
            trend = "Decrease"
        else:
            trend = "Stable"

        return {
            "current_month_expense": float(
                round(current_expense, 2)
            ),
            "predicted_next_month": float(
                round(predicted, 2)
            ),
            "change_percent": float(
                round(change_percent, 2)
            ),
            "trend": trend,
            "model": "Simple Trend Model"
        }



    X = np.arange(
        len(expenses)
    ).reshape(-1, 1)

    y = np.array(expenses)

    lr_model = LinearRegression()

    lr_model.fit(X, y)
    
    rf_model = RandomForestRegressor(n_estimators=100,random_state=42)

    rf_model.fit(X, y)

    rf_pred = rf_model.predict(X)

    lr_pred = lr_model.predict(X)

    next_month = np.array(
        [[len(expenses)]]
    )

    lr_next = lr_model.predict(next_month
    )[0]

    rf_next = rf_model.predict(
    next_month
)[0]
    
    
    lr_pred = lr_model.predict(X)

    lr_mae = mean_absolute_error(
    y,
    lr_pred
)

    lr_rmse = np.sqrt(
    mean_squared_error(
        y,
        lr_pred
    )
)

    lr_r2 = r2_score(
    y,
    lr_pred
)
    
    

    rf_mae = mean_absolute_error(y,rf_pred)

    rf_rmse = np.sqrt(mean_squared_error(y,rf_pred)
)

    rf_r2 = r2_score(y,rf_pred)
    
    
    
    best_model = (
    "Random Forest"
    if rf_r2 > lr_r2
    else "Linear Regression"
)

    predicted = (
    rf_next
    if rf_r2 > lr_r2
    else lr_next
)
    predicted = max(0, predicted)

    change_percent = (
        (predicted - current_expense)
        / current_expense
    ) * 100

    if predicted > current_expense:
        trend = "Increase"
    elif predicted < current_expense:
        trend = "Decrease"
    else:
        trend = "Stable"
        
        
    

    return {
        "current_month_expense": float(round(current_expense, 2)
        ),
        "predicted_next_month": float(round(predicted, 2)
        ),
        "change_percent": float(round(change_percent, 2)
        ),
        "trend": trend,
        "model": best_model,
        "random_forest_metrics": {
            "mae": round(rf_mae, 2),
            "rmse": round(rf_rmse, 2),
            "r2_score": round(rf_r2, 4)
        },
        "linear_regression_metrics": {
        "mae": round(lr_mae, 2),
        "rmse": round(lr_rmse, 2),
        "r2_score": round(lr_r2, 4)
}
    }