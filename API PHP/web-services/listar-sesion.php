<?php
      header('Access-Control-Allow-Origin: *');
      header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
      // header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
      // header("Allow: GET, POST, OPTIONS, PUT, DELETE");
      require_once '../negocio/Sesion.clase.php';
      $objSesion = new Sesion();
      $resultado = $objSesion->listar();
      echo json_encode($resultado);
?>
