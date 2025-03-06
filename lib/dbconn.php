<?
    $connect=mysqli_connect( "localhost", "wsh", "1234", "wsh_db") or  
        die( "SQL server에 연결할 수 없습니다.");

        mysqli_select_db($connect , "wsh_db");
?>