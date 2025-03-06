<?
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	$ripple = "encyclopedia_ripple";

    /*
    table=$table (get)
    num=$item_num (본글 글번호) **** (get)
    
    ripple_num=$ripple_num(리플 글번호) (get)
    */

    include "../lib/dbconn.php";

    $sql = "delete from $ripple where num=$ripple_num";
    mysqli_query( $connect, $sql);
    mysqli_close($connect);

    echo "
        <script>
            location.href = 'view.php?table=$table&num=$num&liststyle=$liststyle';
        </script>
    ";
?>