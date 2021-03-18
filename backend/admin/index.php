<?php 

    if ( isset($_GET['viewpage']) ){
        $viewpage = $_GET['viewpage'];
    }else{
        $viewpage = '';
    }

    switch ($viewpage) {
        case '':{
            require_once('Home.php');
            break;
        }

        case 'list-songs':{
            require_once('controller/ListSongs.php');
            break;
        }

        

        default:{
            require_once('404-page.php');
            break;
        }
            
    }

    



?>