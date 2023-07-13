<template>
  <div class="cart-container" style="height: 25vh;">
    <h1>Carro</h1>
    <div class="cart-item">
      <img class="img-fluid imgcar" :src="imagenSeleccionada" alt="Product Image" />
      <div class="cart-item-details">
        <p>{{ nombrePrenda }}</p>
        <p>{{ tallaElegida }}</p>
        <p>{{ precio }}</p>
        <div class="cart-item-quantity">
          <button>-</button>
          <input type="number" v-model="cantidad"  min="1" />
          <button>+</button>
        </div>
        <button class="cart-item-delete">Eliminar</button>
      </div>
    </div>
    <div class="cart-total">
      <p>{{ calcularTotal() }}</p>
      <button class="cart-confirm-button">Confirmar</button>
    </div>
  </div>

</template>

<script>
import { ref } from "vue";
export default {
  name: "shoppingCart",
  props: ['nombrePrenda','precio','tallaElegida','imagenSeleccionada'],
  data() {
    return {
      cantidad: 1,
    };
  },
  methods: {
    calcularTotal() {
      const precioNumerico = parseFloat(this.precio.substring(1)); // Eliminar el símbolo de euro y convertir a número
      return (precioNumerico * this.cantidad).toFixed(2); // Calcular el total multiplicando el precio por la cantidad y redondear a 2 decimales
    },
  },
  setup(){
    const isOpen = ref(false);
    return {isOpen};
  },
};
</script>

<style scoped>
.imgcar{
  height: 150px;
  width: 100px;
}
</style>
