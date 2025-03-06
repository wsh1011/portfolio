//슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
$('.slideMenu a').click(function(e){
    e.preventDefault(); //href="#" 속성을 막아주는..메소드

     var value=0; //이동할 스크롤의 거리

     if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
        value= $('#content .content_area .his90s').offset().top;  // 해당 콘테츠의 상단의 거리~~
     }else if($(this).hasClass('link2')){
        value= $('#content .content_area .his00s').offset().top; 
     }else if($(this).hasClass('link3')){
        value= $('#content .content_area .his10s').offset().top; 
     }
     
   $("html,body").stop().animate({"scrollTop":value},1000);
 });

 let smh = $('.content_area').offset().top-100;
 let con1 =$('#content .content_area .his90s').offset().top-600; 
 let con2 =$('#content .content_area .his00s').offset().top-600;  
 let con3 =$('#content .content_area .his10s').offset().top-600;

 $(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  //스크롤top의 좌표를 담는다
  
  //sticky menu 처리
  if(scroll>smh){ 
      $('.slideMenu').addClass('navOn');
      //스크롤의 거리가 350px 이상이면 서브메뉴 고정
      $('header').hide();
  }else{
      $('.slideMenu').removeClass('navOn');
      //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
      $('header').show();
  }


  $('.slideMenu').find('a').removeClass('spy');
  //스크롤 스파이
  if(scroll>=con1 && scroll<con2){   // 0~h1-800
    $('.slideMenu li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
  }else if(scroll>=con2 && scroll<con3){  // h1~h2-800
      $('.slideMenu li:eq(1)').find('a').addClass('spy');
      //두번째 서브메뉴 활성화
  }else if(scroll>=con3){
      $('.slideMenu li:eq(2)').find('a').addClass('spy');
      //세번째 서브메뉴 활성화
  }


 });

 const history_line = document.querySelector('.history_line');
 const linepath = document.querySelector('.linepath');
 const pathLength = linepath.getTotalLength();
 //console.log(pathLength);
 linepath.style.strokeDasharray = pathLength;
 linepath.style.strokeDashoffset = calcDashoffset(window.innerHeight*0.3, history_line, pathLength);

 function calcDashoffset(scrollY, element, length){   //path길이(보임)~0(안보임)
   const ratio = (scrollY-element.offsetTop)/element.offsetHeight  //0~1
   const value  = length-(length*ratio)
   return value < 0 ? 0 : value > length ? length : value
 }

 function scrollHandler(){
   const scrollY = window.scrollY + (window.innerHeight*0.3);
   linepath.style.strokeDashoffset = calcDashoffset(scrollY, history_line, pathLength)
 }
 window.addEventListener('scroll', scrollHandler);