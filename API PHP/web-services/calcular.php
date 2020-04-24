<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    if (
        (!isset( $_POST["num1"] )) ||
        (!isset( $_POST["num2"] )) ||
        (!isset( $_POST["ope"] ))
       )
    {
      $respuesta = array(
          "estado"=>"error"
      );

        echo json_encode($respuesta);
        exit();
    }

    $numero1 = $_POST["num1"];
    $numero2 = $_POST["num2"];
    $operacion = $_POST["ope"];

    if ($operacion == "suma") {
      $resultado = $numero1 + $numero2;
      echo json_encode($resultado);
    }
    if ($operacion == "resta") {
      $resultado = $numero1 - $numero2;
      echo json_encode($resultado);
    }
    if ($operacion == "divide") {
      $resultado = $numero1 / $numero2;
      echo json_encode($resultado);
    }
    if ($operacion == "multi") {
      $resultado = $numero1 * $numero2;
      echo json_encode($resultado);
    }

?>
