<?php
  require_once '../datos/Conexion.clase.php';
  class Sesion extends Conexion {
    private $id;
    private $calculo;

    public function getId()
    {
        return $this->id;
    }
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    public function getCalculo()
    {
       return $this->calculo;
    }
    public function setCalculo($calculo)
    {
        $this->calculo = $calculo;
        return $this;
    }

    public function listar()
    {
        $sql = "SELECT * FROM sesion ORDER BY id DESC";
        $sentencia = $this->dblink->prepare($sql);
        $sentencia->execute();
        return $sentencia->fetchAll(PDO::FETCH_OBJ);
    }

    public function mostrar($id)
    {
        $sql = "SELECT * FROM sesion WHERE id";

        $sentencia = $this->dblink->prepare($sql);
        $sentencia->bindParam(":id", $id);
        $sentencia->execute();
        //return $sentencia->fetch_Object();
        return $sentencia->fetchAll(PDO::FETCH_OBJ);
    }

    public function agregar()
    {
        $sql = "insert into sesion(calculo) values(:calculo);";

        $sentencia = $this->dblink->prepare($sql);
        $calculo = $this->getCalculo();
        $sentencia->bindParam(":calculo", $calculo);

        $resultado = $sentencia->execute();

        if ($resultado != 1){
            //ocurrio un error al insertar
            return FALSE;
        }

        //Insertó correctamente
        return TRUE;

    }
  }
?>
