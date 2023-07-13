<template>
  <!-- Footer -->
  <footer class="container-fluid text-center text-lg-start terra text-light ">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <!-- Left -->
      <div class="ms-5 mt-1 d-none d-lg-block">
        <span>Tu destino está en tus manos, y así siempre ha sido</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div class="me-5">
        <a href="" class="me-4 btn btn-outline-terra btn-floating">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="" class="me-4 btn btn-outline-terra btn-floating">
          <i class="bi bi-instagram"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <img class="img-fluid ms-5" id="mephysWord" alt="logo central" :src="require('@/assets/main/mephysMain.png')" href="#">

            </h6>
            <p>
              Nuestro objetivo, se encuentra en tu éxito.
            </p>
          </div>


          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              LEGAL TERMNS
            </h6>
            <p>
              <a href="#!" class="text-reset">Aviso legal</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Cookies</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Privacidad</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold ms-3 mb-4">Contacto</h6>
            <p><i class="fas fa-home me-3 text-secondary"></i> Barcelona, BCN 10012, ES</p>
            <p><i class="fas fa-envelope me-3 text-secondary"></i>
              info@mephys.com
            </p>
            <p><i class="fas fa-phone me-3 text-secondary"></i> + 34 234 567 88</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
      © 2023 Copyright:
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "footerBajo"
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
  margin-left: 10px;
  width: 185px;
  height: 150px;
}
</style>
