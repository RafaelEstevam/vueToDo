
<template>
  <div class="posts row no-gutters">
    <div class="col-sm-9 no-scroll">
      <div class="container mt-5 pt-4">
        <div class="row">
          <div class="col-sm-6">
            <h1 class="text-left">Nova tarefa</h1>
          </div>
          <div class="col-sm-6">
            <div class="float-right">
              <select class="form-control" v-model="prioridade">
                <option></option>
                <option value="1">Baixa</option>
                <option value="2">Média</option>
                <option value="3">Alta</option>
              </select>
            </div>
            <label class="small align-middle float-right mr-2">Prioridade: </label>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-4">
        <div class="row mb-4">
          <div class="col-sm-12">
            <input class="form-control" placeholder="Título" v-model="titulo"/>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-sm-6">
            <input class="form-control" placeholder="Estimativa de tempo em hrs." v-model="estimativa"/>
          </div>
          <div class="col-sm-6">
            <select class="form-control" placeholder="Dificuldade" v-model="dificuldade">
              <option>Dificuldade</option>
              <option value="1">Fácil</option>
              <option value="2">Médio</option>
              <option value="3">Difícil</option>
            </select>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-sm-12">
            <textarea placeholder="Descrição da tarefa" class="form-control textarea-height" v-model="descricao_tarefa"></textarea>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-sm-12">
            <input class="form-control" placeholder="Título" v-model="tags"/>
          </div>
        </div>
        <div class="row fixed-botton bg-light border-top pt-3 pb-3">
          <div class="col-sm-12">
            <button class="btn btn-rounded btn-secondary float-left"><i class="material-icons align-middle">attach_file</i></button>
            <button class="btn btn-rounded btn-danger float-right"><i class="material-icons align-middle"></i> Apagar</button>
            <router-link to="/tasks">
              <button class="btn btn-rounded btn-info float-right mr-3"><i class="material-icons align-middle"></i> Voltar</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 bg-dark border-left no-scroll">
      <div class="container mt-5 pt-4">
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
          <div class="tab-content container" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row mt-4">
                <div class="col-sm-12">
                  <h4 class="text-left">Configurações</h4>
                </div>
              </div>
              <div class="row mt-4 mb-4">
                <div class="col-sm-12">
                  <select class="form-control" placeholder="Título" v-model="status">
                    <option>Status da tarefa</option>
                    <option value="1">Finalizada</option>
                    <option value="2">Em execução</option>
                    <option value="1">Atrasada</option>
                  </select>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-sm-6">
                  <input class="form-control" placeholder="Título" type="date" v-model="inicio"/>
                </div>
                <div class="col-sm-6">
                  <input class="form-control" placeholder="Título" type="date" v-model="fim"/>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-sm-12">
                  <textarea placeholder="Mais detalhes da tarefa" class="form-control textarea-height" v-model="mais_detalhes"></textarea>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-sm-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" v-model="notificacoes">
                    <label class="form-check-label small text-light" for="defaultCheck1">
                      Deseja receber notificações da tarefa por email?
                    </label>
                  </div>
                </div>
              </div>
              <div class="row fixed-botton bg-dark border-top pt-3 pb-3">
                <div class="col-sm-12">
                  <button class="btn btn-orange float-left col-sm-12 shadow" @click="addTasks"><i class="material-icons align-middle">done</i> Salvar tarefa</button>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="row mt-4">
                <div class="col-sm-12">
                  <h4 class="text-left">Comentários (Em breve)</h4>
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
  name: 'posts',
  data () {
    return {
      prioridade: '3',
      titulo:'123',
      estimativa:'1s',
      dificuldade:'123',
      descricao_tarefa:'12',
      tags:'123',
      status:'1',
      inicio:'2017-06-19',
      fim:'2017-06-19',
      mais_detalhes:'asdfsdf',
      notificacoes: true,
      posts: []
    }
  },
  methods:{
    async addTasks(){
      await CRUDServices.addPost('tasks', {
        prioridade: this.prioridade,
        titulo: this.titulo,
        estimativa: this.estimativa,
        dificuldade: this.tdificuldadeitle,
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
  .height-100hv{
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
  }

  .no-scroll{
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
  }

  .fixed-botton{
    position: absolute;
    bottom: 0px;
    width: 100%
  }

  .btn-orange{
    background-color :#ff6e40;
    color: #ffffff
  }

  .textarea-height{
    height: 150px;
  }
</style>