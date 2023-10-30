const BMI = (height, weight) => {
  return ((weight / (height * height)) * 10000).toFixed(1)
}

const progress = (current, total) => {
  return Math.min((current / total) * 100, 100).toFixed()
}

const weightDifference = (currentWeight, idealWeight) => {
  return ((currentWeight - idealWeight) / idealWeight) * 100
}

export { BMI, progress, weightDifference }
