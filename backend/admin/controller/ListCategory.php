<?php
    if(isset($_GET['action'])){
        $action=$_GET['action'];

    }
    else{
        $action='';
    }
    switch($action){
        case '':{
            require_once('view/ListCategory.php');
            break;
        }
        case 'add':{
            if(isset($_POST['']))
        }
    }
  ?>  