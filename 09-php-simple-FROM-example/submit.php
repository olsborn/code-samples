<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, GET');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = $_SERVER['HTTP_HOST'] ?? '';
$referer = $_SERVER['HTTP_REFERER'] ?? '';
$requestMethod = $_SERVER["REQUEST_METHOD"] ?? '';

if (!empty($origin) && strpos($origin, $host) !== false) {
    header("Access-Control-Allow-Origin: $origin");
}

if ($requestMethod  === "POST") {

    if (empty($referer) || strpos($referer, $host) === false) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid request source'
        ]);
        exit;
    }

    if (VALIDATE_CAPTCHA) {
        $recaptcha_response = $_POST['g-recaptcha-response'] ?? '';

        $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . RECAPTCHA_SECRET_KEY . "&response={$recaptcha_response}");
        $response = json_decode($verify);

        if (!$response->success) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Please complete the reCAPTCHA verification'
            ]);
            exit;
        }
    }

    $full_name = htmlspecialchars(trim($_POST['full_name'] ?? ''));
    $company_name = htmlspecialchars(trim($_POST['company_name'] ?? ''));
    $phone_number = htmlspecialchars(trim($_POST['phone_number'] ?? ''));
    $email_address = htmlspecialchars(trim($_POST['email_address'] ?? ''));
    $project_description = htmlspecialchars(trim($_POST['project_description'] ?? ''));

    $project_type = implode(", ", $_POST['project_type'] ?? []);
    $integrations = implode(", ", $_POST['integrations'] ?? []);
    $erp_systems = implode(", ", $_POST['erp_systems'] ?? []);
    $additional_features = implode(", ", $_POST['additional_features'] ?? []);

    // server-side validation, DB INSERT etc... goes here

    echo json_encode([
        'status' => 'success',
        'message' => 'Thank you for contacting us! Your message has been sent. We will get back to you shortly.'
    ]);
}
