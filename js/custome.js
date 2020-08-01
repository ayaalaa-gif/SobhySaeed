
$(document).ready(function(){
    $(window).on("scroll",function() {
        var dist = $(this).scrollTop();
        if(dist > 50){
            $('nav').addClass('active-bar')
        } else {
            $('nav').removeClass('active-bar')
        }
    })
    $("[data-trigger]").on("click", function(){
        var trigger_id =  $(this).attr('data-trigger');
        $(trigger_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
    });

	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
  
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
  
        return false;
      });
    // $('.drop-icon').click(function () {
    //     $(this).toggleClass('rotation');
    //     $(this).parent('a.dropdown-toggle').siblings('ul').toggle();     
    // })
    // $('.nav-item').click(function(e) {
    //   $(this).children('ul').toggle()
    //   $(this).children('a').children('label').toggleClass('rotation');
    // })

    $(".owlCarousel").owlCarousel({})
       // owl carousel
       $("#owl-carousel101").owlCarousel({
        items:3,
        loop:true,
        autoplay: true,
        margin:10,
        responsiveClass:true,
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:2
            },
            1200:{
                items:2,
                loop:true
            }
        }
    });
    // slick slider
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        arrowsText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    // nav list


    $(' #prands-next').bind("click", function () {
        $('.products .slick-next').click();
    })
    $('#prands-prev').bind("click", function () {
        $('.products .slick-prev').click();
    })
    $(' #sugg-next').bind("click", function () {
        $('.sugg .slick-next').click();
    })
    $('#sugg-prev').bind("click", function () {
        $('.sugg .slick-prev').click();
    })
    $(' #sell-next').bind("click", function () {
        $('.m-selling .slick-next').click();
    })
    $('#sell-prev').bind("click", function () {
        $('.m-selling .slick-prev').click();
    })
    $(' #recent-next').bind("click", function () {
        $('.recently .slick-next').click();
    })
    $('#recent-prev').bind("click", function () {
        $('.recently .slick-prev').click();
    })
    $(' #prand-next').bind("click", function () {
        $('.prands .slick-next').click();
    })
    $('#prand-prev').bind("click", function () {
        $('.prands .slick-prev').click();
    })

    $(".search-click").mouseleave(function() {
      if($('.search-click div').hasClass("search-opacity")) {
        $('.search-click div').removeClass("search-opacity")
      }
    })
    $(".search-click").click(function() {
        if($('.search-click div').hasClass("search-opacity")) {
            $('.search-click div').removeClass("search-opacity")
        } else {
            $('.search-click div').addClass("search-opacity")
        }
        $('.search-click div').click(function(e) {
            e.stopPropagation();
        })
    })


    // navbar list color
    $("li.nav-item").on('click', function() {
        $(this).addClass('dark-yellow').siblings().removeClass('dark-yellow')
    })

    // close button 
    $(".btn-close").click(function(e){
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("offcanvas-active");
    }); 

    // $(window).on("scroll",function() {
    //     let dist = $(this).scrollTop();
    //     if(dist > 100){
    //         $("#scrollTop").fadeIn();
    //     } else {
    //         $("#scrollTop").fadeOut();
    //     }
    // })
    $("#scrollTop").click(function(){
      $(".reveal").toggle();

    })

// product slick slider

$('.slickslide').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: false,
    slide: 'li',
    cssEase: 'linear',
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 800,
        settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            variableWidth: false,
            slidesToShow: 1,
            dots: true
        },
        breakpoint: 1200,
        settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            variableWidth: false,
            slidesToShow: 1,
            dots: true

        }
    }],
    customPaging: function (slider, i) {
        return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
    }
});

// links product
$(".link-more").click(function(e) {
    e.preventDefault();
    $(".pro-more").css("display","block");
    $(this).css("display","none");
})
$(".link-less").click(function(e) {
    e.preventDefault();
    $(".pro-more").css("display","none");
    $(".link-more").css("display","block");
})
// magnifying
var magnifierSize = 300;

/*How many times magnification of image on page.*/
var magnification = 1.5;

