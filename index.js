import express from 'express'

const app = express()

app.get('/data', (req, res) => {
    res.send('Reponse .......')
})

app.listen(3000)