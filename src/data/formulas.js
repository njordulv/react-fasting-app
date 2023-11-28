export const BMI = (height, weight, totalCm, totalKg) => {
  let bmi = 0

  if (totalCm && totalKg) {
    const heightInMeters = totalCm / 100
    bmi = (totalKg / (heightInMeters * heightInMeters)).toFixed(1)
  } else {
    bmi = ((weight / (height * height)) * 10000).toFixed(1)
  }

  return bmi
}

export const progress = (current, total) => {
  return Math.min((current / total) * 100, 100).toFixed()
}