function magnifier() {

  this.magnifyImg = function(ptr, magnification, magnifierSize) {
    var $pointer;
    if (typeof ptr == "string") {
      $pointer = $(ptr);
    } else if (typeof ptr == "object") {
      $pointer = ptr;
    }

    if(!($pointer.is($("#img")))){
      return false;
    }

    magnification = +(magnification);

    $pointer.hover(function() {
      $(this).css('cursor', 'none');
      $('.magnify').show();
      //Setting some variables for later use
      var width = $(this).width();
      var height = $(this).height();
      var src = $(this).attr('src');
      var imagePos = $(this).offset();
      var image = $(this);

      if (magnifierSize == undefined) {
        magnifierSize = '150px';
      }

      $('.magnify').css({
        'background-size': width * magnification + 'px ' + height * magnification + "px",
        'background-image': 'url("' + src + '")',
        'width': magnifierSize,
        'height': magnifierSize
      });

      //Setting a few more...
      var magnifyOffset = +($('.magnify').width() / 2);
      var rightSide = +(imagePos.left + $(this).width());
      var bottomSide = +(imagePos.top + $(this).height());

      $(document).mousemove(function(e) {
        if (e.pageX < +(imagePos.left - magnifyOffset / 6) || e.pageX > +(rightSide + magnifyOffset / 6) || e.pageY < +(imagePos.top - magnifyOffset / 6) || e.pageY > +(bottomSide + magnifyOffset / 6)) {
          $('.magnify').hide();
          $(document).unbind('mousemove');
        }
        var backgroundPos = "" - ((e.pageX - imagePos.left) * magnification - magnifyOffset) + "px " + -((e.pageY - imagePos.top) * magnification - magnifyOffset) + "px";
        $('.magnify').css({
          'left': e.pageX - magnifyOffset,
          'top': e.pageY - magnifyOffset,
          'background-position': backgroundPos
        });
      });
    }, function() {

    });
  };

  this.init = function() {
    $('body').prepend('<div class="magnify"></div>');
  }

  return this.init();
}

var magnify = new magnifier();
magnify.magnifyImg('#img', magnification, magnifierSize);
$('.popup-link').magnificPopup({
  midClick: true,
  type: 'inline',
  callbacks: {
    open: function() {
      $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
      });
      var $current = ($(this).attr('index'))
      $('.slider').slick('slickGoTo', + $current);
    },
  }
});
   // Card's slider
   var $carousel = $('.slider-for');
    
   $carousel
     .slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       adaptiveHeight: true,
       asNavFor: '.slider-nav'
     })
     .magnificPopup({
       type: 'image',
       delegate: 'a:not(.slick-cloned)',
       closeOnContentClick: false,
       tLoading: '',
       mainClass: 'mfp-zoom-in mfp-img-mobile',
       image: {
         verticalFit: true,
         tError: ''
       },
       gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
       },
       zoom: {
         enabled: true,
         duration: 300
       },
       removalDelay: 300, //delay removal by X to allow out-animation
       callbacks: {
         open: function() {
           //overwrite default prev + next function. Add timeout for css3 crossfade animation
           $.magnificPopup.instance.next = function() {
             var self = this;
             self.wrap.removeClass('mfp-image-loaded');
             setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
           };
           $.magnificPopup.instance.prev = function() {
             var self = this;
             self.wrap.removeClass('mfp-image-loaded');
             setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
           };
           var current = $carousel.slick('slickCurrentSlide');
           $carousel.magnificPopup('goTo', current);
         },
         imageLoadComplete: function() {
           var self = this;
           setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
         },
         beforeClose: function() {
           $carousel.slick('slickGoTo', parseInt(this.index));
         }
       }
     });
   $('.slider-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 3,
     asNavFor: '.slider-for',
     dots: false,
     centerMode: false,
     focusOnSelect: true,
     variableWidth: true,
   });
   $('.zoom span').bind("click",function() {
       $(".slider-for").slick();
   })
  // cards


  $(".visa input").click(function() {
    $(this).siblings('.visa-way').show()
    $('.fawry-way').hide()

  })
  $(".fawry input").click(function() {
    $(this).siblings('.fawry-way').show()
    $('.visa-way').hide()

  })
  $(".cash").click(function () {
    $('.visa-way').hide()
    $('.fawry-way').hide()
  })

  //  input filter 
  $(".reveal-content input.filter").keyup(function(e){
    let inputVal = e.target.value;
    revealInput = $(this).siblings("ul").children("li").children(".reveal-label");
    $(revealInput).each(function (index,el) {
      if (el.innerText.startsWith(inputVal)) {
        el.style.display = "block"
    } else {
        el.style.display = "none";
    }
    })
  })


  function getVals2(){
    // Get slider values
    var parent = this.parentNode;
    // input
    var slides = parent.getElementsByTagName("input");
    // first value from
      var slide1 = parseFloat( slides[2].value );
    //   second value to
      var slide2 = parseFloat( slides[3].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
  
    // span carry values
    var displayElement = parent.getElementsByClassName("rangeValues")[0];
      // displayElement.innerHTML= 'من' + ' ' + slide1 + " جنيه ";
      displayElement.value=  slide1 ;
      var range_sec = parent.getElementsByClassName("range-sec-slide")[0];
      // range_sec.innerHTML = ' ' + 'الي' + ' ' +  slide2 + "جنيه"
      range_sec.value = slide2 
    }
    window.onload = function(){
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
      for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
        var priceInput = sliders[y].className
        if( sliders[y].type ==="range" ){
            if (priceInput == 'f-input') { //call fun 1
              sliders[y].oninput = getVals;
              sliders[y].oninput();
            } else if (priceInput == 's-input') { //call fun 2
            sliders[y].oninput = getVals2;
            sliders[y].oninput();
            }
  
          // Manually trigger event first time to display values
          
        }
        }
      }
    }


