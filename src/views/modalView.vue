<template>
  <div class="vue-modal" v-show="open">
    <div class="vue-modal-inner">
      <div class="vue-modal-content">
        <div>
          <button type="button" @click="$emit('close ')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalView",
  props: {
    open: {
      type: Boolean,
      required: true,
    },
},
  setup(_,{emit}){
    const close = () =>{
      emit("close");
    };
    return {close};
  }
}
</script>

<style scoped>
::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-moda{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
}
.vue-modal-inner{
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content{
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
}
</style>
