
<template>
  <div class="posts row no-gutters">
    <div class="col-sm-9 no-scroll">
      <div class="container mt-5 pt-4">
        <div class="row">
          <div class="col-sm-6">
            <h1 class="text-left">Nova tarefa</h1>
          </div>
          <div class="col-sm-6">
            <div class="float-right mobile-orientation">
              <div class="float-right">
                <select class="form-control" v-model="prioridade">
                  <option></option>
                  <option value="1">Baixa</option>
                  <option value="2">Média</option>
                  <option value="3">Alta</option>
                </select> 
              </div>
              <p class="small align-middle float-right mr-2 mt-2 text-info"><strong>Prioridade: </strong></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-sm-5 text-left">
        <div class="row">
          <div class="col-sm-12">
            <span class="small text-info"><strong>Título: </strong></span>
            <input class="form-control" v-model="titulo"/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <span class="small text-info"><strong>Status da tarefa: </strong></span>
            <select class="form-control" placeholder="Título" v-model="status">
              <option></option>
              <option value="1">Finalizada</option>
              <option value="2">Em execução</option>
              <option value="3">Atrasada</option>
            </select>
            <!-- <input class="form-control" placeholder="Estimativa de tempo em hrs." v-model="estimativa"/> -->
          </div>
          <div class="col-sm-6">
            <span class="small text-info"><strong>Grau de dificuldade: </strong></span>
            <select class="form-control" placeholder="Dificuldade" v-model="dificuldade">
              <option></option>
              <option value="1">Fácil</option>
              <option value="2">Médio</option>
              <option value="3">Difícil</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <span class="small text-info"><strong>Descrição da tarefa: </strong></span>
            <textarea class="form-control textarea-height" v-model="descricao_tarefa"></textarea>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-sm-12">
            <span class="small text-info"><strong>Tags: </strong></span>
            <input class="form-control" v-model="tags"/>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 bg-dark no-scroll pb-3">
      <div class="container mt-sm-5 pt-4">
        <div class="row">
          <ul class="nav nav-pills nav-fill col-sm-12" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active small" id="home-tab" data-toggle="tab" href="#home"><i class="material-icons">today</i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link small" id="profile-tab" data-toggle="tab" href="#profile"><i class="material-icons">chat_bubble_outline</i></a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link small" id="contact-tab" data-toggle="tab" href="#contact"><i class="material-icons">chat_bubble_outline</i></a>
            </li> -->
          </ul>
        </div>
        <div class="row">
          <div class="tab-content container text-left" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row mt-3">
                <div class="col-sm-12">
                  <h4 class="text-left text-info text-center">Prazos e entrega</h4>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-sm-12">
                  <span class="small text-white">Estimativa (em horas)</span>
                  <div class="input-group">
                    <div class="input-group-prepend bg-info">
                      <div class="input-group-text"><i class="material-icons">access_time</i></div>
                    </div>
                    <input type="text" class="form-control" v-model="estimativa">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <span class="small text-white">Início</span>
                  <div class="input-group">
                    <div class="input-group-prepend bg-info">
                      <div class="input-group-text"><i class="material-icons">check_box_outline_blank</i></div>
                    </div>
                    <input class="form-control" placeholder="Título" type="date" v-model="inicio"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <span class="small text-white">Fim</span>
                  <div class="input-group">
                    <div class="input-group-prepend bg-info">
                      <div class="input-group-text"><i class="material-icons">check_box</i></div>
                    </div>
                    <input class="form-control" placeholder="Título" type="date" v-model="fim"/>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-sm-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" v-model="notificacoes">
                    <label class="form-check-label small text-light" for="defaultCheck1">
                      Deseja receber notificações da tarefa por email?
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="row mt-4">
                <div class="col-sm-12">
                  <h4 class="text-center text-info">Comentários (Em breve)</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-botton">
      <div class="col-sm-9 bg-light p-3">
        <!-- <button class="btn btn-rounded btn-secondary float-left"><i class="material-icons align-middle">attach_file</i></button> -->
        <button class="btn btn-rounded btn-danger float-right"><i class="material-icons align-middle mobile">close</i> <span class="desktop">Apagar</span></button>
        <router-link to="/">
          <button class="btn btn-rounded btn-info float-right mr-3"><i class="material-icons align-middle mobile">chevron_left</i> <span class="desktop">Voltar</span></button>
        </router-link>
      </div>
      <div class="col-sm-3 bg-secondary p-3">
        <button class="btn btn-orange float-left col-sm-12 shadow" @click="addTasks"><i class="material-icons align-middle mobile">done</i> <span class="desktop">Salvar tarefa</span></button>
      </div>
    </div>
  </div>
</template>

<script>
import CRUDServices from '@/services/CRUDServices'

export default {
  name: 'posts',
  data () {
    return {
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
      notificacoes: false,
      posts: []
    }
  },
  methods:{
    async addTasks(){
      await CRUDServices.addPost('tasks', {
        prioridade: this.prioridade,
        titulo: this.titulo,
        estimativa: this.estimativa,
        dificuldade: this.dificuldade,
        descricao_tarefa: this.descricao_tarefa,
        tags: this.tags,
        status: this.status,
        inicio: this.inicio,
        fim: this.fim,
        mais_detalhes: this.mais_detalhes,
        notificacoes: this.notificacoes,
      })
      this.$router.push({ name: 'Tasks' })
    }
  }
}
</script>
<style type="text/css">
</style>