<?php

$marca = $_POST['marca'];
$contacto = $_POST['contacto'];
$informacion = $_POST['informacion'];
$formato = $_POST['formato'];


$destinatorio = "revistadontiburon@gmail.com";
$asunto = "¡HA LLEGADO UNA NUEVA SOLICITUD DE ANUNCIO PARA LA REVISTA DON TIBURÓN!"

$carta = "Nombre de su empresa/marca: $marca \n";
$carta .= "Su número/correo de contacto: $contacto \n";
$carta .= "De qué va su empresa/marca: $informacion \n";
$carta .= "El formato que quiere del anuncio: $formato \n";

mail($destinatorio, $asunto, $carta);
header('Location:index.html')

?>