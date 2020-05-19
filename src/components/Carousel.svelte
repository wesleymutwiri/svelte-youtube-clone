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
        clickable: true,
      },
      navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left",
      },
    });
  };

  export let name = "";
  export let icon = "";
</script>

<div class="carousel-container">
  <div class="swiper-container">
    <div class="customNavigation">
      <div class="carousel-name">
        <h3><i class={icon}></i> {name} </h3>
      </div>
      <a class="navigation">
        <i class="fas fa-angle-right"></i>
      </a>
      <a class="navigation">
        <i class="fas fa-angle-left"></i>
      </a>
    </div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 1</a></h4>
          <p>12434522 views </p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 2</a></h4>
          <p>232345143 views</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 3</a></h4>
          <p>4324254 views</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 4</a></h4>
          <p>2832 views</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 5</a></h4>
          <p>9383892 views </p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://via.placeholder.com/150" alt="" class="top image" />
        <div class="container">
          <h4><a href="#">Blog Title 6</a></h4>
          <p>09 views </p>
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
    height: 250px;
    min-width: 150px;
  }

  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }

  .customNavigation .navigation {
    float: right;
    font-size: 20px;
    padding: 5px;
  }

  a {
    text-decoration: none;
  }

  .container h4,
  .container p {
    padding: 5px;
  }

  .customNavigation .carousel-name {
    float: left;
    padding: 5px;
  }
</style>