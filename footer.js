const footer = document.getElementById("footer");


function createFooter(){
    footer.innerHTML=`
    <!--start register-->
<section class="register p-5">
  <div class="container">
    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2">
      <h3 class="fs-5 fs-md-3">Register your free account</h3>
      <div class="d-flex   justify-content-center align-items-center gap-2">
        <input type="email" class="form-control p-" placeholder="Your Email Address" />
        <button class="btn py-2 py-sm-3 px-4 px-sm-5">Register</button>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
    <a href="" class="mt-5 text-white fs-5 fs-md-4 text-center text-decoration-underline">Get Support for your questions</a>
       
    </div>
  </div>

</section>
<!--end register-->
    
    <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom social-media">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span class="social-media-text">Get connected with us on social networks</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div class="d-flex justify-content-between align-items-center social-media-links">
      <a href="" class=" facebook me-4 text-reset p-2 rounded d-flex justify-content-center align-items-center" style="background-color: #3B5998;height: 40px;width: 40px;">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="twitter me-4 text-reset p-2 rounded d-flex justify-content-center align-items-center" style="background-color: #1DA1F2;height: 40px;width: 40px;">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="google me-4 text-reset  p-2 rounded d-flex justify-content-center align-items-center" style="background-color: #CD201F;height: 40px;width: 40px;">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="envelope me-4 text-reset  p-2 rounded d-flex justify-content-center align-items-center" style="background-color: #999470;height: 40px;width: 40px;">
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a href="" class="linkedin me-4 text-reset  p-2 rounded d-flex justify-content-center align-items-center" style="background-color: #0e76a8;height: 40px;width: 40px;">
        <i class="fab fa-linkedin"></i>
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
            <i class="fas fa-gem me-3"></i>Spora
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            company
          </h6>
          <p>
            <a href="#!" class="text-reset">About Us</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Services</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Blog</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Reviews</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Contact US</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Our Newsletter</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
           Shop
          </h6>
          <p>
            <a href="#!" class="text-reset">Products</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Print methods</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2023 Copyright:All Rights Reserved By 
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Spora</a>
  </div>
  <!-- Copyright --> `
}

createFooter()