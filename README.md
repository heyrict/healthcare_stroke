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

## How to deploy
1. Download `healthcare_stroke.tar.gz` assets in [releases](https://github.com/heyrict/healthcare_stroke/releases).
2. Configure your server to serve the assets.

   Here is one possible configuration for nginx. Make sure to replace `foo.bar` to your server ip or domain.

   ```nginx
   server {
       server_name foo.bar;
       listen 80;

       client_max_body_size 4M;

       location / {
           autoindex on;
           root /path/to/healthcare_stroke/out/;
       }
   }
   ```
