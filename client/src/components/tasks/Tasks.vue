
<template>
  <div class="posts row no-gutters">
    <div class="col-sm-9 height-100hv">
      <div class="container mt-5 pt-4">
        <div class="row">
          <div class="col-sm-6">
            <h1 class="text-left">Lista de tarefas</h1>
          </div>
          <div class="col-sm-6">
            <div class="float-right">
              <router-link v-bind:to="{ name: 'NewTasks' }" class="">
                <button class="btn btn-orange"><i class="material-icons align-middle">check</i> Nova tarefa</button>
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
      <div class="container mt-5 pt-4">
        <div class="row">
          <ul class="nav nav-pills nav-fill col-sm-12" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active small" id="home-tab" data-toggle="tab" href="#home"><i class="material-icons">whatshot</i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link small" id="profile-tab" data-toggle="tab" href="#profile"><i class="material-icons">done_outline</i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link small" id="contact-tab" data-toggle="tab" href="#contact"><i class="material-icons">notifications_none</i></a>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="tab-content container" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row mt-4">
                <div class="col-sm-12">
                  <h4 class="text-center text-info">Tarefas em execução</h4>
                </div>
              </div>
              <div class="container mt-4">
                <div class="row shadow pt-3 bg-secondary mb-4 card-task text-white border-left border-orange" v-for="item in execucao" @click="showModal(item._id)">
                  <div class="col-sm-12 media">
                    <h6 class="media-body pb-3 mb-0 text-center"><strong>{{item.titulo}}</strong></h6>
                  </div>
                  <div class="col-sm-12">
                    <p class="media-body mb-0 small text-white">{{item.descricao_tarefa}}</p>
                    <hr>
                  </div>
                  <div class="col-sm-12">
                    <p class="media-body mb-0 small text-white"><i class="material-icons align-middle">today</i> Início: <strong>{{item.inicio}}</strong> | Fim: <strong>{{item.fim}}</strong></p>
                    <hr>
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
              <div class="container mt-4">
                <div class="row shadow pt-3 bg-secondary mb-4 card-task text-white border-left border-info" v-for="item in finalizadas" @click="showModal(item._id)">
                  <div class="col-sm-12 media">
                    <h6 class="media-body pb-3 mb-0 text-center"><strong>{{item.titulo}}</strong></h6>
                  </div>
                  <div class="col-sm-12">
                    <p class="media-body mb-0 small text-white">{{item.descricao_tarefa}}</p>
                    <hr>
                  </div>
                  <div class="col-sm-12">
                    <p class="media-body mb-0 small text-white"><i class="material-icons align-middle">today</i> Início: <strong>{{item.inicio}}</strong> | Fim: <strong>{{item.fim}}</strong></p>
                    <hr>
                  </div>
                </div>
                <!-- <div class="row shadow p-3 pt-2 mb-4 bg-info card-task" v-for="item in finalizadas" @click="showModal(item._id)">
                  <div class="col-sm-5 media">
                    <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1671ebb57e6%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1671ebb57e6%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.546875%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                    <p class="media-body pb-3 mb-0 small lh-125 text-left"><strong class="d-block text-gray-dark">{{item.titulo}}</strong></p>
                  </div>
                  <div class="col-sm-7">
                    <p class="media-body pb-3 mb-0 small">{{item.descricao_tarefa}}</p>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div class="row mt-4">
                <div class="col-sm-12">
                  <h4 class="text-center text-info">Tarefas atrasadas</h4>
                </div>
              </div>
              <div class="container mt-4">
                <!-- <div class="row shadow p-3 pt-2 bg-danger mb-4 card-task" v-for="item in atrasadas" @click="showModal(item._id)">
                  <div class="col-sm-5 media">
                    <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1671ebb57e6%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1671ebb57e6%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.546875%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                    <p class="media-body pb-3 mb-0 small lh-125 text-left"><strong class="d-block text-gray-dark">{{item.titulo}}</strong></p>
                  </div>
                  <div class="col-sm-7">
                    <p class="media-body pb-3 mb-0 small">{{item.descricao_tarefa}}</p>
                  </div>
                </div> -->
                <div class="row shadow pt-3 bg-secondary mb-4 card-task text-white border-left border-danger" v-for="item in atrasadas" @click="showModal(item._id)">
                  <div class="col-sm-12 media">
                    <h6 class="media-body pb-3 mb-0 text-center"><strong>{{item.titulo}}</strong></h6>
                  </div>
                  <div class="col-sm-12">
                    <p class="media-body mb-0 small text-white">{{item.descricao_tarefa}}</p>
                    <hr>
                  </div>
                  <div class="col-sm-12">
                    <p class="media-body mb-0 small text-white"><i class="material-icons align-middle">today</i> Início: <strong>{{item.inicio}}</strong> | Fim: <strong>{{item.fim}}</strong></p>
                    <hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
              <!-- <button type="button" class="btn float-right bg-transparent" data-dismiss="modal"><i class="material-icons">close</i></button> -->

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button type="button" class="btn float-right bg-transparent" data-dismiss="modal"><i class="material-icons">close</i></button>
          <div class="container pl-4 pr-4">
            <h3 class="mb-4 mt-3">{{titulo}}</h3>
            <div class="row p-3 alert alert-info rounded-0">
              <div class="col-sm-12 text-left">
                <p class="m-0"><span class="small"><strong>Prioridade</strong></span></p>
                <span class="text-secondary">{{prioridade}}</span>
                <p class="m-0"><span class="small"><strong>Descrição</strong></span></p>
                <span class="text-secondary">{{descricao_tarefa}}</span>
                <hr>
              </div>
              <div class="col-sm-6 text-left small mt-2">
                <p class="m-0"><strong>Estimativa</strong></p>
                {{estimativa}}
              </div>
              <div class="col-sm-6 text-left small mt-2">
                <p class="m-0"><strong>Dificuldade</strong></p>
                {{dificuldade}}
              </div>
              <div class="col-sm-6 text-left small mt-2">
                <p class="m-0"><strong>Início</strong></p>
                {{inicio}}
              </div>
              <div class="col-sm-6 text-left small mt-2">
                <p class="m-0"><strong>Fim</strong></p>
                {{fim}}
              </div>
              <div class="col-sm-12 text-left">
                <hr>
                <p class="m-0"><span class="small"><strong>Status</strong></span></p>
                <span class="text-secondary">{{status}}</span>
              </div>
            </div>
            <div class="row p-3 alert alert-info rounded-0">
              <div class="col-sm-12 text-left small">
                <p class="m-0 text-secondary"><strong>Tags</strong></p>
                {{tags}}
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

      console.log(response.data)

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