<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadatak 4</title>
    <link href="style.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>

<body>
    <nav class="col-md-12">
        <ul>
            <li><a href="index.html">Zadatak 1</a></li>
            <li><a href="zadatak2.html">Zadatak 2</a></li>
            <li><a href="zadatak3.html">Zadatak 3</a></li>
            <li><a href="#" class="active">Zadatak 4</a></li>
            <li><a href="zadatak5.html">Zadatak 5</a></li>
        </ul>
    </nav>
    <h1 class="text-center">Php funkcija</h1>
    <main class="container">
        <?php


        $local_dir = __DIR__;
        $current = "";

        if (isset($_GET['folder'])) {
            $current = $current .  $_GET['folder'];
            print_array($local_dir . $current, $current);
        }else{
            print_array($local_dir,$current);
        }

        function print_array($local_dir,$current) {
            
            $root_folder = "http://localhost\zadaci";
            $array = array_values(array_diff(scandir($local_dir), array('.', '..')));
            $length = count($array);
            
            if( $length === 0){
                echo "<h6>Prazan folder!</h6>";
                return;
            }

            echo "<h6>Folder: $local_dir</h6>";
            echo '<pre>';
            for ($i = 0; $i < $length; $i++) {
                $path = $local_dir . DIRECTORY_SEPARATOR . $array[$i];
                $entity = $current . DIRECTORY_SEPARATOR . $array[$i];
                if (is_dir($path)) {
                    echo "<a href='?folder=$entity'>/$array[$i]</a>\n";
                } else {
                    $file = $root_folder . $entity;
                    echo "<a href='$file' target='_blank'>/$array[$i]</a>\n";
                }
            }
            echo '</pre>';
        }

        function scan_dir($dir) {
            return array_values(array_diff(scandir($dir), array('.', '..')));
        }
        ?>

    </main>

</body>

</html>