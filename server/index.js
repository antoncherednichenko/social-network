import express from 'express'
import request from 'request'

const baseURL = 'https://social-network.samuraijs.com/api/1.0'
const headers = {
    'API_KEY': '30b92df3-98dc-43d5-ac19-41805ab0fdeb',
    contentType: 'application/json; charset=utf-8'
}

const app = express()
const PORT = 5000

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/users', async (req, resp) => {
    request(
        {
            url: `${baseURL}/users`,
            headers
        },
        (error, response, body) => {
            if(error) {
                resp.status(500).json(error)
            } else {
                resp.status(200).json(body)
            }
        }
    )
})


app.listen(PORT, () => { console.log(`Server start on port ${PORT}`) })