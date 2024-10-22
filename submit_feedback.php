<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recommend = $_POST['recommend'];
    $satisfaction = $_POST['satisfaction'];
    $suggestions = $_POST['suggestions'];
    $email = $_POST['email'];

    $to = 'karhakozian.frej@gmail.com';
    $subject = 'Feedback from ' . $email;
    $message = "Recommendation: $recommend\n";
    $message .= "Satisfaction: $satisfaction\n";
    $message .= "Suggestions: $suggestions\n";
    $message .= "User Email: $email\n";

    $headers = 'From: ' . $email;

    if (mail($to, $subject, $message, $headers)) {
        echo 'Feedback sent successfully.';
    } else {
        echo 'Failed to send feedback. Please try again later.';
    }
}
?>
