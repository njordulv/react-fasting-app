const routes = [
  "/quiz",
  ...Array.from({ length: 10 }, (_, i = 0) => `/quiz/quiz-${i + 1}`),
  "/quiz/quiz-height",
  "/quiz/quiz-weight",
  "/quiz/quiz-results",
]
export default routes
