(function ($) {

  "use strict";

  $(window).on('load', function () {

    /* 
   MixitUp
   ========================================================================== */
    $('#portfolio').mixItUp();

    /* 
     One Page Navigation & wow js
     ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });

    /*Page Loader active
      ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'liner',
      allowParentLinks: true,
      duplicate: true,
      label: '',
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

    /* WOW Scroll Spy
  ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });



    var typed = new Typed('#typed', {
      strings: [
        'Full stack Developer',
        'Aspiring Cloud Engineer'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    const counter = document.querySelector(".counterUp");
    async function updateViewCount() {
      try {
        // AWS Lambda Function URL
        const functionUrl = "https://5h6l4jk72zrw4tjafuxr5xd7cu0haalj.lambda-url.eu-west-2.on.aws/";

        // Fetch the views count
        let response = await fetch(functionUrl);
        let data = await response.json();

        // Update the HTML element with the views count
        counter.textContent = data.views;
      } catch (error) {
        console.error("Error fetching views:", error);
        document.querySelector(".counterUp").textContent = "Error";
      }
    }

    // Call function when the page loads
    updateViewCount();


    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });



  });

}(jQuery));