$(document).ready(function(){
    // Mobile Menu Icon
   $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.header-nav nav').slideToggle();
   });


    // Purchase Card
   $('.Purchase_card').click(function(){
      
      $('.Purchase_card').removeClass('active_card');
      $(this).addClass('active_card');
   });


    // single_check_like
   $('.single_check_like').click(function(){
      $('.single_check_like').removeClass('active_check');
      $(this).addClass('active_check');
   });




   // Customer Area Carousel
   $('.customer_content').owlCarousel({
      loop:true,
      margin:20,
    //   autoplay:true,
      autoHeight:true,
      nav:false,
      items:3,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1,
          },
          768:{
              items:2
          },
          992:{
              items:2
          },
          1200:{
              items:2
          },
          1365:{
              items:3
          },
      }
  })


   // tinnitus_card_content_mobile
   $('.tinnitus_card_content_mobile').owlCarousel({
      loop:true,
      margin:20,
      autoplay:true,
      autoHeight:true,
      nav:true,
      items:1,
  })

   // Tinnitus Free Area Carousel
   $('.tinnitus_free_content').owlCarousel({
      loop:true,
      margin:24,
      autoplay:true,
      autoHeight:true,
      nav:false,
      items:8,
      responsive:{
          0:{
              items:2
          },
          450:{
              items:2
          },
          575:{
              items:3
          },
          767:{
              items:4
          },
          991:{
              items:5
          },
          1024:{
              items:6
          },
          1365:{
              items:8
          },
          1440:{
              items:8
          }
      }
  })

   //   Avoid Carousel 
   $('.avoid_content').owlCarousel({
      loop:true,
      margin:24,
    //   autoplay:true,
      autoHeight:true,
      nav:false,
      items:5,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          575:{
              items:2
          },
          767:{
              items:3
          },
          991:{
              items:4
          },
          1365:{
              items:5
          },
          1440:{
              items:5
          }
      }
  })
   //   Avoid Carousel 
   $('.just_content').owlCarousel({
      loop:true,
      margin:90,
    //   autoplay:true,
      autoHeight:true,
      nav:false,
      items:3,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          575:{
              items:2,
              margin:20
          },
          767:{
              items:2,
              margin:30
          },
          1320:{
              items:3,
              margin:40
          },
          1440:{
              items:3
          }
      }
  })

   //   Avoid Carousel 
   $('.Purchase_content').owlCarousel({
      loop:true,
      margin:25,
    //   autoplay:true,
      autoHeight:true,
      nav:false,
      items:3,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          767:{
              items:2,
          },
          1320:{
              items:3,
          }
      }
  })



  
  var mainslider = new Swiper('.slider-main', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


});
