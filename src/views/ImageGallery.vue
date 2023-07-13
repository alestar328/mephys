<template>
  <div class="container-fluid" id="sand">
    <div class="row">
      <ImageGallery :images="smallImages" @imageClick="updateMainImage"/>
      <div class="col-7 mt-5">
        <img :src="mainImage" alt="" class="img-fluid w-50">
      </div>
    </div>
  </div>
</template>

<script>
import ImageGallery from './ImageGallery.vue';
export default {
  components: {
    ImageGallery
  },
  data() {
    return {
      mainImage: "@/assets/main/alexBlackFront.jpg",
      smallImages: [
        "@/assets/main/alexBlackFront.jpg",
        "@/assets/main/alexBlackFront.jpg",
        "@/assets/main/alexBlackFront.jpg",
        "@/assets/main/alexBlackFront.jpg"
      ]
    };
  },
  methods:{
    updateMainImage(image){
      this.mainImage=image;
    }
  }
};
</script>

<style scoped>

</style>
