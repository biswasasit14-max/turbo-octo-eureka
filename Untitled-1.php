<?php
$response = $_POST['g-recaptcha-response'];
$secret = "YOUR_SECRET_KEY";
$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
$captcha_success = json_decode($verify);
if ($captcha_success->success) {
    echo "CAPTCHA verified!";
} else {
    echo "CAPTCHA failed!";
}
?>
