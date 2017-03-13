<?php
 // error_reporting(E_ALL);

	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$findout = $_POST['findout'];
	$enquiry = $_POST['enquiry'];
	$from = 'From: ACC <kate.frappell@manageflitter.com>';
	$to = 'kate.frappell@gmail.com';
	$subject = 'Enquiry';
	$captcha = $_POST['g-recaptcha-response'];

	$body = "From: "+$name+"\n E-Mail: "+$email+"\n Phone: "+$phone+"\n Findout: "+$findout+"\n Enquiry: "+$enquiry+"\n";

	if (!empty($name) && !empty($email) && !empty($phone) && !empty($enquiry) && !empty($captcha)) {
		$secretKey = "Put your secret key here";
        $ip = $_SERVER['REMOTE_ADDR'];
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
        $responseKeys = json_decode($response,true);

		if(intval($responseKeys["success"]) === 1) {
			if (mail ($to, $subject, $body, $from)){
				echo '<p>Your message has been sent!</p>';
			} else {
				echo'<p>Something went wrong! Try again.</p>';
			}
		} else {
		 	echo '<p>You answered the anti-spam question incorrectly!</p>';
		}
	} else {
		echo '<p>You must fill the required fields.</p>';
	}

?>



<!-- http://tangledindesign.com/how-to-create-a-contact-form-using-html5-css3-and-php/ -->