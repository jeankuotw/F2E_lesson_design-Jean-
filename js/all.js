// ======================menu導覽列寫法(2種)-(1)click效果======================
// $(function() {
// 	$('.header .menu > li >a').click(function(){
// 		event.preventDefault();
// 		// 當點a時,保持a:hover的css樣式
// 		// 方法:讓a新增class樣式(toggleClass()),並在css中設定新增的class的樣式
// 		// 請見css: .header .menu > li > a:hover, .header .menu > li > a.menuchoose{}
// 		$(this).toggleClass('menuchoose');
// 		// 顯示第二層ul。CSS中也需先設定第二層ul的樣式
// 		$(this).parent().find('ul').slideToggle();
// 		// 將其他的ul關閉
// 		$(this).parent().siblings().find('ul').slideUp();
// 	})
// });

$(function() {
// ======================menu導覽列寫法(2種)-(2)hover效果======================
// ======================第一層a標籤======================
	$('.header .menu > li >a').hover(function() {
		/* 滑鼠滑入Stuff to do when the mouse enters the element */
		// 增加a:hover(自己)樣式
		$(this).addClass('menuchoose');
		// 第二層ul滑出
		$(this).parent().find('ul').slideDown(400);
		// 除掉其他ul下拉式選單狀態
		$(this).parent().siblings().find('ul').slideUp(0);
		// 除掉其他li的hover樣式
		$(this).parent().siblings().find('a').removeClass('menuchoose');
	}, function() {
		/* 滑鼠滑出Stuff to do when the mouse leaves the element */	
		// 第一層a:hover(自己)移除樣式
		$(this).removeClass('menuchoose');
		// 第二層ul收起
		$(this).parent().find('ul').slideUp(0);
	});
// ======================第二層ul標籤======================
	$('.header .menu > li ul').hover(function() {
		/* 滑鼠滑入Stuff to do when the mouse enters the element */
		// 第一層增加a:hover樣式
		$(this).parent().find('a').addClass('menuchoose');
		// 第二層ul(自己)滑出
		$(this).slideDown(0);
	}, function() {
		/* 滑鼠滑出Stuff to do when the mouse leaves the element */
		// 移除第一層a:hover樣式
		$(this).parent().find('a').removeClass('menuchoose');
		// 收起第二層ul
		$(this).slideUp(0);
	});
// ======================click效果======================
	$('.header .menu > li >a').click(function(){
		// 移除第一層a標籤預設功能(超連結)
		event.preventDefault();
	});
// ======================.banner主形象圖的swiper輪播效果======================
// swiper api查詢：https://swiperjs.com/api/
  var mySwiper = new Swiper ('.swiper-container', {
    
    // Optional parameters(設定參數值。各參數的設定需用","區隔)
    // (1)方向:可設定為vertical(垂直)、horizontal(水平,預設值)
    direction: 'horizontal',
    // (2)照片自行切換時的速度(新增)
    speed:1500,

    // (3)效果(新增)：可設定"slide"(預設), "cube"(非常酷,3D切換), "coverflow"(好看,一收一開) or "flip"(180度旋轉)。[備註]不需加spaceBetween: 30,
    // effect: 'coverflow',
    // (3)的效果另有"fade"，但須搭配spaceBetween:30(slides之間的距離（以px為單位）)才能使用
    effect: 'fade',
    spaceBetween: 30,

    // (4)自動撥放&速度設定&即使用手動切換圖片停下後,自動撥放功能仍存在(新增)
    autoplay:{delay: 2500,
		      disableOnInteraction: false,},
    // (5)重複播放。loop:true→可重複撥放,最後一張跳回第一張
    loop: true,

    // If we need pagination(頁碼)
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

    // Navigation arrows(導覽列)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // (移除)
    // And if we need scrollbar(滾動條)
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
// ====================== listmenu重點清單lightbox效果 ======================
 lightbox.option({
      'resizeDuration': 1000,
      'wrapAround': true
    });


// ====================== .topimage(回到最上面)click效果 ======================
	$('.topimage').click(function(){
		// 取消a標籤預設功能
		event.preventDefault();
		// 動畫效果回到最上面
		$('body,html').animate({scrollTop:0},1500);
	});
});
