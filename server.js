const express = require('express')
const app = express()
const faker = require('faker/locale/es')
const Enterprise = require('./Enterprise.js')
const User = require('./User.js')

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
    res.send('Our express api server is now sending this over to the browser')
})

let users = []

let companies = []

//list all users
app.get('/api/users', (req, res) => {
    res.json(users)
})

//list all companies
app.get('/api/companies', (req, res) => {
    res.json(companies)
})

// add new user
app.post('/api/users/new', (req, res) => {
    console.log(req.body)
    req.body ? users.push(new User()) : users.push(req.body)
    res.json({ status: 'ok' })
})

// add new company
app.post('/api/companies/new', (req, res) => {
  console.log(req.body)
  req.body ? companies.push(new Enterprise()) : companies.push(req.body)
  res.json({ status: 'ok' })
})

// add new user and company
app.post('/api/user/company', (req, res) => {
    console.log(req.body)
    req.body ? users.push(new User()) : users.push(req.body)
    req.body ? companies.push(new Enterprise()) : companies.push(req.body)
    res.json({ status: 'ok' })
})

//list a user by id
// be sure to preface the id variable with a `:` colon
app.get('/api/users/:id', (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id)
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.id])
})

//list a company by id
app.get('/api/companies/:id', (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id)
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.id])
})

//Update user data
app.put('/api/users/:id', (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body
    // we always need to respond with something
    res.json({ status: 'ok' })
})

//Update company data
app.put('/api/users/:id', (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id
    // assuming this id is the index of the users array we can replace the user like so
    companies[id] = req.body
    // we always need to respond with something
    res.json({ status: 'ok' })
})

//Delete users
app.put('/api/users/:id', (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1)
    // we always need to respond with something
    res.json({ status: 'ok' })
})

//Delete companies
app.put('/api/companies/:id', (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id
    // assuming this id is the index of the users array we can remove the user like so
    companies.splice(id, 1)
    // we always need to respond with something
    res.json({ status: 'ok' })
})

const server = app.listen(8000, () =>
    console.log(
        `Server is locked and loaded on port ${server.address().port}!`,
    ),
)