// reveal-filter
$(".close").click(function() {
  $(".reveal").css("display","none");
})
$(".reveal-results").click(function() {
  $(".reveal").toggle();
})
$(".reveal-link").click(function(ev) {
  ev.preventDefault(); 
  $(this).siblings(".reveal-content").toggle();
  $(this).children('h3').children(".reveal-min").toggle();
  $(this).children('h3').children(".plus-square").toggle()
})
// shopping-cart
$("nav .shopp-car").click(function() {
  $(".shipping-preview").toggle();
  $(".login-nav-item").hide();

})
$("nav .shopp-car-mobile").click(function() {
  $(".shipping-preview").toggle();
})
$("nav .shopp-car-mobile").mouseleave(function(e) {
  $(".shipping-preview").hide();
  // $(this).children('a').e.stopPropagation()
})
// category bar 
$(".cat-bar-list-item").mouseenter(function() {
  $(this).children('div.category-bar-body').show();
  $(this).css("background-color","white");
})
$(".cat-bar-list-item").mouseleave(function() {
  $(this).children('div.category-bar-body').hide();
  $(this).css("background-color","#dadada");

})
$(".cat-mobile-bar").click(function() {
  $(".cat-mobile-body").removeClass('cat-none')
  $(".cat-mobile-body").css("display","block")
})
$(".cat-bar-close").click(function(e) {
  $(".cat-mobile-body").addClass('cat-none')
  e.stopPropagation()
  console.log("aya");
})
  

// ---- pagination
$(".change-phone").click(function(e) {
  e.preventDefault();
  $(this).children('').show()
  $(this).children('').click(function(e) {
    e.stopPropagation();
  })
  $(this).children('input').click(function(e) {
    e.preventDefault();
  })
})
$(".change-address").click(function(e) {
  e.preventDefault();
  $(this).children('').show()
  $(this).children('').click(function(e) {
    e.stopPropagation();
  })
  $(this).children('input').click(function(e) {
    e.preventDefault();
  })
})
$(".cancel").click(function(e) {
  $(this).parent().parent('div').hide()
  e.preventDefault()
})
// nav
$(".login-nav-entry").click(function(e) {
  $(this).siblings('div').toggle()
  $(".shipping-preview").hide();
})
$(".login-nav").mouseleave(function(e) {
  $(".login-nav-item").hide()
}) 
$(".mobile-view .login-nav-entry").mouseleave(function(e) {
  $(".login-nav-item").hide();
  // $(this).children('a').e.stopPropagation()
})
// wizard
 $('.steps').hide().first().show();
$(".acc-list-link").click(function(e){
  $($(this).attr('href')).show().siblings('.steps').hide();
  $('a').removeClass('account-active');
  $(this).addClass('account-active')
  ;
})

});















