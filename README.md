# BudgetIQ - AI Powered Personal Finance Analyzer

## Overview

BudgetIQ is an AI-powered personal finance analysis platform that helps users understand and improve their financial habits. By uploading a bank statement PDF, users can instantly receive detailed analytics, spending insights, financial health scores, expense forecasts, and personalized recommendations.

The system combines Machine Learning, Data Analytics, and Interactive Visualization to transform raw banking data into meaningful financial intelligence.

---

## Features

### Bank Statement Processing

* Upload bank statement PDFs
* Automatic transaction extraction
* Supports structured bank statement formats
* Data cleaning and preprocessing

### Transaction Categorization

* Rule-based categorization
* Machine Learning based categorization
* Categories include:

  * Food
  * Shopping
  * Bills
  * Investments
  * Bank Transfer
  * UPI Transfer
  * Interest
  * Cash Withdrawal
  * Others

### Financial Analytics

* Total Income
* Total Expenses
* Savings Calculation
* Average Monthly Income
* Average Monthly Expense
* Average Monthly Savings

### Financial Health Score

* AI-generated financial health score
* Spending efficiency analysis
* Savings assessment
* Personalized financial recommendations

### Expense Forecasting

* Linear Regression Model
* Random Forest Regressor
* Future expense prediction
* Trend detection
* Model evaluation metrics

### Interactive Dashboard

* Monthly spending trends
* Category distribution
* Forecast visualization
* Financial health indicators
* AI Financial Coach recommendations

---

## Machine Learning Components

### Transaction Categorization Model

* TF-IDF Vectorization
* Multinomial Naive Bayes Classification
* Confidence-based prediction

### Financial Health Prediction Model

* Random Forest Regressor
* Predicts user financial health score

### Expense Forecasting Models

#### Linear Regression

Used to identify spending trends over time.

#### Random Forest Regressor

Used to capture complex spending patterns and improve prediction accuracy.

### Evaluation Metrics

* Mean Absolute Error (MAE)
* Root Mean Squared Error (RMSE)
* R² Score

---

## Technology Stack

### Frontend

* React.js
* Axios
* Recharts
* CSS

### Backend

* FastAPI
* Python

### Data Processing

* Pandas
* NumPy

### Machine Learning

* Scikit-Learn
* Joblib

### PDF Processing

* PDFPlumber
* PyPDF2

### Deployment

* Frontend: Vercel
* Backend: Railway

---

## Project Architecture

User Uploads PDF

↓

PDF Parsing & Data Extraction

↓

Data Cleaning & Preprocessing

↓

Transaction Categorization

↓

Financial Analytics Generation

↓

ML Forecasting

↓

Health Score Prediction

↓

Dashboard Visualization

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/BudgetIQ-Personal-Finance-Analyzer.git
cd BudgetIQ-Personal-Finance-Analyzer
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

---

## API Endpoint

### Upload PDF

```http
POST /upload
```

Accepts:

```text
multipart/form-data
```

Parameter:

```text
file
```

Returns:

```json
{
  "analytics": {},
  "forecast": {},
  "health_score": {},
  "recommendations": []
}
```

---

## Future Enhancements

* Support multiple bank formats
* OCR support for scanned statements
* Budget planning module
* Goal tracking system
* Real-time transaction monitoring
* AI chatbot financial assistant
* Multi-user authentication
* Mobile application

---

## Author

Sarika Devarajan

Computer Science Engineering (Data Science)

BudgetIQ was developed as a full-stack Machine Learning project integrating financial analytics, predictive modeling, and cloud deployment technologies.


Live Demo link: https://budget-iq-personal-finan-git-0001e8-sarika-devarajan-s-projects.vercel.app/
