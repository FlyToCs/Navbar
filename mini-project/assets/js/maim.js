
  $('.owl-carousel').owlCarousel({
    loop:true, 
    rtl:true,
    autoplay:true,
    items:4,
    nav:true,
    dots:true,
    margin:10,
    responsiveClass:true,
    responsive:{
      300:{
          items:1,
          
      },
      768:{
        items:2,
        
    },
    992:{
          items:3,
          
      },
      1200:{
          items:4,
          nav:true,
          
      }
  }
    
})