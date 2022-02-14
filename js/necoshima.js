// document.addEventListener('DOMContentLoaded',function(){        
//     document.getElementById('menuButton').addEventListener('click',function(){
//         this.classList.toggle('active');                    //clickすると、activeというクラスに切り替える処理
//         document.getElementById('nav').classList.toggle('active');
//         document.getElementById('mask').classList.toggle('active');
//     });
// });


(function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
  } )(jQuery);


// $('.slider').slick({
//    slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   arrows: false,
//   autoplaySpeed: 2000,
  
//   responsive: [{
// 		breakpoint: 600,
// 		settings: {
// 			slidesToShow: 2, // 表示スライド数 2つ
// 			slidesToScroll: 1,
// 		}
// 	}]
// });


 $(function () {
        /* slick setting
        ------------------------------------- */
        $('.responsive').slick({
            arrows: false,
            autoplay: true,
            draggable: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            speed: 5000,
            pauseOnHover: false,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            slidesToShow: 6,
            slidesToScroll: 1,
 
           responsive: [{
		breakpoint: 600,
		settings: {
			slidesToShow: 2.5, // 表示スライド数 2つ
			slidesToScroll: 1,
		}
	}]   
        });
    });
    
    
    
