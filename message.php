<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){ // if email and message field is not empty
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // if user entered email is valid
            $receiver = "mman35230@gmail.com"; // email receiver email address
            $subject = "From: $name <$email>"; // subject of the email .
            $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
            $sender = "From: $email"; // sender email
            if(mail($receiver, $subject, $body, $sender)){ // mail() is a inbuilt php function to send mail
                echo "Your message has been sent!";
            }else{
                echo "Sorry, failed  to send your message!";
            }
        }else{
            echo "Enter a valid email address!";
        }
    }else{
        echo "Email field is requered!";
    }
?>
