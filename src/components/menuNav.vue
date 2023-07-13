<template>
  <div class="container-fluid">
    <div class="row bg-dark text-light pt-1">
      <p class="pt-2">Envios a toda España y Europa</p>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark terra sticky-top">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="col">
          <ul class="navbar-nav ">

            <li class="nav-item dropdown" @click="isDropdownOpen = !isDropdownOpen">
              <a class="nav-link dropdown-toggle" href="#" role="button" aria-haspopup="true" :aria-expanded="isDropdownOpen">
                Ropa
              </a>
              <div class="dropdown-menu" :class="{ 'show': isDropdownOpen }" aria-labelledby="navbarDropdown">
                <button @click="redirectTowomen" class="dropdown-item" href="#">Ropa Mujer</button>
                <button @click="redirectToMen" class="dropdown-item" href="#">Ropa Hombre</button>
                <div class="dropdown-divider"></div>
                <button @click="redirectTocloth" class="dropdown-item" href="#">Outlet</button>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link">Accesorios</a>
            </li>
            <li class="nav-item">
              <a  class="nav-link">Entrenadores</a>
            </li>
            <li class="nav-item">
              <a  class="nav-link">Rutinas y dietas</a>
            </li>
          </ul>
        </div>

        <div class=" col ">
          <router-link to="/">
            <img class="img-fluid" id="mephysWord" alt="logo central" :src="require('@/assets/main/mephysWordWhite.png')" href="#">
          </router-link>
        </div>

        <div class="d-flex justify-content-end text-white col">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a  class="btn btn-outline-terra btn-floating m-1" href="#"><i class="bi bi-cart"></i></a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-terra btn-floating m-1" href="#"><i class="bi bi-person-circle"></i></a>
            </li>
          </ul>

        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "menuNav",
  methods:{
    redirectToMen(){
      this.$router.replace('/man');
    },
    redirectTowomen(){
      this.$router.replace('/woman');
    },
    redirectTocloth(){
      this.$router.replace('/cloth');
    }/*,
    redirectToCarrito(){
      this.$router.replace('/carrito');
    }*/
  },
  setup() {
    const isDropdownOpen = ref(false);
    return {
      isDropdownOpen
    };
  },
}
</script>

<style scoped>
.terra{
  background-color: #553a2b;;
}

.sand,.btn-outline-terra{
  background-color: #ece2c6;

}
#mephysWord{
  width: 160px;
  height: 30px;
}
</style>
