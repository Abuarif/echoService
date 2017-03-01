<?php

/*
 * Collect all Details from Angular HTTP Request.
 */

header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$echo = $request->echo;

echo '{"echo":"' . $echo . '"}';