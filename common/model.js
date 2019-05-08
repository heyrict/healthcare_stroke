const W = [
  0.07624567, // age
  0.58732495, // hypertension
  0.62531765, // heart_disease
  0.00383891, // avg_glucose_level
  0.008927, // bmi
  -0.7874647,
  -0.88882866,
  -0.53077427, // gender
  -1.06084544,
  -1.14622218, // ever_married
  -0.27454189,
  -0.24202829,
  -1.27783671,
  -0.10599666,
  -0.30666408, // work_type
  -1.18384372,
  -1.0232239, // residence_type
  0,
  0.22783205,
  0.19205192,
  0.50386372, // smoking_status
];

const b = -2.20706762;

const sigmoid = x => 1 / (1 + Math.exp(-x));

export const predict_proba = data => {
  return sigmoid(
    W[0] * data.age +
      W[1] * data.hypertension +
      W[2] * data.heart_disease +
      W[3] * data.avg_glucose_level +
      W[4] * data.bmi +
      W[data.gender + 5] +
      W[data.ever_married + 8] +
      W[data.work_type + 10] +
      W[data.residence_type + 15] +
      W[data.smoking_status + 17] +
      b,
  );
};

export const round = data => Math.round(data * 1e2) / 1e2;

export const get_proba = data => {
  const result = predict_proba(data);
  const percentage = round(result * 100);
  return percentage;
};
