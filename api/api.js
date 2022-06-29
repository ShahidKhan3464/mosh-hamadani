const { response, urlencoded } = require('express')
const express = require('express')
const app = express()
const port = 3001 || process.env.PORT

// MiddleWare
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const courses = [
    { id: 1, name: 'Web development' },
    { id: 2, name: 'App development' },
    { id: 3, name: 'Artifical Intelligence' }
]

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with given id was not found')
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    const course = { id: courses.length + 1, name: req.body.name }
    courses.push(course)
    res.send(course)
})

app.patch('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with given id was not found')

    course.name = req.body.name
    res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with given id was not found')

    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

app.listen(port, () => console.log(`listening to the port ${port}`))