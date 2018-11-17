//Model
var Tasks = require("../models/tasks");

//Controller
module.exports = function(app){
  
  app.post('/tasks', (req, res) => {
    var db = req.db;
    var prioridade = req.body.prioridade;
    var titulo = req.body.titulo;
    var estimativa = req.body.estimativa;
    var dificuldade = req.body.dificuldade;
    var descricao_tarefa = req.body.descricao_tarefa;
    var tags = req.body.tags;
    var status = req.body.status;
    var inicio = req.body.inicio;
    var fim = req.body.fim;
    var mais_detalhes = req.body.mais_detalhes;
    var notificacoes = req.body.notificacoes;

    var new_post = new Tasks({
      prioridade: prioridade,
      titulo: titulo,
      prioridade: prioridade,
      estimativa: estimativa,
      dificuldade: dificuldade,
      descricao_tarefa: descricao_tarefa,
      tags: tags,
      status: status,
      inicio: inicio,
      fim: fim,
      mais_detalhes: mais_detalhes,
      notificacoes: notificacoes,
    })
  
    new_post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
  })
  
  // Fetch all posts
  app.get('/posts', (req, res) => {
    Post.find({}, 'title description', function (error, posts) {
      if (error) { console.error(error); }
      res.send({
        posts: posts
      })
    }).sort({_id:-1})
  })
  
  // Fetch single post
  app.get('/posts/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.params.id, 'title description', function (error, post) {
      if (error) { console.error(error); }
      res.send(post)
    })
  })
  
  // Update a post
  app.put('/posts/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.params.id, 'title description', function (error, post) {
      if (error) { console.error(error); }
  
      post.title = req.body.title
      post.description = req.body.description
      post.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true
        })
      })
    })
  })
  
  // Delete a post
  app.delete('/posts/:id', (req, res) => {
    var db = req.db;
    Post.remove({
      _id: req.params.id
    }, function(err, post){
      if (err)
        res.send(err)
      res.send({
        success: true
      })
    })
  })

  return app
}