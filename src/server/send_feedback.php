<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $lastname = $_POST["lastname"];
    $firstname = $_POST["firstname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];

    // Путь для сохранения загруженного файла
    $uploadDirectory = "uploads/";

    // Имя загруженного файла
    $filename = basename($_FILES["file"]["name"]);
    $targetPath = $uploadDirectory . $filename;

    // Перемещение загруженного файла в указанную директорию
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetPath)) {
        $attachment = $targetPath;
    } else {
        $attachment = null;
    }

    // Адрес, на который будет отправлено письмо
    $to = "example@example.com";

    // Тема письма
    $subject = "Обратная связь";

    // Текст письма
    $message = "Фамилия: $lastname\n";
    $message .= "Имя: $firstname\n";
    $message .= "Телефон: $phone\n";
    $message .= "Email: $email\n";

    // Заголовки письма
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=" . uniqid("boundary") . "\r\n";

    // Если есть прикрепленный файл, добавляем его в письмо
    if ($attachment) {
        $file = fopen($attachment, "rb");
        $contents = fread($file, filesize($attachment));
        fclose($file);

        $encodedAttachment = chunk_split(base64_encode($contents));

        $message .= "--" . uniqid("boundary") . "\r\n";
        $message .= "Content-Type: application/octet-stream; name=" . $filename . "\r\n";
        $message .= "Content-Disposition: attachment; filename=" . $filename . "\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n";
        $message .= "\r\n";
        $message .= $encodedAttachment . "\r\n";
    }

    // Отправка письма
    $result = mail($to, $subject, $message, $headers);

    if ($result) {
        // Письмо успешно отправлено
        echo "Спасибо! Ваша обратная связь успешно отправлена.";
    } else {
        // Ошибка при отправке письма
        echo "Извините, произошла ошибка при отправке вашей обратной связи.";
    }
}
?>