<?php

if (
    isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['pol']) && isset($_POST['godine']) &&
    isset($_POST['adresa']) && isset($_POST['grad'])
) {
    $data = array(
        'ime' => $_POST['ime'], 'prezime' => $_POST['prezime'], 'pol' => $_POST['pol'],
        'godine' => $_POST['godine'], 'adresa' => $_POST['adresa'], 'grad' => $_POST['grad']
    );
    $response = array('success' => true, 'data' => $data);
} else {
    $response = array('success' => false);
}

echo json_encode($response);
