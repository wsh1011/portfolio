$(document).ready(function() {
    var position=0;  //최초위치
    var movesize=.5; //이동 크기(2px씩 움직임)
    var timeonoff;
    
    $('.crop_box ul').after($('.crop_box ul').clone()); //.crop_box ul 뒤에 .crop_box ul 복제해서 놔라
    // $('가져다 놓을 태그').after('기준태그');
    
    function cropMove(){
         position-=movesize;  
         $('.crop_box').css('left',position);
         
          if(position < -5040){    //마지막 li가 박스안에 들어왔을때(li사이에 마진 줄거면 양쪽에 주는게 계산할때 편함)
                $('.crop_box').css('left',-1520);
                position=-1520;
          } 
         
    };
 
      timeonoff= setInterval(cropMove, 5); //0.005마다 cropMove함수 불러라
     
        $('.crop_box').hover(function(){  //마우스 올라갔을때 멈추기
         clearInterval(timeonoff);
        },function(){
            timeonoff= setInterval(cropMove, 5);	
        });
     
     
  });