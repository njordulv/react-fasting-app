const BMI = (height, weight) => {
  return ((weight / (height * height)) * 10000).toFixed(1)
}

const progress = (current, total) => {
  return Math.min((current / total) * 100, 100).toFixed()
}

export { BMI, progress }
