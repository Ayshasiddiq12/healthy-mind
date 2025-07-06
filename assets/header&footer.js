let nav=`
<nav class="navbar navbar-expand-lg fixed-top" id="mainNavbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">HEALTHYMIND.</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse justify-content-end fw-bold" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="aerobic.html">Aerobic Exercise</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="meditation.html">Meditation</a>
          </li>
            <li class="nav-item">
            <a class="nav-link" href="courses.html">Courses</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="posturesDropdown" role="button" data-bs-toggle="dropdown">
              Postures
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="poses-type.html">Poses by Type</a></li>
              <li><a class="dropdown-item" href="poses-benefit.html">Poses by Benefit</a></li>
              <li><a class="dropdown-item" href="poses-general.html">Poses by General</a></li>
              <li><a class="dropdown-item" href="poses-anatomy.html">Poses by Anatomy</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="books.html">Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="videos.html">Videos</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`

document.getElementById('navbar-placeholder').innerHTML=nav



let footer=`
<!-- footer.html -->
<footer class="footer text-white pt-5 pb-3">
    <div class="container">
      <div class="row">
  
        <!-- Logo / About -->
        <div class="col-md-4 mb-4">
          <h4 class="fw-bold">Healthy Mind</h4>
          <p class="small">Your companion in finding peace, balance, and well-being through mindful living.</p>
        </div>
  
        <!-- Quick Links -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-semibold">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="index.html" class="footer-link">Home</a></li>
            <li><a href="aerobic.html" class="footer-link">Aerobic Exercise</a></li>
            <li><a href="meditation.html" class="footer-link">Meditation</a></li>
            <li><a href="courses.html" class="footer-link">Courses</a></li>
            <li><a href="poses-type.html" class="footer-link">Postures</a></li>
            <li><a href="books.html" class="footer-link">Books</a></li>
            <li><a href="videos.html" class="footer-link">Videos</a></li>
            <li><a href="contact.html" class="footer-link">Contact</a></li>
          </ul>
        </div>
  
        <!-- Social -->
        <div class="col-md-4 mb-4">
          <h5 class="social-icon fw-semibold">Follow Us</h5>
          <div class="social d-flex ">
            <a href="#" class="text-white fs-5"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-white fs-5"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-white fs-5"><i class="bi bi-youtube"></i></a>
            <a href="#" class="text-white fs-5"><i class="bi bi-envelope"></i></a>
          </div>
        </div>
  
      </div>
  
      <div class="text-center mt-4 small text-white-50">
        © 2025 Healthy Mind. All rights reserved.
      </div>
    </div>
  </footer> 
`

document.getElementById('footer-placeholder').innerHTML=footer