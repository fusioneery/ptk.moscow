<?php
    $mail_to = 'Ptk140912@inbox.ru';
 
    $name = $_GET['name'];
	$desc = $_GET['description'];
	$phone = $_GET['phone'];
    $mail_from = 'consult@ptk.moscow';
	
    $subject = 'Новая заявка с сайта от ' . $name;
 
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
	$headers .= "X-Mailer: PHP/" . phpversion();
	$headers .= 'From: ' . $mail_from . "\r\n";
    $headers .= 'Reply-To: ' . $mail_from . "\r\n";
	
	$message = 'Новая заявка с сайта ptk.moscow!<br /><br /><b>Имя: ' . $name . '<br />Телефон: ' . $phone . '<br />Комментарий: ' . $desc . '</b>';
 
    $mail_sent = mail($mail_to, $subject, $message, $headers);
 
    if ($mail_sent == true){ ?>
        <script language="javascript" type="text/javascript">
		window.location = 'index.html';
         </script>
    <?php } else { ?>
    <script language="javascript" type="text/javascript">
        alert('Сообщение не было отправлено. Пожалуйста, сообщите об этом мне в ВК: vk.com/abramov_videotmb');
		window.location = 'index.html';
    </script>
    <?php
    }
?>