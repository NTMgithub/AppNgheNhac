<?php
     if ( isset($_GET['action']) ){
        $action = $_GET['action'];
    }else{
        $action = '';
    }

    switch ($action) {
        case 'them':{
            require_once('AddSong.php');
            break;
        }

     


        default:{
            require_once('404-page.php');
            break;
        }
            
    }
    
    



?>