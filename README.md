Health Care for Preventing Stroke
=====
This project is designed for educating people with high risk of stroke how to prevent or reduce the risk of stroke in the future.
All the pages are in Chinese and I didn't use any kind of internationalization / localization methods for simplicity.

The website features the following:

- Predicting risk of stroke with Logistic Regression (LR).
- Providing probable workarounds for reducing the predicted risk of stroke.
- Providing other generic methods that can probably reduce the risk of stroke.

The data used in training LR can be found in https://www.kaggle.com/asaumya/healthcare-dataset-stroke-data .
The script to train models is stored in `./models`.

To train the model yourself, you have to download file `train_2v.csv.zip` from the website mentioned above (for copyright issues), put it under `./models/` folder, and then run `./models/healthCareModel.py` script.

This project is licensed under MIT, while the copyright of the healthcare dataset belongs to the corresponding original authors.

Much thanks to my teammates for contributing to the webpage, collecting relative papers and contributing to the in-class presentation.
