const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (!fs.existsSync('data/email.json')) {
  fs.writeFileSync('data/email.json', '[]', 'utf8')
}

app.post('/submit-email', (req, res) => {
  const formData = req.body

  let emailData = []
  try {
    const data = fs.readFileSync('data/email.json', 'utf8')
    emailData = JSON.parse(data)
  } catch (err) {
    console.error(err)
  }

  emailData.push(formData)

  fs.writeFileSync(
    'data/email.json',
    JSON.stringify(emailData, null, 2),
    'utf8'
  )

  res.status(200).send('Data was saved successfully')
})

app.listen(4000, () => {
  console.log('Server running on port 4000')
})
