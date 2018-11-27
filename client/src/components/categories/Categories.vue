
<template>
  <div class="posts row no-gutters">
    <div class="col-sm-9 height-100hv">
      <div class="container mt-5 pt-4">
        <div class="row">
          <div class="col-sm-6">
            <h1 class="text-left">Categorias</h1>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-4">
        <div class="row">
          <div class="col-sm-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="material-icons">search</i>
                </div>
              </div>
              <input type="text" required="required" class="form-control" placeholder="Buscar">
            </div>
          </div>
          <div class="col-sm-3 offset-sm-6">
            <button class="btn btn-default float-right"><i class="material-icons align-middle">more_vert</i></button>
          </div>
        </div>
        <div class="row mb-4 mt-3 text-left">
          <div class="col-sm-12">
            t
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 bg-dark no-scroll">
      <div class="container mt-sm-5 pt-4">
        <div class="row">
          <ul class="nav nav-pills nav-fill col-sm-12" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active small" id="home-tab" data-toggle="tab" href="#home"><i class="material-icons">add</i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link small" id="profile-tab" data-toggle="tab" href="#profile"><i class="material-icons">settings</i></a>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="tab-content container text-left" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row mt-4">
                <div class="col-sm-12">
                  <h4 class="text-center text-info">Adicionar categoria</h4>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-sm-12">
                  <span class="small text-white">Título</span>
                  <div class="input-group">
                    <input type="text" class="form-control" v-model="estimativa" required>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <span class="small text-white">Descrição</span>
                  <div class="input-group">
                    <textarea class="form-control textarea-height" placeholder="Título" type="date" v-model="inicio" required></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="row mt-4">
                <div class="col-sm-12">
                  <h4 class="text-center text-info">Tarefas finalizadas</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row fixed-bottom no-gutters">
          <div class="col-sm-3 offset-sm-9 bg-secondary p-3">
            <button class="btn btn-orange float-left col-sm-12 shadow" type="submit"><i class="material-icons align-middle">done</i> <span>Salvar categoria</span></button>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import CRUDServices from '@/services/CRUDServices'

export default {
  name: 'tasks',
  data () {
    return {
      tasks: [],
      execucao: [],
      finalizadas: [],
      atrasadas: [],
      prioridade: '',
      titulo:'',
      estimativa:'',
      dificuldade:'',
      descricao_tarefa:'',
      tags:'',
      status:'',
      inicio:'',
      fim:'',
      mais_detalhes:'',
      notificacoes: false
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    async getTasks () {
      const response = await CRUDServices.fetchPosts('tasks')
      
      let execucao = []
      let finalizadas = []
      let atrasadas = []

      // this.tasks = [
      //   {_id: 1, prioridade:"", titulo:"Reunião com diretoria", estimativa: "12", dificuldade:"1", descricao_tarefa: "123", tags :"123", status:"1",inicio : "2018-11-13", fim: "2018-11-19", mais_detalhes:"", notificacoes:false},
      //   {_id: 2, prioridade:"", titulo:"123", estimativa: "12", dificuldade:"2", descricao_tarefa: "123", tags :"123", status:"2",inicio : "2018-11-13", fim: "2018-11-19", mais_detalhes:"", notificacoes:false},
      //   {_id: 3, prioridade:"", titulo:"123", estimativa: "12", dificuldade:"3", descricao_tarefa: "123", tags :"123", status:"3",inicio : "2018-11-13", fim: "2018-11-19", mais_detalhes:"", notificacoes:false}
      // ]
      
      this.tasks = response.data.tasks

      this.tasks.forEach(function(item){
        switch (item.status){
          case "1":
            finalizadas.push(item)
            break;
          case "2":
            execucao.push(item)
            break;
          case "3":
            atrasadas.push(item)
            break;
        }
      })

      this.execucao = execucao
      this.finalizadas = finalizadas
      this.atrasadas = atrasadas
      
    },
    async deleteTask (id) {
      var confirmacao = confirm("Deseja mesmo excluir essa tarefa? Esta ação é irrevercível.")
      if(confirmacao){
        await CRUDServices.deletePost('tasks/', id)
        location.reload()
      }
    },
    async showModal (id){
      const response = await CRUDServices.getPost('tasks/', {id: id})

      switch(response.data.prioridade){
        case "1":
          response.data.prioridade = "Baixa"
          break;
        case "2":
          response.data.prioridade = "Média"
          break;
        case "3":
          response.data.prioridade = "Alta"
          break;
      }

      switch(response.data.dificuldade){
        case "1":
          response.data.dificuldade = "Fácil"
          break;
        case "2":
          response.data.dificuldade = "Médio"
          break;
        case "3":
          response.data.dificuldade = "Difícil"
          break;
      }

      switch(response.data.status){
        case "1":
          response.data.status = "Finalizado"
          break;
        case "2":
          response.data.status = "Em Execução"
          break;
        case "3":
          response.data.status = "Atrasado"
          break;
      }

      this.titulo = response.data.titulo
      this.prioridade = response.data.prioridade
      this.estimativa = response.data.estimativa
      this.dificuldade = response.data.dificuldade
      this.descricao_tarefa = response.data.descricao_tarefa
      this.tags = response.data.tags
      this.status = response.data.status
      this.inicio = response.data.inicio
      this.fim = response.data.fim
      this.mais_detalhes = response.data.mais_detalhes
      this.notificacoes = response.data.notificacoes

      $('#exampleModal').modal('show')
    }
  }
}
</script>
<style type="text/css">
  .card-task{
    cursor: pointer;
    opacity: 0.8;
  }
  .card-task-list{
    border-right: 1px solid #ddd !important;
    border-top: 1px solid #ddd !important;
    border-bottom: 1px solid #ddd !important;
    border-left-width: 3px !important;
  }
  .card-task:hover{
    opacity: 1;
    transition: all ease-in 0.2s
  }
</style>