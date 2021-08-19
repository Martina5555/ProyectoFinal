<?php
$name = $_POST['nombreApellido'];
$mail = $_POST['mail'];
$phone = $_POST['tel'];
$provincia = $_POST['provincia'];
$novedades = $_POST['novedades'];
$promos = $_POST['promos'];
$sosCliente = $_POST['cliente'];


$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Es de: " . $provincia . " \r\n";
$message .= "Es: " . $sosCliente . " \r\n";
$message .= "Quiere recibir: " . $novedades . " \r\n";
$message .= "Quiere recibir: " . $promos . " \r\n";

$para = 'mangata.tuecotienda@gmail.com';
$asunto = 'SUSCRIPTOR NEWSLETTER';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
