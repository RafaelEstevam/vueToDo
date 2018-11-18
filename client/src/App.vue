<template>
  <div id="app" class="mt-0">
    <div class="row bg-dark shadow fixed-top no-gutters">
      <div class="col-md-3">
        <button class="btn btn-default bg-transparent text-white middle-align mt-1 float-left btn-lg"><i class="material-icons">menu</i></button>
        <h3 class="text-white mt-2">Vue<strong class="color-orange">ToDo</strong></h3>
      </div>
      <div class="col-md-6">
        <input class="form-control form-control-dark search rounded-0" type="text" placeholder="Search" aria-label="Search">
        <i class="material-icons icon-search">search</i>
      </div>
      <div class="col-md-3">
        <p class="float-left">{{name}}</p>
        <ul class="navbar-nav px-3 float-right">
          <li class="nav-item text-nowrap dropdown">
            <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
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
      name: "Rafael Estevam"
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  max-height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
}
.fixed-botton{
  position: absolute;
  bottom: 0px;
  width: 100%
}
.no-scroll{
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.textarea-height{
  height: 150px;
}
</style>
