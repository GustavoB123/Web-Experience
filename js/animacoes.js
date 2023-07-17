AOS.init();

document.querySelector(".menu-abrir").onclick = function(){
    document.documentElement.classList.add("menu-ativo");
    
    document.documentElement.classList.remove("menu-abrir");
}
  
  
  
  
document.querySelector(".menu-fechar").onclick = function(){
    document.documentElement.classList.remove("menu-ativo")
}


window.onscroll = function(){

    var top = window. scrollY || document.documentElement.scrollTop;


    console.log(top);

    if(top > 550){
    console.log("adiciona meu menu fixo");

    document.getElementById('topo-fixo').classList.add('menu-fixo');

    }
    else{
      console.log("remover meu menu fixo");

      document.getElementById('topo-fixo').classList.remove('menu-fixo');
    }

  }
