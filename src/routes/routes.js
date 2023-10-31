const routes = [
  "/quiz",
  ...Array.from({ length: 10 }, (_, i = 0) => `/quiz/question-${i + 1}`),
  "/quiz/height",
  "/quiz/weight",
  "/quiz/weight-goal",
  "/quiz/results",
]
export default routes
