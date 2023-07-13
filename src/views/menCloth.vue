<template>
  <div class="container-fluid" id="sand">
    <h1 class="mt-2 mb-4" >HOMBRE</h1>
    <!-- REPETIR PARA AUMENTAR OTRA LINEA -->
    <div class="row justify-content-between mx-5" >
      <div class="col-2" id="first" @click="mostrarDetalles('first')">
        <img alt="" src="../assets/main/alexBlackFront.jpg" class="img-fluid  my-2">
        <h5>Bulking T-shirt</h5>
        <h6>€ 25</h6>
      </div>
      <div class="col-2" id="second" @click="mostrarDetalles('second')">
        <img alt="" src="../assets/main/joanFront.jpg" class="img-fluid  my-2">
        <h5>Red worn</h5>
        <h6>€ 15</h6>
      </div>
      <div class="col-2" id="third" @click="mostrarDetalles('third')">
        <img alt="" src="../assets/main/didacBlack.jpg" class="img-fluid  my-2">
        <h5>Blac Tank</h5>
        <h6>€ 10</h6>
      </div>
      <div class="col-2" id="fourth" @click="mostrarDetalles('fourth')">>
        <img alt="" src="../assets/main/arnauWhite.jpg" class="img-fluid  my-2">
        <h5>White Hoodie</h5>
        <h6>€ 25</h6>
      </div>
    </div>
    <cloth-scene v-if="prendaSeleccionada" :prenda-seleccionada="prendaSeleccionada" @volver="ocultarDetalles"/>
  </div>
</template>

<script>
import clothScene from "@/views/clothScene.vue";
export default {
  name: "menCloth",
  components:{
    clothScene
  },
  data() {
    return {
      prendaSeleccionada: null
    };
  },
  methods: {
    mostrarDetalles(prendaId){
      this.prendaSeleccionada = prendaId;
    },
    ocultarDetalles(){
      this.prendaSeleccionada = null;
    }
  }
};
</script>

<style scoped>
#sand{
  background-color: #ece2c6;
}
</style>
