# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .py
#       format_name: light
#       format_version: '1.4'
#       jupytext_version: 1.1.1
#   kernelspec:
#     display_name: Python 3
#     language: python
#     name: python3
# ---

# +
import os
import zipfile
import pandas as pd
import numpy as np
import optuna
import matplotlib.pyplot as plt
import seaborn as sns

from collections import Counter

from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_curve, roc_auc_score
from sklearn.preprocessing import StandardScaler

# %matplotlib inline

# +
with zipfile.ZipFile("./train_2v.csv.zip") as f:
    df = pd.read_csv(f.open("train_2v.csv"))

del df['id']
df.head()
# -

df.nunique()

stroke_mask = df.stroke == 1
nstroke_mask = df.stroke == 0

# +
cnt_cols = ['gender', 'hypertension', 'heart_disease', 'ever_married', 'work_type', 'Residence_type', 'smoking_status', 'stroke']

sns.set_palette("husl")
plt.figure(figsize=(16, 16))
print("Stroke(Left) vs Non-Stroke(Right)")
for ind, col in enumerate(cnt_cols):
    plt.subplot(4, 4, ind * 2 + 1)
    df[stroke_mask].groupby(col).size().plot(kind="bar")
    plt.subplot(4, 4, ind * 2 + 2)
    df[nstroke_mask].groupby(col).size().plot(kind="bar")

# +
numer_cols = ['age', 'avg_glucose_level', 'bmi']

sns.set_palette("husl")
plt.figure(figsize=(16, 6))
for ind, col in enumerate(numer_cols):
    plt.subplot(1, 3, ind + 1)
    sns.distplot(df.loc[stroke_mask, col].dropna(), label="stroke")
    sns.distplot(df.loc[nstroke_mask, col].dropna(), label="non-stroke")
    plt.legend()

# +
cat_cols = ['gender', 'ever_married', 'work_type', 'Residence_type', 'smoking_status']
enc = {}
for col in cat_cols:
    enc[col] = df[col].unique()

enc


# -

# # Logistic Regression

def preprocess(X):
    returns = X.copy()
    for col in cat_cols:
        for val in enc[col]:
            returns["%s__%s" % (col, val)] = (returns[col] == val).map(int)
        del returns[col]
    return returns


# +
train = df.dropna(subset=["bmi"])
X = preprocess(train.iloc[:, :-1])
y = train.iloc[:, -1]
train_X, test_X, train_y, test_y = train_test_split(X, y, test_size=0.2, random_state=42)

# scaler = StandardScaler()

# train_X = scaler.fit_transform(train_X)
# test_X = scaler.transform(test_X)

# scaler.mean_, scaler.var_

model = LogisticRegression(class_weight="balanced", max_iter=1000, random_state=42)
model.fit(train_X, train_y)
# -

pred_y = model.predict_proba(test_X)[:, 1]
auc = roc_auc_score(test_y, pred_y)
fpr, tpr, thresholds = roc_curve(test_y, pred_y)
print("AUC =", auc)
plt.plot(fpr, tpr)

model.coef_, model.intercept_

X.columns

# # LightGBM

import lightgbm as lgb


def preprocess(X):
    returns = X.copy()
    for col in cat_cols:
        enc_col = list(enc[col])
        returns[col] = returns[col].map(lambda x: enc_col.index(x))
    return returns


# +
train = df
X = preprocess(train.iloc[:, :-1])
y = train.iloc[:, -1]
train_X, test_X, train_y, test_y = train_test_split(X, y, test_size=0.4, random_state=42)
valid_X, test_X, valid_y, test_y = train_test_split(test_X, test_y, test_size=0.5, random_state=42)

train_data = lgb.Dataset(train_X, train_y)
valid_data = lgb.Dataset(valid_X, valid_y)

# +
# def objective(trial):
#     param = {
#         'boost': 'gbdt',
#         'learning_rate': 0.001,
#         'max_depth': trial.suggest_int('max_depth', 4, 7),
#         'num_leaves': trial.suggest_int('num_leaves', 2, 16),
#         'metric': 'auc',
#         'num_threads': 2,
#         'min_data_in_leaf': trial.suggest_int('min_data_in_leaf', 1, 20),
#         'tree_learner': 'serial',
#         'verbosity': 0,
#     }

#     clf = lgb.train(
#         param,
#         train_data,
#         10000,
#         valid_sets=[train_data, valid_data],
#         verbose_eval=False,
#         early_stopping_rounds=1000)

#     return clf.best_score['valid_1']['auc']

# study = optuna.create_study(direction="maximize")
# study.optimize(objective, n_trials=10)

# study.best_params

# +
param = {
    'boost': 'gbdt',
    'learning_rate': 0.001,
    'max_depth': 5,
    'num_leaves': 6,
    'metric': 'auc',
    'num_threads': 2,
    'min_data_in_leaf': 20,
    'tree_learner': 'serial',
    'verbosity': 1,
}

clf = lgb.train(
    param,
    train_data,
    10000,
    valid_sets=[train_data, valid_data],
    verbose_eval=500,
    early_stopping_rounds=1000)
# -

pred_y = clf.predict(test_X)
auc = roc_auc_score(test_y, pred_y)
fpr, tpr, thresholds = roc_curve(test_y, pred_y)
print("AUC =", auc)
plt.plot(fpr, tpr)


