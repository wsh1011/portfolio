//메인 비주얼 처리코드
var timeonoff;   //타이머 처리  홍길동 정보
var imageCount=$('.gallery ul li').size();   //이미지 총개수 3
var cnt=1;   //이미지 순서 1 2 3 1 2 3....(주인공!!=>현재 이미지 순서)
var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
  
// 처음 노출 상태
$('.btn1').css('background','rgba(255,255,255,.5)'); //첫번째 불켜
$('.btn1').css('width','150px'); // 버튼의 너비 감소
$('.btn'+cnt).addClass('on');

$('.gallery .link1').fadeIn('normal'); //첫번째 이미지 보인다..
$('.gallery .link1 span:nth-of-type(1)').delay(1500).animate({top:450, opacity:1},'slow');
$('.gallery .link1 span:nth-of-type(2)').delay(2000).animate({top:500, opacity:1},'slow');

function gallery_change(){
  $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
  
  // for(var i=1;i<=imageCount;i++){
  //   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
  //   $('.btn'+i).css('width','16');
  // }
  $('.mbutton').css('background','rgba(255,255,255,.5)'); //버튼 모두불꺼
  $('.mbutton').css('width','60px');
  $('.btn'+cnt).css('background','#rgba(255,255,255,.5)');//자신 버튼만 불켜 
  $('.btn'+cnt).css('width','150px');
  $('.mbutton').removeClass('on');
  $('.btn'+cnt).addClass('on');
  
  $('.gallery li span:nth-of-type(1)').css('top',450).css('opacity',0);
  $('.gallery li span:nth-of-type(2)').css('top',500).css('opacity',0);
  $('.gallery .link'+cnt).find('span:nth-of-type(1)').delay(1000).animate({top:420, opacity:1},'slow');
  $('.gallery .link'+cnt).find('span:nth-of-type(2)').delay(1500).animate({top:470, opacity:1},'slow');
}


function moveg(){
  if(cnt==imageCount+1)cnt=1;
  if(cnt==imageCount)cnt=0;  //카운트 초기화

  cnt++;  //카운트 1씩 증가.. 3이되면 다시 초기화 
         //1 2 3    1 2 3 ..
  gallery_change();

   if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
 }
 
timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
  //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
  //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


$('.mbutton').click(function(event){  //각각의 버튼 클릭시, ()안은 매개변수라 아무거나 써도됨
   var $target=$(event.target); //클릭한 버튼 $target == $(this)
   clearInterval(timeonoff); //타이머 중지     


  // if($target.is('.btn1')){  //첫번째 버튼 클릭??($target가 .btn1을 가지고있니?)   $target 대신 $(this)해도됨
  //    cnt=1;  //클릭한 해당 카운트를 담아놓는다
  // }else if($target.is('.btn2')){  //두번째 버튼 클릭??
  //    cnt=2; 
  // }else if($target.is('.btn3')){ 
  //    cnt=3; 
  // }else if($target.is('.btn4')){
  //    cnt=4; 
  // }else if($target.is('.btn5')){
  //    cnt=5; 
  // } 
  cnt=$(this).index('.mbutton')+1;
  //console.log(cnt);
  gallery_change();

  if(cnt==imageCount)cnt=0;  //카운트 초기화
 
  timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
 
  if(onoff==false){ //중지상태냐??
        onoff=true; //동작~~
        $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
  }
  
});

//stop/play 버튼 클릭시 타이머 동작/중지
$('.ps').click(function(){ 
 if(onoff==true){ // 타이머가 동작 중이냐??
     clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
     onoff=false;   //중지
 }else{  // false 타이머가 중지 상태냐??
   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
   onoff=true; //동작
 }
});	

//왼쪽/오른쪽 버튼 처리
// $('.visual .btn').click(function(){

//   clearInterval(timeonoff); //살인마

//   if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭? (.btn이 .btnRight라는 클래스를 가지고 있니?)
//       if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
//       //if(cnt==imageCount+1)cnt=1;  
//       cnt++; //카운트 1씩증가
//   }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
//       if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
//       if(cnt==0)cnt=imageCount;
//       cnt--; //카운트 감소
//   }

// gallery_change();

// timeonoff= setInterval( moveg , 4000); //부활

// if(onoff==false){
//   onoff=true;
//   $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
// }
// });




//연구소 소개 처리코드

//var itroH= $(window).scrollTop(); 
//if (itroH){

//  $('.introduce .introduce_left').css('width','1350px');
//}  //모르겠다!

$('.introduce .introduce_right img').fadeIn('fast');
//$('.introduce .introduce_left .intro_img:eq(0)').find('img').css('border-color','#f00');

$('.intro_img a').click(function(e){
    e.preventDefault();
    var introInd = $(this).index('.intro_img a'); // 0 1 2 3

    $('.introduce .introduce_right img').attr('src','./images/intro'+introInd+'.jpg');
    $('.introduce_right img').hide().fadeIn('fast')
});


//$('.big').css('opacity',1);
//        $('.gallery .btn li:eq(0) a').css('border','3px solid rgba(255,0,0,1)').children().css('filter','grayscale(100%)');

//        $('.text li:eq(0)').fadeIn(2000); //첫번째글 보이게함

//        $('.gallery .btn li a').click(function(e){
//            e.preventDefault();
//            var ind = $(this).index('.gallery li a');
            //console.log(ind);

