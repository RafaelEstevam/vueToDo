
<template>
  <div class="posts row no-gutters">
    <div class="col-sm-9 height-100hv">
      <div class="container mt-5 pt-4">
        <div class="row">
          <div class="col-sm-6">
            <h1 class="text-left">Categorias</h1>
          </div>
          <div class="col-sm-6">
            <div class="float-right mobile-orientation">
              <router-link v-bind:to="{ name: 'NewCategory' }" class="">
                <button class="btn btn-orange"><i class="material-icons align-middle">check</i> Nova categoria</button>
              </router-link>
              <!-- <button class="btn btn-default"><i class="material-icons align-middle">more_vert</i> </button> -->
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-4">
        <div class="row mb-4" v-for="item in tasks">
          <div class="col-sm-12">
            <div class="container">
              <div class="row shadow border-left card-task-list" v-bind:class="{ 'border-info': item.status == '1', 'border-orange': item.status == '2', 'border-danger' : item.status == '3'}">
                <div class="col-sm-4 media p-3">
                  <h4 class="media-body pb-3 mb-0 text-center align-middle"><strong class="d-block text-gray-dark">{{item.titulo}}</strong></h4>
                </div>
                <div class="col-sm-5 bg-light text-left p-3">
                  <p class="media-body pb-3 mb-0 small">{{item.descricao_tarefa}}</p>
                </div>
                <div class="col-sm-3 p-3">
                  <div class="float-right">
                    <router-link v-bind:to="{ name: 'EditTasks', params: { id: item._id }}" class="btn btn-sm btn-info"><i class="material-icons align-middle">edit</i></router-link>
                    <!-- <button class="btn btn-sm btn-secondary" @click="showModal(item._id)"><i class="material-icons align-middle">visibility</i></button> -->
                    <button class="btn btn-sm btn-danger" @click="deleteTask(item._id)"><i class="material-icons align-middle">close</i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 bg-dark height-100hv">
      <div class="container mt-sm-5 pt-4">
        <div class="row">
          <div class="tab-content container" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="container">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div class="row">
                    <div class="col-sm-12">
                      <h4 class="text-left text-info text-center">Importar e exportar</h4>
                    </div>
                  </div>
                  <div class="row mt-1">
                    <div class="col-sm-12">
                    </div>
                  </div>
                </div>
              </div>
            </div>
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