<?php
$fio = $_POST['user_name'];
$email = $_POST['user_email'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("igor.82bv@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: https://igor82bv.github.io/CV \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>
