<?php 
$zip = new ZipArchive;
$res = $zip->open('todezip.zip');
if ($res === TRUE) {
  $zip->extractTo('.');
  $zip->close();
  echo 'dezippe !';
} else {
  echo 'non dezippe !';
}
?>