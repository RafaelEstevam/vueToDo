<template>
  <div id="app" class="mt-0">
    <div class="menu-navbar disable" id="main-navbar">
      <div class="col-md-3 bg-dark with-scroll">
        <div class="row bg-orange p-5">
          <h1 class="text-white mx-auto">Vue<strong class="text-dark">ToDo</strong></h1>
        </div>
        <div class="row bg-dark text-left">
          <div class="accordion" id="accordionExample">
            <div class="menu">

              <div class="menu-item" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-menu text-left rounded-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <i class="material-icons align-middle">check</i> Tarefas
                  </button>
                </h5>
              </div>

              <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <ul class="sub-menu">
                  <li><router-link v-bind:to="{ name: 'Tasks' }" class=""><strong>Todas as tarefas</strong></router-link></li>
                  <li><router-link v-bind:to="{ name: 'NewTasks' }" class=""><strong>Nova tarefa</strong></router-link></li>
                  <li><router-link v-bind:to="{ name: 'Categories' }" class=""><strong>Categorias</strong></router-link></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      <div class="col-md-9 text-left p-2" id="overlay-menu" @click="openMenu"><i class="material-icons text-white">close</i></div>
    </div>
    <div class="row bg-dark shadow fixed-top no-gutters">
      <div class="col-md-3">
        <button class="btn btn-default bg-transparent text-white middle-align mt-1 float-left btn-lg" id="menuButton" @click="openMenu"><i class="material-icons">menu</i></button>
        
        <ul class="navbar-nav px-3 float-right mt-2 mobile">
          <li class="nav-item text-nowrap dropdown">
            <a class="" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons font-large">account_circle</i></a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Conta</a>
              <a class="dropdown-item" href="#">Sair</a>
            </div>
          </li>
        </ul>

        <button class="btn btn-default bg-transparent text-white middle-align mt-1 float-right btn-lg mobile" id="searchButton" @click="openSearch"><i class="material-icons">search</i></button>
        
        <h3 class="text-white mt-2">Vue<strong class="color-orange">ToDo</strong></h3>
      </div>
      <div class="col-md-6 desktop search-mobile">
        <input class="form-control form-control-dark search rounded-0" type="text" placeholder="Search" aria-label="Search">
        <i class="material-icons icon-search">search</i>
      </div>
      <div class="col-md-3 pt-2 desktop">
        <div class="mx-auto">
          <ul class="navbar-nav px-3 float-left">
            <li class="nav-item text-nowrap dropdown">
              <a class="" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons font-large">account_circle</i></a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">Conta</a>
                <a class="dropdown-item" href="#">Sair</a>
              </div>
            </li>
          </ul>
          <h6 class="float-left text-white align-middle mt-2">{{name}}</h6>
        </div>
      </div>
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      name: "Username"
    }
  },
  methods: {
    
    openSearch(){
      $('.search-mobile').toggleClass('desktop')
    },

    openMenu(){
      $('#main-navbar').toggleClass('disable')
    }
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

.desktop{
  display: block;
}
.mobile{
  display: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* width */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #24282d; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #ff6e40;
    width: 10px 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #e25224; 
}

.menu-navbar{
  position: fixed;
  z-index: 10000;
  width: 100%;
  display: flex;
  height: 100%;
}

.disable{
 display: none;
}

#overlay-menu{
  background: rgba(0,0,0,0.4);
  cursor: pointer;
}

.accordion{
  width: 100%
}

.menu{
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
}

.menu-item{
  width: 100%;
  display: inline-block
}

.menu li{
  display: inline-block;
  width: 100%;
}

.menu li p{
  margin-bottom: 0px;
  color: #ff6e40;
  font-weight: bold;
  padding-left: 5px;
}

.menu li a, .menu li p{
  padding: 14px 20px;
  width: 100%;
  display: inherit;
  text-decoration: none;
}

.menu li a:hover{
  background: #24282d; 
}

.sub-menu{
  margin-bottom: 0px;
  padding-left: 0px;
}

.sub-menu li a{
  padding-left: 46px
}

.btn-menu{
  width: 100%;
  padding: 14px 18px;
  color: #ff6e40;
  font-weight: bold;
  background: #272b2f;
}

.btn-menu i{
  color: #fff;
}

#app h1, #app h2, #app h3, #app h4, #app h5, #app h6{
  font-family: 'Quicksand';
}

.search, .search:focus{
  height: 55px;
  background:#24282d;
  border: 0px;
  font-family: 'Quicksand';
  color: #aaa;
}

.icon-search{
  position: absolute;
  z-index: 1000;
  top: 24%;
  right: 20px;
  color: #6c757d;
  font-size: 30px;
}
.show .dropdown-menu{
  position: absolute !important
}

.bg-orange {
  background-color: #ff6e40;
}

.border-orange {
  border-color: #ff6e40 !important;
}

.btn-orange {
    background-color: #ff6e40;
    color: #ffffff;
}
.color-orange, a {
    color: #ff6e40;
}

a:hover {
    color: #e25224;
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: #ff6e40;
}
.height-100hv{
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
}
.fixed-botton{
  position: fixed;
  bottom: 0px;
  width: 100%;
  left: 0px;
  display: flex;
}
.no-scroll{
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
}

.with-scroll{
  overflow-y: scroll
}

.textarea-height{
  height: 150px;
}

.font-large{
  font-size: 35px
}


@media(max-width: 767px){
  .desktop{
    display: none;
  }
  .mobile{
    display: block;
  }
  .height-100hv{
    height: auto;
    min-height: 100vh;
    max-height: inherit;
    overflow: inherit;
    overflow-y: inherit;
  }
  .no-scroll{
    height: auto;
    min-height: 100vh;
    max-height: inherit;
    overflow: inherit;
    margin-bottom: 60px
  }

  .with-scroll{
    overflow-y: inherit;
  }

  .fixed-botton{
    position: fixed;
    bottom: 0px;
    width: 100%;
    left: 0px;
    display: flex;
  }

  .mobile-orientation{
    float: left !important;
  }

}
</style>
