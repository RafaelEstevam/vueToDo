
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
              <router-link to="/tasks/new">
                <button class="btn btn-primary"><i class="material-icons align-middle">check</i> Nova tarefa</button>
              </router-link>
              <button class="btn btn-default"><i class="material-icons align-middle">more_vert</i> </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-4">
        <div class="row mb-4">
          <div class="col-sm-12">
            <div class="container">
              <div class="row shadow p-3">
                <div class="col-sm-3 media">
                  <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1671ebb57e6%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1671ebb57e6%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.546875%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                  <p class="media-body pb-3 mb-0 small lh-125 text-left"><strong class="d-block text-gray-dark">@username</strong></p>
                </div>
                <div class="col-sm-6">
                  <p class="media-body pb-3 mb-0 small">Donec id elit non mi porta gravida at eget metus. Fusce dapibus...</p>
                </div>
                <div class="col-sm-3">
                  <i class="material-icons align-middle">more_horiz</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-sm-12">
            <div class="container">
              <div class="row shadow p-3">
                <div class="col-sm-3 media">
                  <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1671ebb57e6%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1671ebb57e6%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.546875%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                  <p class="media-body pb-3 mb-0 small lh-125 text-left"><strong class="d-block text-gray-dark">@username</strong></p>
                </div>
                <div class="col-sm-6">
                  <p class="media-body pb-3 mb-0 small">Donec id elit non mi porta gravida at eget metus. Fusce dapibus...</p>
                </div>
                <div class="col-sm-3">
                  <i class="material-icons align-middle">more_horiz</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 bg-light border-left height-100hv">
      <div class="container mt-5 pt-4">
        <div class="row">
          <ul class="nav nav-pills nav-fill col-sm-12" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active small" id="home-tab" data-toggle="tab" href="#home"><i class="material-icons">done_outline</i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link small" id="profile-tab" data-toggle="tab" href="#profile"><i class="material-icons">whatshot</i></a>
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
                  <h4 class="text-left">Em execução</h4>
                </div>
              </div>
              <div class="container mt-4">
                <div class="row shadow p-3 pt-2 border mb-4">
                  <div class="col-sm-5 media">
                    <img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1671ebb57e6%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1671ebb57e6%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.546875%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                    <p class="media-body pb-3 mb-0 small lh-125 text-left"><strong class="d-block text-gray-dark">@username</strong></p>
                  </div>
                  <div class="col-sm-7">
                    <p class="media-body pb-3 mb-0 small">Donec id elit</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <p>Aguardando</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <p>Atrasadas</p>
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
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
}
</script>
<style type="text/css">
  .height-100hv{
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
  }
</style>