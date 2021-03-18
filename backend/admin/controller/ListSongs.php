<?php

    if ( isset($_GET['action']) ){
            $action = $_GET['action'];
    }else{
            $action = '';
    }
    
    switch ($action) {
        case 'them':{
            require_once(__DIR__.'/../view/song/AddSong.php');
            break;
        }
    
        case '':{
            require_once(__DIR__.'/../view/song/ListSongs.php');
            break;
        }
    
        default:{
            require_once(__DIR__.'/../view/404-page.php');
            break;
        }
               
    }
     


?>