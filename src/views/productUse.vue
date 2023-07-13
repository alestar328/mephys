<template>
  <Product v-for="(product, index) in products" :key="'product-' + index" :product=product />
</template>

<script>
export default {
  name: "ProducT",
  data() {
    return {
      products: [
        {
          name: 'Bulking Black',
          price: '€26',
          sizes: ['S', 'M', 'L', 'XL', 'XXL'],
          images: [
            '../assets/main/alexBlackFront.jpg',
            '../assets/main/alexBlackFront.jpg',
            '../assets/main/alexBlackFront.jpg',
            '../assets/main/alexBlackFront.jpg',
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
<div>
<img alt="" src="../assets/main/alexBlackFront.jpg" class="img-fluid" style="height: 100px;width: 75px">
</div>
<div>
<img alt="" src="../assets/main/alexBlackFront.jpg" class="img-fluid mx-2" style="height: 100px;width: 75px">
</div>
<div>
<img alt="" src="../assets/main/alexBlackFront.jpg" class="img-fluid" style="height: 100px;width: 75px">
</div>
<div>
<img alt="" src="../assets/main/alexBlackFront.jpg" class="img-fluid mx-2" style="height: 100px;width: 75px">
</div>
