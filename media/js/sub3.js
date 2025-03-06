//tripMusic 노래재생
var audio=document.getElementById('main_audio'); //audio, video 태그는 꼭 쌩스크립트로 객체화시켜야함($audio, $video 안됨)
    var currnum = 1;  //현재 선택된 사운드 순서
    var ps=false; //false(stop), true(play) 상태를 잡는 변수

    function changeSound(num){  //1 2 3 4
         $('#main_audio').attr('src','./music/music'+num+'.mp3');
         audio.play();    // $('#main_audio').play();  하면 동작안함
        //  $('.playerImg img').addClass("current");
         $('#controlPlay i').removeClass().addClass('fa-solid fa-stop');

         $('.playInfo li a').removeClass('curr');
         $('.playInfo li:eq('+(num-1)+') a').addClass('curr');
         currnum = num;
         ps=true;

    }

    $('#controlPlay').click(function(e){
        e.preventDefault();

        if(ps==false){ //중지중이면
            audio.play();
            // $('.playerImg img').addClass("current");
            $('#controlPlay i').removeClass().addClass('fa-solid fa-stop');
            ps=true;
        }else{  //재생중이면
            audio.pause();
            // $('.playerImg img').removeClass("current");
            $('#controlPlay i').removeClass().addClass('fa-solid fa-play');
            ps=false;
        }
    });

    
    function np_play(){
        // $('.playerImg img').addClass("current");
        $('.playInfo li:eq('+(currnum-1)+') a').addClass('curr');

        $('.playInfo li a').removeClass('curr');
        $('.playInfo li:eq('+(currnum-1)+') a').addClass('curr');

        $('#controlPlay i').removeClass().addClass('fa-solid fa-stop');
        ps=true;

        $('#main_audio').attr('src','./music/music'+currnum+'.mp3');
        audio.play();
    }

    $('#controlNext').click(function(e){  //다음버튼 클릭시
        e.preventDefault();

        currnum++; // 1 2 3 4
        if(currnum==5)currnum=1;
        np_play(); //재생한다
    });


    $('#controlPrev').click(function(e){ //이전버튼 클릭시
        e.preventDefault();

        currnum--; // 4 3 2 1
        if(currnum==0)currnum=4;
        np_play();//재생한다
    });











    //비디오
   // conNav 영역
// 최초 상황 640 이상
var scrSize

$('.spotlightOn').show();
$('.newReleases, .bestOf').hide();
$('.conNav li:eq(0) a').addClass('tab_a1');
var ind=0;

$('.conNav li').click(function(e){
    e.preventDefault();
    ind = $(this).index();
    // console.log(ind);
    $("#content section").fadeOut('fast');
    $("#content section:eq("+ind+")").fadeIn('slow');
    $('.conNav li a').removeClass();
    $(this).find('a').addClass('tab_a1');
});

// 640 이하
function screen_size2(){
  scrSize = $(window).width();
  var nav_on = false

$('.conav_box>a').click(function(e) {
    e.preventDefault();

    if (nav_on == true) {
        $('.conNav').slideUp('fast');	
        $(this).find('span').text('expand_more');
        nav_on=false;

    } else {
        $('.conNav').slideDown('fast');
        $(this).find('span').text('expand_less')
        nav_on=true;
    }
});

var ins= ['Spotlight On', 'New Releases', 'Best Of']
    $('.conNav li a').on('click', function(e){
        e.preventDefault();
        var ind = $(this).index('.conNav li a');
        //$('.conNav li a').removeClass();

        //$('section').hide();
        //var ind = $(this).index();
        //$('section:eq('+ind+')').show();

      $('.conav_box>a strong').text(ins[ind]);
      $('.conNav').slideUp('fast');
      $('.conav_box>a').find('span').text('expand_more');
      nav_on=false;
    });
  };

      if(scrSize <= 640){
        screen_size2();  //최초함수호출
      }

      var onoff2=false; 
      $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      scrSize = $(window).width();

      if(scrSize <= 640 && onoff2==false){
        screen_size2();
        $('.conNav').hide();
        //$('.conNav li a').removeClass();
        onoff2=true;
      }else if(scrSize > 640){
        $('.conNav').show();
        // $('.conNav li a:eq('+ind+')').addClass('tab_a1');
        $('.conNav li a').off('click');
        onoff2=false;
      };
  });