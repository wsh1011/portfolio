<?
    session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    //$num
    //$page
    //$liststyle  넘어옴



    include "../lib/dbconn.php";

    $sql = "delete from greet where num = $num";
    mysqli_query( $connect, $sql);

    mysqli_close($connect); 

    echo "
        <script>
            location.href = 'list.php?page=$page&liststyle=$liststyle';
        </script>
    ";
?>