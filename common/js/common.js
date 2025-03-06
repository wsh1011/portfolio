//전체페이지 공통 js


//스크롤 애니메이션 AOS
AOS.init({
    easing: 'ease-in-out-sine'     //이렇게 하면 모든 효과에 easing들어감
  });

//글로벌 네비게이션(GNB)

$(document).ready(function() {

    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   1050px
    var on_off=false;  //false(안오버)  true(오버)
    
        $('#headerArea').mouseenter(function(){
           // var scroll = $(window).scrollTop();
            $(this).css('background','#fff');
            //$('.dropdownmenu li a').css('color','#333'); 
            // $('.dropdownmenu li.menu ul li').css('color','#666');
            on_off=true;
        });
    
       $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();  //스크롤의 거리
            
            if(scroll<smh-100 ){
                $(this).css('background','rgba(255,255,255,.4)').css('box-shadow','none'); //헤더의 배경색을 없애고
                //$('.dropdownmenu li a').css('color','#333'); //헤더의 글자색을 흰색으로
            }else{
                $(this).css('background','#fff'); 
                //$('.dropdownmenu li a').css('color','#333');
            }
           on_off=false;    
       });
    
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);
 
            if(scroll>smh-100){//스크롤을 비주얼높이-헤더높이까지 내리면
                $('#headerArea').css('background','#fff').css('box-shadow','1px 0 8px rgba(0, 0, 0, .4)');
                //$('.dropdownmenu li a').css('color','#333');
            }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
               if(on_off==false){ //헤더가 안오버 상태일때만
                    $('#headerArea').css('background','rgba(255,255,255,.4)').css('box-shadow','none');
                    //$('.dropdownmenu li a').css('color','#333');
               }
            }; 
            
         });
 
   
     //2depth 열기/닫기
     $('ul.dropdownmenu').hover(
        function() { 
           $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
           $('#headerArea').animate({height:280},'fast').clearQueue();
        },function() {
           $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
           $('#headerArea').animate({height:100},'fast').clearQueue();
      });
     
      //1depth 효과
      $('ul.dropdownmenu li.menu').hover(
        function() { 
            $('.depth1',this).css('color','#53bcbe'); 
        },function() {
           $('.depth1',this).css('color','#333');
      });

      //2depth 효과
      $('ul.dropdownmenu li.menu ul li').hover(
        function() { 
            $('a',this).css('color','#333'); 
        },function() {
           $('a',this).css('color','#666');   
      });
      
 
      //tab 처리
      $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
         $('ul.dropdownmenu li.menu ul').slideDown('normal');
         $('#headerArea').animate({height:280},'fast').clearQueue();
      });
 
     $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
         $('ul.dropdownmenu li.menu ul').slideUp('fast');
         $('#headerArea').animate({height:100},'normal').clearQueue();
     });
 });
 








    //검색박스

    $('.searchicon a').click(function(e){
        e.preventDefault();

        $('.insect_box').fadeIn('fast');
       
    });

    $('.close_btn').click(function(e){
        e.preventDefault();
        $('.insect_box').hide();
      
    });












//패밀리 사이트 이동

$(document).ready(function() {
   	
	// $('.family .arrow').click(function(){
	// 	$('.family .aList').fadeIn('slow');			  
	// });

	// $('.family .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });
  
	$('.family .arrow').toggle(function(){
		$('.family .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){
        $('.family .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

	//tab키 처리
	//   $('.family .arrow').on('focus', function () {        
    //           $('.family .aList').fadeIn('slow');	
    //    });
    //    $('.family .aList li:last a').on('blur', function () {        
    //           $('.family .aList').fadeOut('fast');
    //    });
 
});


//top으로 이동
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
   
   
    //$('.text').text(scroll);

    if(scroll>=500){ //500이상의 거리가 발생되면
        $('.top_move').fadeIn('slow');  //top보여라~~~~
    }else{
        $('.top_move').fadeOut('fast');//top안보여라~~~~
    }
});

$('.top_move').click(function(e){
   e.preventDefault();
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000); 
});