//            $('.big').attr('src','./images/big'+(ind+1)+'.jpg'); //클릭한 버튼에 해당하는 이미지로 교체
//            $('.big').hide().fadeIn('fast'); //페이지 효과

//            $('.gallery .btn li a').css('border','3px solid rgba(255,0,0,0)').children().css('filter','grayscale(0)');
//            $(this).css('border','3px solid rgba(255,0,0,1)').children().css('filter','grayscale(100%)');
        
//            $('.text li').hide(); //모든 텍스트 안보이게
//            $('.text li:eq('+ind+')').fadeIn(2000);  //클릭한 버튼에 해당하는 텍스트만 보이게
//        });



// var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   1050px
//     var on_off=false;  //false(안오버)  true(오버)
    
//         $('#headerArea').mouseenter(function(){
//            // var scroll = $(window).scrollTop();
//             $(this).css('background','#fff');
//             //$('.dropdownmenu li a').css('color','#333'); 
//             // $('.dropdownmenu li.menu ul li').css('color','#666');
//             on_off=true;
//         });
    
//        $('#headerArea').mouseleave(function(){
//             var scroll = $(window).scrollTop();  //스크롤의 거리
            
//             if(scroll<smh-100 ){
//                 $(this).css('background','rgba(255,255,255,.4)').css('box-shadow','none'); //헤더의 배경색을 없애고
//                 //$('.dropdownmenu li a').css('color','#333'); //헤더의 글자색을 흰색으로
//             }else{
//                 $(this).css('background','#fff'); 
//                 //$('.dropdownmenu li a').css('color','#333');
//             }
//            on_off=false;    
//        });
    
//        $(window).on('scroll',function(){//스크롤의 거리가 발생하면
//             var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
//             //console.log(scroll);
 
//             if(scroll>smh-100){//스크롤을 비주얼높이-헤더높이까지 내리면
//                 $('#headerArea').css('background','#fff').css('box-shadow','1px 0 8px rgba(0, 0, 0, .4)');
//                 //$('.dropdownmenu li a').css('color','#333');
//             }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
//                if(on_off==false){ //헤더가 안오버 상태일때만
//                     $('#headerArea').css('background','rgba(255,255,255,.4)').css('box-shadow','none');
//                     //$('.dropdownmenu li a').css('color','#333');
//                }
//             }; 
            
//          });







//체험시설 처리코드
$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();

  //var aaa = $('.box').height()-$('.box .box5').height();
  if(scroll>=$('.ecomuseum_container').offset().top){
      var bbb =scroll - $('.ecomuseum_container').offset().top;
      
      console.log(bbb);  // 0~1040(부모박스-스티키박스)

    if(bbb<=850){
      $('#content .ecomuseum_right').css('top',0-bbb);  //  - 0~850
    } 
  }
});





//산업곤충연구 처리코드




//이용안내 처리코드

$('.guide_inner ul li').click(function(e){
    e.preventDefault();
  var guideInd=$(this).index('.guide_inner ul li');
  $('.guide').css('background','url(../images/guide'+guideInd+'.jpg)');
  $('.guide').hide().fadeIn('fast')
});
  

  
$('.guide_inner ul li').mouseenter(function(){
  var guideInd=$(this).index('.guide_inner ul li');
  $('.gpic'+guideInd).css('transform','scale(1.2)');  
});

$('.guide_inner ul li').mouseleave(function(){
  var guideInd=$(this).index('.guide_inner ul li');
  $('.gpic'+guideInd).css('transform','scale(1)');  
});






//새로운 소식 처리코드
var position=0;  //최초위치
//var movesize=300; //이미지 하나의 너비
var movesize=$('.slide_gallery ul li').width();
// movesize+=30;

console.log(movesize);

var timeonoff;

$('.slide_gallery ul').after($('.slide_gallery ul').clone());

function moveG() {
    position-=movesize;  // 330씩 감소
    $('.slide_gallery').animate({left:position}, 'fast',
        function(){							
        if(position<=-3630){  //마지막 li가 박스안에 들어왔을때
            $('.slide_gallery').css('left',-990);
            position=-990;
        }
    }).clearQueue();
}

// timeonoff= setInterval(moveG, 3000);


    //슬라이드 겔러리를 한번 복제
var lastClickTime = 0;      

$('.button').click(function(e){
 e.preventDefault();

 var currentTime = new Date().getTime();
 //console.log(currentTime);

 var timeDiff = currentTime - lastClickTime;
 // 일정 시간(예: 500ms) 이내에 다시 클릭한 경우 이벤트를 무시
 if (timeDiff < 500) {
     return false; //더이상 밑에있는 코드를 계산하지말고 빠져나가라
 }

 lastClickTime = currentTime;

// clearInterval(timeonoff);
 
 if($(this).is('.m1')){  //이전버튼 클릭
     
      position-=movesize;  // 300씩 감소
     $('.slide_gallery').animate({left:position}, 'fast',function(){
        if(position<=-3630){
            position=-990;
            $('.slide_gallery').css('left',-990);
         }
     }).clearQueue();  

 }else if($(this).is('.m2')){  //다음버튼 클릭
       if(position>=0){
            $('.slide_gallery').css('left',-2640);
            position=-2640;
        }

        position+=movesize; // 150씩 증가
        $('.slide_gallery').animate({left:position}, 'fast',
            function(){							
                if(position>=0){
                    $('.slide_gallery').css('left',-2640);
                    position=-2640;
                }
            }).clearQueue();

  }
});

