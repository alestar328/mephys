<template>
  <div class="container-fluid" id="sand">
    <div class="row">
      <div class="col-7 mt-5">
        <img alt="" :src="imagenSeleccionada" class="img-fluid w-50">

      </div>
      <div class="col-3 mt-5">
        <h2>{{nombrePrenda}}</h2>
        <h5>{{precio}}</h5>
          <p>Size:</p>

          <div class="btn-group btn-group-sm mb-3" role="group">
            <button type="button" class="btn btn-outline-secondary"
                    :class="{ 'active': selectSize === 'S' }"
                    @click="tallaElegida('S')">S</button>
            <button type="button" class="btn btn-outline-secondary"
                    :class="{ 'active': selectSize === 'M' }"
                    @click="tallaElegida('M')">M</button>
            <button type="button" class="btn btn-outline-secondary"
                    :class="{ 'active': selectSize === 'L' }"
                    @click="tallaElegida('L')">L</button>
            <button type="button" class="btn btn-outline-secondary"
                    :class="{ 'active': selectSize === 'XL' }"
                    @click="tallaElegida('XL')">XL</button>
            <button type="button" class="btn btn-outline-secondary"
                    :class="{ 'active': selectSize === 'XXL' }"
                    @click="tallaElegida('XXL')">XXL</button>
          </div>
          <h6>Cantidad:</h6>
          <div class="input-group mb-3">

            <div class="input-group-prepend">
              <button @click="reducirCant" class="btn btn-outline-secondary" type="button">-</button>
            </div>
            <input v-model="cantidad" type="number" class="form-control text-center" placeholder="1" min="1">
            <div class="input-group-append">
              <button @click="aumentarCant" class="btn btn-outline-secondary" type="button">+</button>
            </div>
          </div>
          <div class="mb-3">
            <button  type="button" class="btn btn-light w-100">Añadir al carrito</button>
          </div>
          <div class="mb-3">
            <button type="button" class="btn btn-dark w-100">Comprar ahora</button>
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-5">
        <div class="col-7">

          <img v-for="imagen in imagenesPrenda" :key="imagen" :id="imagen"
               :alt="imagen" :src="imagen" class="img-fluid small" style="height: 100px;width: 75px"
               @click="cambiarImagen(imagen)">
        </div>
      </div>
    </div>

</template>


  <script>
  import shoppingCart from "@/components/shoppingCart.vue";
  export default {
    name: "clothScene",

    props: ['prendaSeleccionada'],
    data(){
      return{
        cantidad: 1, // Esto es el valor inicial del input
        selectSize:null,
        imagenesPrenda: [],
        imagenSeleccionada: null,
        prendasMap : new Map([
          ['first', { imagen: [require('@/assets/main/alexBlackFront.jpg'),require('@/assets/main/alexBlackBack.jpg'),require('@/assets/main/alexWhiteFront.jpg'),require('@/assets/main/alexWhiteFront.jpg')], nombre: 'Bulking T-shirt', precio: '€ 25' }],
          ['second', { imagen: [require('@/assets/main/joanFront.jpg'),require('@/assets/main/carlaPlaya.jpg'),require('@/assets/main/lauraBlue.jpg'),require('@/assets/main/alexWhiteFront.jpg')], nombre: 'Red worn', precio: '€ 15' }],
          ['third', { imagen: [require('@/assets/main/didacBlack.jpg'),require('@/assets/main/didac.png'),require('@/assets/main/didacGrey.jpg'),require('@/assets/main/alexWhiteFront.jpg')], nombre: 'Black Tank', precio: '€ 10' }],
          ['fourth', { imagen: [require('@/assets/main/arnauWhite.jpg'),require('@/assets/main/sandraPlaya.jpg'),require('@/assets/main/alexWhiteFront.jpg'),require('@/assets/main/alexWhiteFront.jpg')], nombre: 'White Hoodie', precio: '€ 25' }]
        ])
      };
    },
    computed: {
      nombrePrenda() {
        const prenda = this.prendaSeleccionada;
        return this.prendasMap.get(prenda).nombre;
      },
      precio() {
        const prenda = this.prendaSeleccionada;
        return this.prendasMap.get(prenda).precio;
      }
    },
    created() {
      this.actualizarImagenesPrenda();
    },
    watch: {
      prendaSeleccionada() {
        this.actualizarImagenesPrenda();
      }
    },
    methods:{
      aumentarCant(){
        this.cantidad++;
      },
      reducirCant(){
        if(this.cantidad>1){
          this.cantidad--;
        }
      },
      tallaElegida(size){
        this.selectSize=size;
      },
      cambiarImagen(imagen) {
        this.imagenSeleccionada = imagen;
      },
      actualizarImagenesPrenda(){
        const prenda = this.prendaSeleccionada;
        const imagenes = this.prendasMap.get(prenda).imagen;
        this.imagenesPrenda = imagenes;
        this.imagenSeleccionada = imagenes[0];
      },
      abrirCarrito(){
        this.$router.replace('/carrito');
      }
    }
  };
  </script>

  <style scoped>
  #sand{
    background-color: #ece2c6;
  }
  .small{
    margin: 15px;
  }
  </style>
