import express from 'express'
import request from 'request'
import bodyParser from 'body-parser'
import cors from 'cors'

const baseURL = 'https://social-network.samuraijs.com/api/1.0'
const headers = {
    'API_KEY': '30b92df3-98dc-43d5-ac19-41805ab0fdeb',
    contentType: 'application/json; charset=utf-8'
}

const app = express()
const PORT = 5000

const urlencodedParser = bodyParser.urlencoded({
    extended: false,
  })

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    req.header("Access-Control-Allow-Headers", "X-Requested-With")
    cors({
        origin: 'http://localhost:8080/*'
    })
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

app.get('/captcha', async (req, resp) => {
    request(
        {
            url: `${baseURL}/security/get-captcha-url`,
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

app.post('/login', urlencodedParser,  async (req, resp) => {
    console.log(req)
    request(
        {
            url: `${baseURL}/auth/login`,
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