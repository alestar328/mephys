<template>
  <div class="container-fluid" id="sand">
    <div class="row">
      <div class="col terra">
        <router-link to="/man">
          <img class="w-75 product-image" :src="image1" @mouseover="changeImg1" @mouseout="resetImg1" alt="seccion ropa masculina">
        </router-link>
      </div>
      <div class="col" id="sand2">
        <router-link to="/woman">
          <img class="w-75 product-image" :src="image2" @mouseover="changeImg2" @mouseout="resetImg2" alt="seccion ropa femenina">
        </router-link>
      </div>
    </div>


    <div class="row">
      <div class="container mt-3" >
        <h5>Colección verano</h5>
        <h3>Sand and summer</h3>
      </div>

      <div class="row">
        <div class="col">
          <router-link to="/man" class="text-decoration-none">
            <img class="w-75" alt="foto modelo 1" :src="require('@/assets/main/didacBlack.jpg')">
            <h5 class="link-text mt-3">Tank tops</h5>
          </router-link>
        </div>

        <div class="col">
          <router-link to="/woman" class="text-decoration-none">
            <img class="w-75" alt="foto modelo 2" :src="require('@/assets/main/carlaGrey.jpg')">
            <h5 class="link-text mt-3">Women Tops</h5>
          </router-link>
        </div>

        <div class="col">
          <router-link to="/man" class="text-decoration-none">
            <img class="w-75" alt="foto modelo 3" :src="require('@/assets/main/alexBlackFront.jpg')">
            <h5 class="link-text mt-3">Camisetas</h5>
          </router-link>
        </div>

        <div class="col">
          <router-link to="/woman" class="text-decoration-none">
            <img class="w-75" alt="foto modelo 4" :src="require('@/assets/main/sandraPlaya.jpg')">
            <h5 class="link-text mt-3">Bikinis</h5>
          </router-link>
        </div>
      </div>
      <div class="my-4">
          <button type="button" class="btn btn-dark col-1">Ver más</button>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "indexMain",
  data(){
    return{
      image1:
      require ('@/assets/main/didac.png'),
      image2:
      require ('@/assets/main/carla.png'),
    }
  },
  methods:{
    changeImg1(){
      this.image1=
          require('@/assets/main/didacGrey.jpg')
    },
    resetImg1(){
      this.image1=
          require('@/assets/main/didac.png')
    },
    changeImg2(){
      this.image2=
          require('@/assets/main/carla2.jpg')
    },
    resetImg2(){
      this.image2=
          require('@/assets/main/carla.png')
    }
  }
}

</script>

<style scoped>
#sand,#sand2{
  background-color: #ece2c6;
}
.terra{
  background-color: #553a2b;
}
.product-image {
  width: 300px;
  height: 700px;
  object-fit: cover;
}
.link-text {
  color: black;
}
</style>
