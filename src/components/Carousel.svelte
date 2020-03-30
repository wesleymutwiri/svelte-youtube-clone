<script>
  import Swiper from "swiper";
  window.onload = function () {
    new Swiper(".swiper-container", {
      grabCursor: false,
      centeredSlides: true,
      spaceBetween: 30,
      slidesPerView: 5,
      slidesPerGroup: 5,
      uniqueNavElements: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left"
      }
    });
  };
</script>

<div class="carousel-container">
  <div class="swiper-container">
    <div class="customNavigation">
      <a>
        <i class="fas fa-angle-left"></i>
      </a>
      <a>
        <i class="fas fa-angle-right"></i>
      </a>
    </div>
    <div class="swiper-wrapper">
      <div class=" swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 1</a></h4>
          <p>Some short description as well</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 2</a></h4>
          <p>Some short description as well</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 3</a></h4>
          <p>Some short description as well</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 4</a></h4>
          <p>Some short description as well</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 5</a></h4>
          <p>Some short description as well</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 6</a></h4>
          <p>Some short description as well</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .swiper-container {
    width: 100%;
    overflow: hidden;
  }

  .swiper-wrapper {
    display: flex;
    flex-basis: 100%;
    flex-wrap: auto;

  }

  .swiper-slide {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    width: 300px;
    height: 300px;
  }

  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }
</style>