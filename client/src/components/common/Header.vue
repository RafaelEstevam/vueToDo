<template>
  <div class="row bg-dark shadow fixed-top no-gutters">
    <div class="col-sm-2">
       <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">vueToDo</a>
    </div>
    <div class="col-sm-7">
      <input class="form-control form-control-dark" type="text" placeholder="Search" aria-label="Search">
    </div>
    <div class="col-sm-3">
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
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      name: 'Rafael Estevam'
    }
  },
  
}
</script>
<style>
  .show .dropdown-menu{
    position: absolute !important
  }
</style>
