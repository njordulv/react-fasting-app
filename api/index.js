const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${filePath}: ${err}`)
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function writeFileAsync(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}: ${err}`)
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

app.post('/submit-email', async (req, res) => {
  try {
    const formData = req.body
    const data = await readFileAsync('data/email.json')
    const emailData = JSON.parse(data)

    emailData.push(formData)

    await writeFileAsync('data/email.json', JSON.stringify(emailData, null, 2))

    res.status(200).send('Data was saved successfully')
  } catch (err) {
    res.status(500).send('Error saving data')
  }
})

app.post('/submit-checkout', async (req, res) => {
  try {
    const checkoutData = req.body
    const data = await readFileAsync('data/checkout.json')
    const checkoutArray = JSON.parse(data)

    checkoutArray.push(checkoutData)

    await writeFileAsync(
      'data/checkout.json',
      JSON.stringify(checkoutArray, null, 2)
    )

    res.status(200).send('Form submitted successfully!')
  } catch (err) {
    res.status(500).send('Error submitting form')
  }
})

app.listen(4000, () => {
  console.log('Server running on port 4000')
})
