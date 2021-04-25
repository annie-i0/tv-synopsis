const express = require('express')
const showdata = require('./showdata')
// const seasonPage = require('./seasonPage')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.get('/season/:id', (request, response) => {
  const season = showdata.seasons.find((season) => { return season.number === parseInt(request.params.id) })

  return response.render('season', { season, title: showdata.title })
})



app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on 1337...')
})
