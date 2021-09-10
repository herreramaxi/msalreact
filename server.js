const cors = require('cors');
const express = require('express')
const app = express()
const port = 3001

if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
}

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})