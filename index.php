<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Experience</title>

    <link rel="stylesheet" href="css/reset.css">

    <link rel="stylesheet" type="text/css" href="css/slick.css"/>

    <link rel="stylesheet" type="text/css" href="css/slick-theme.css"/>

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <link rel="stylesheet" href="css/estilo.css ">


</head>

<body>

    <?php require_once('conteudo/topo.php'); ?>

   <main>

   <?php require_once('conteudo/banner.php') ?>

   <?php require_once('conteudo/servico.php') ?>

   <?php require_once('conteudo/portfolio.php') ?>
   
   <?php require_once('conteudo/depoimento.php') ?>
   
   </main>

   <footer>

   <?php require_once('conteudo/rodape.php') ?>
   <?php require_once('conteudo/direitosReservados.php') ?>
   

   </footer>

 <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

   <script src="js/slick.js"></script>

   <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

   <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


  <script src="js/animacoes.js"></script>


</body>
</html>