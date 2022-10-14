import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/authentication', (req, res) => {
    return res.json({
        auth: true
    })
})

export default app