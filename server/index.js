import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'

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
    bodyParser.urlencoded({
        extended: false,
    })
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/users', async (req, resp) => {
    axios({
        method: 'GET',
        url: `${baseURL}/users`,
        data: {
            headers
        }
    }).then(e => {
        if(e.status === 200) {
            resp.status(200).json(e.data)
        } else {
            resp.status(500).json(e.status)
        }
    }).catch(err => {
        resp.status(500).json(err)
    })
})

app.get('/captcha', async (req, resp) => {

    axios({
        method: 'GET',
        url: `${baseURL}/security/get-captcha-url`,
        data: {
            headers
        }
    }).then(e => {
        if(e.status === 200) {
            resp.status(200).json(e.data)
        } else {
            resp.status(500).json(e.status)
        }
    }).catch(err => {
        resp.status(500).json(err)
    })
})

app.post('/login', urlencodedParser,  async (req, resp) => {
    console.log(JSON.stringify(req.body))

    axios({
        method: 'POST',
        withCredentials: false,
        url: `${baseURL}/auth/login`,
        data: {
            headers,
            data: JSON.stringify(req.body)
        }
    }).then(e => {
        if(e.status === 200) {
            resp.status(200).json(e)
        } else {
            resp.status(500).json(e)
        }
    }).catch(err => {
        resp.status(500).json(err)
    })
})


app.listen(PORT, () => { console.log(`Server start on port ${PORT}`) })