<?php
$name = $_POST['nombreApellido'];
$mail = $_POST['mail'];
$phone = $_POST['tel'];
$provincia = $_POST['provincia'];
$tipoVenta = $_POST['venta'];
$sosCliente = $_POST['cliente'];
$razon = $_POST['consultaContacto'];


$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Es de: " . $provincia . " \r\n";
$message .= "Consulta por venta: " . $tipoVenta . " \r\n";
$message .= "Es: " . $sosCliente . " \r\n";
$message .= "Se comunica por: " . $razon . " \r\n";

$para = 'mangata.tuecotienda@gmail.com';
$asunto = 'SOLICITUD DE CONTACTO WEB';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
