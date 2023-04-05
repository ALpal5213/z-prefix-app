const express = require('express');
const cors = require('cors')
const knex = require ('knex')(require('./knexfile.js')['development']);

const app = express();
const port = 7999;

app.use(express.json())
app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
))

/* GET *******************************************************************/

app.get('/', (req, res) => {
  res.send('Api is up')
})

app.get('/table/:table', (req, res) => {
  knex(req.params.table)
    .select('*')
    .then(data => res.status(200).json(data));
})

/* POST ******************************************************************/

app.post('/user', (req, res) => {
  knex('user')
    .insert(req.body)
    .then(data => res.status(201).send("Post to user table was successful"))
})

app.post('/item', (req, res) => {
  knex('item')
    .insert(req.body)
    .then(data => res.status(201).send("Post to item table was successful"))
})

/* DELETE ****************************************************************/

app.delete('/user/:id', (req, res) => {
  knex('user').where('id', req.params.id)
    .del()
    .then(data => res.status(200).send(`Deleted user ${req.params.id}`))
})

app.delete('/item/:id', (req, res) => {
  knex('item').where('id', req.params.id)
    .del()
    .then(data => res.status(200).send(`Deleted item ${req.params.id}`))
})

/* PATCH *****************************************************************/

app.patch('/user/:id', (req, res) => {
  knex('user').where('id', req.params.id)
    .update(req.body)
    .then(data => res.status(200)
      .send(`Patched user ${req.params.id}`)
    )
})

app.patch('/item/:id', (req, res) => {
  knex('item').where('id', req.params.id)
    .update(req.body)
    .then(data => res.status(200)
      .send(`Patched item ${req.params.id}`)
    )
})

/* PUT *******************************************************************/

app.put('/user/:id', (req, res) => {
  knex('user').where('id', req.params.id)
    .update({
      first_name: req.body.first_name || null, 
      last_name:  req.body.last_name || null, 
      username:  req.body.username || null, 
      password:  req.body.password || null, 
      account:  req.body.account || null
    })
    .then(data => res.status(200)
      .send(`Put user ${req.params.id}`)
    )
})

app.put('/item/:id', (req, res) => {
  knex('item').where('id', req.params.id)
    .update({
      user_id: req.body.user_id || null, 
      item_name:  req.body.item_name || null, 
      description:  req.body.description || null, 
      quantity:  req.body.quantity || null, 
      image:  req.body.image || null
    })
    .then(data => res.status(200)
      .send(`Put item ${req.params.id}`)
    )
})

/* OTHER *****************************************************************/

app.all('/*', (req, res) => {
  res.status(405).send('Method not authorized');
})

app.listen(port, () => console.log(`Server is running on port ${port}`))