AOS.init();

document.querySelector(".menu-abrir").onclick = function(){
  document.documentElement.classList.add("menu-ativo");
  
  document.documentElement.classList.remove("menu-abrir");
<<<<<<< HEAD
}


document.querySelector(".menu-fechar").onclick = function(){
  document.documentElement.classList.remove("menu-ativo")
}


=======
}


document.querySelector(".menu-fechar").onclick = function(){
  document.documentElement.classList.remove("menu-ativo")
}


var typingeffect = new Typed(".digitando", {
  strings: ["Conectados"],
  loop: true,
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1500,
});
  
>>>>>>> 916e5a373f7ecaae3e8366630f074647899c6e7b

window.onscroll = function(){

    var top = window. scrollY || document.documentElement.scrollTop;


    //console.log(top);

    if(top > 550){
<<<<<<< HEAD
    //console.log("adiciona meu menu fixo");
    document.getElementById('topo-fixo').classList.add('menu-fixo');
    }
    else{
      //console.log("remover meu menu fixo");
=======
    console.log("adiciona meu menu fixo");
    document.getElementById('topo-fixo').classList.add('menu-fixo');
    }
    else{
      console.log("remover meu menu fixo");
>>>>>>> 916e5a373f7ecaae3e8366630f074647899c6e7b
      document.getElementById('topo-fixo').classList.remove('menu-fixo');
    }
  }

<<<<<<< HEAD
  


=======
>>>>>>> 916e5a373f7ecaae3e8366630f074647899c6e7b


  $('.comentario').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:2500,
    dots:true,
  });



  const openModalButton = document.querySelector("#open-modal");
  const closeModalButton = document.querySelector("#close-modal");
  const modal = document.querySelector("#modal");
  const fade = document.querySelector("#fade");

  const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
    };

  [openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });



<<<<<<< HEAD
=======
  

  // function formWhats(){

  //   var form = document.getElementById('formContato');
  
  
  //   var nome = '*Nome: *' + document.getElementById('nome').value;
  
  //   var tel = '*Fone: *' + document.getElementById('tel').value;
  
  //   var mens = '*Mensagem: *' + document.getElementById('mens').value;
  
  //   var email = '*Email: *' +document.getElementById("email").value;
  
  
  //   var agencia = 'Agência TIPI';
  //   var assunto = 'Mensagem do site!';
  
  
    
    
  //   var numFone = '5511947396478'
  //   var quebradelinha = '%0A';
    
  //   if(tel == ''){
  //     alert ("O campo do celular é obrigatório");
  //     return;
  //   }else{
  //     tel = '*Fone: *' + document.getElementById('tel').value;
  //   }
    
  //   window.open('https://api.whatsapp.com/send?phone=' +
  //   numFone + '&text=' + 
  //   assunto + ' - ' + agencia +quebradelinha + quebradelinha+
  //   nome + quebradelinha +
  //   email + quebradelinha +
  //   tel + quebradelinha +
  //   mens, '_blank');

  
  
    /* mensagem do site 
    
    nome: gustavo hermogenes
    Email: gustavohermogenes1@gmail.com
    fone: 11 99999-9999
    mensagem: llllllll */

>>>>>>> 916e5a373f7ecaae3e8366630f074647899c6e7b
    function formWhats(){

      var form = document.getElementById('modal-body');

<<<<<<< HEAD
      var mens = 'Proposta: ' + document.getElementById('mens').value;
=======
      var mens = '*Mensagem: *' + document.getElementById('mens').value;
>>>>>>> 916e5a373f7ecaae3e8366630f074647899c6e7b

      var numFone = '5511947396478'

      if(mens == ''){
        alert ("O campo de mensagem é obrigatório");
        return;
      }else{
<<<<<<< HEAD
        mens = 'Proposta: ' + document.getElementById('mens').value;

        window.open('https://api.whatsapp.com/send?phone=' +
        numFone + '&text=' +
        mens);
      }
    }
 

    


=======
        mens = '*Mensagem: *' + document.getElementById('mens').value;

        window.open('https://api.whatsapp.com/send?phone=' +
        numFone + '&text=' +
        mens + '_blank');
      }
    }
 
>>>>>>> 916e5a373f7ecaae3e8366630f074647899c6e7b
