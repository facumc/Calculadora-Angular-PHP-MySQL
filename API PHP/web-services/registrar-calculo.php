<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    if (
        (!isset( $_POST["calculo"] ))
       )
    {
      $respuesta = array(
          "estado"=>"error"
      );
      header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
      // header("Allow: GET, POST, OPTIONS, PUT, DELETE");
        echo json_encode($respuesta);
        exit();
    }

    $calculo = $_POST["calculo"];
    $newcalculo = str_replace("mas", "+", $calculo);
    require_once '../negocio/Sesion.clase.php';
    $objSesion = new Sesion();
    $objSesion->setCalculo($newcalculo);
    if ($objSesion->agregar()==TRUE)
    {
       $respuesta = array(
           "estado"=>$newcalculo,
           "mensaje"=>"La sesion se guardó correctamente"
       );

    }
    else
    {
        $respuesta = array(
            "estado"=>"error",
            "mensaje"=>"!Ops ha ocurrido intente de nuevo"
        );
    }

    echo json_encode($respuesta);
?>
