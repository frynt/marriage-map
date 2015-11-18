<?php 
$zip = new ZipArchive;
$res = $zip->open('marriage-map.zip');
if ($res === TRUE) {
  $zip->extractTo('.');
  $zip->close();
  echo 'dezippe !';
} else {
  echo 'non dezippe !';
}
?>