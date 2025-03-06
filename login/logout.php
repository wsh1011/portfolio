<?
    session_start();
    
    unset($_SESSION['userid']);   //세션변수 삭제
    unset($_SESSION['username']);
    unset($_SESSION['usernick']);
    unset($_SESSION['userlevel']);

    echo("
        <script>
            //alert('로그아웃 되었습니다.');
            location.href = '../index.html'; 
        </script>
    ");
?>