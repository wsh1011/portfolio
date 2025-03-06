<?
    session_start();
    //$userid = $_SESSION['userid'];
    //$username = $_SESSION['username'];
    //$usernick = $_SESSION['usernick'];
    //$userlevel = $_SESSION['userlevel'];  를 불러옴

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<meta charset="utf-8">
<?
    include "../lib/dbconn.php"; 

    $sql = "delete from member  where id='$userid'";
    mysqli_query( $connect, $sql);  

    //세션변수 삭제
    unset($_SESSION['userid']);  
    unset($_SESSION['username']);
    unset($_SESSION['usernick']);
    unset($_SESSION['userlevel']);

    mysqli_close($connect);                // DB 연결 끊기
    echo "
        <script>
            window.alert('회원탈퇴되었습니다.');
            location.href = '../index.html';
        </script>
    ";
?>