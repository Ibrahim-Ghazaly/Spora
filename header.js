const header = document.getElementById("header");


function CreateHeader(){
    header.innerHTML=`
    
    <div class="top-header p-2">
    <div class="container">
      <div class="d-flex justify-content-between " >
        <div>
          <select class="select-language form-select"  >
              <option  value="en"   data-i18n="english" selected>English</option>
              <option  value="ar"   data-i18n="arabic">Arabic</option>
          </select>
        </div>
        <div class="d-flex  ">
            <a class="btn  signup me-1"  href="/register.html" data-i18n="signup">Sign UP</a>
            <a class="btn login me-1 bg-light"  href="/login.html"  data-i18n="login">Log In</a>
        </div>
      </div>
    </div>
 </div>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<!-- Container wrapper -->
<div class="container">
<!-- Toggle button -->
<button
  class="navbar-toggler"
  type="button"
  data-mdb-toggle="collapse"
  data-mdb-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <i class="fas fa-bars"></i>
</button>

<!-- Collapsible wrapper -->
<div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
  <!-- Navbar brand -->
  <a class="navbar-brand mt-2 mt-lg-0  fs-3" href="index.html" >
   Spora
  </a>
  <!-- Left links -->
  <ul class="navbar-nav  mb-2 mb-lg-0">
    <li class="nav-item item-link">
      <a class="nav-link " href="products.html"  data-i18n="Products">Products</a>
      <ul class="products-list p-1">
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="BestSellers">Best Sellers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="printedClothing">Printed Clothing</a>
           <ul>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="TShirt">T-shirt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="Hoodies">Hoodies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="SweatShirts">Sweatshirts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="Vests">Vests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="Socks">Socks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="Bottoms">Bottoms</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="SweatShirts">Activewear</a>
            </li>
           </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="AcccessoriesHomeware">Acccessories Homeware</a>
           <ul>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="Mugs">Mugs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="Aprons">Aprons</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="ToteBags">Tote Bags</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="Cushions">Cushions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="Towels">Towels</a>
            </li>
           </ul>
        </li>
      </ul>
    </li>
    <li class="nav-item item-link">
      <a class="nav-link " href="#" data-i18n="services">Services</a>
      <ul class="products-list p-1">
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="printedOnDemand">Print on Demand</a>
           <ul>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="WithShopify">With Shopify</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="WithEtsy">With Etsy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="WithTiktok">With Tiktok</a>
            </li>
           </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="RewardPricing">Reward Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="BulkPrinting">Bulk Printing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="ActiveWearOnDemand">Active Wear On Demand</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="StanleyStella">Stanley/Stella</a>
        </li>
     
      </ul>
    </li>
    <li class="nav-item item-link">
      <a class="nav-link" href="#" data-i18n="help">Help&Advice</a>
      <ul class="products-list p-1">
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="Blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="FAQs">FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="Delivery">Delivery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="DesignGuidlines">Design Guidlines</a>
           <ul>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="ForDirectToGarmentPrinting">For Direct To Garment Printing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="ForEmproidery">For Emproidery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="ForDyeSublimitionPrinting">For Dye Sublimition Printing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="ForPrintedLabels">For Printed Labels</a>
            </li>
           </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#" data-i18n="IntegratingYourStore">Integrating Your Store</a>
           <ul>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="withShopify">with Shopify</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="WithWoocommerce">With Woocommerce</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-i18n="WithEtsy">With Etsy</a>
            </li>
          
           </ul>
        </li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" data-i18n="contact">Contact Us</a>
    </li>
  </ul>
  <!-- Left links -->
</div>
<!-- Collapsible wrapper -->

<!-- Right elements -->
<div class="d-flex align-items-center ms-3">
  <!-- Icon -->
  <a class="text-reset me-3" href="/search.html">
    <i class="fa-solid fa-magnifying-glass"></i>
  </a>

  <!-- Notifications -->

  <!-- Avatar -->
 
</div>
<!-- Right elements -->
</div>
<!-- Container wrapper -->
</nav>
<!-- Navbar -->
<div class="bottom-header p-3 text-center" >
<div class="container">
  Earn a 10% discount on all products with reward pricing      
</div>
</div>  `
}

CreateHeader()