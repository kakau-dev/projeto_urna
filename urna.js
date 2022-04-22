
   //import <elementos html>
   let keyboard = document.querySelector(".box-for-key")
   let number = document.getElementById("number")
   let name_part = document.getElementById('name-part')
   let lable = document.getElementById("lable")
   let p = document.getElementById("p")
   let pp = document.getElementById("pp")
   let n1= document.querySelector("#nulo1")
   let n2= document.querySelector("#nulo")
   let nome_candidato = document.getElementById("nome_candidato")
   let description = document.querySelector(".description")
   let tipo_candidato = document.querySelector(".sei-la")
   let label_prefeito=document.getElementById("label-prefeito")
   let label_vice=document.getElementById("label-vice")
   let vice = document.getElementById("vice")
   let namem_vice=document.getElementById("name_vice")
   //<elementos html>
   let K=""
   let active_prefeito=false;
   let invoca_tela_prefeito=false;
   let nuber_for_control=5
   let teste=5
   let part=["98","91","93","94",]
   let siglapart=["pp","pl","pt","pll"]
   let vereador=["98000","91000","94000"]
   let candidatos=[{nome:"joão",image:"candidato1.jpg",voto:0}]
   let value=0
   let voto_validado;  
   let valor=0
   let number_for_control=5;
   keyboard.addEventListener("click",(event)=>{input_sequence(event.target.id)})
   function input_sequence(v){
      if(value!=number_for_control){ 
        value++
    document.getElementById("v"+value).innerHTML=v
    K = K.concat(v)
    console.log(K)
   }
   if(K.length==2){
     if(part.indexOf(K)!=-1){
       name_part.innerHTML=siglapart[part.indexOf(K)]
       pp.style.display="flex"
       description.style.display="block"
       p.style.color="black"
       invoca_tela_prefeito=true;
    }else{
       n1.style.display="block"
       n2.style.display="block"
       description.style.display="block"
    }
   if(invoca_tela_prefeito&&active_prefeito==true){
     console.log("meu iogurte grosso")
    }
   }
   if(K.length==5){
     if(vereador.indexOf(K)!=-1){ 
       lable.style.color="black"
       nome_candidato.innerHTML=candidatos[vereador.indexOf(K)]["nome"]
       document.getElementById("image-vereador").style.display="inline-block"
       document.getElementById("image-vereador").src=candidatos[vereador.indexOf(K)]["image"] 
       voto_validado = true;
       }
      }
    }
   function corrigir(){
     valor=0; 
     value=0;
     K=""    while(valor<5){
       valor++
       let ent ="v"+valor
        document.getElementById(ent).innerHTML=""
     }
     voto_validado=false;
     none_element()
   }
   function prefeito(){
    let controle=0
    number_for_control=2
    value=0
    K=""
    let t = 5 
    tipo_candidato.innerHTML="Prefeito"
    while(controle<3){
      document.getElementById("v"+t).style.display="none"   
      controle++  
      t=t-=1
    }
    while(valor<5){
      valor++
      let ent ="v"+valor
      document.getElementById(ent).innerHTML=""
    }
    voto_validado = false;
    active_prefeito=true
    none_element()
    }
   function none_element(){
     n2.style.display="none"
     n1.style.display="none"
     description.style.display="none" 
     pp.style.display="none"
     nome_candidato.innerHTML=""
     lable.style.color="#dcdcdc"
     document.getElementById("image-vereador").style.display="none"
     p.style.color="#dcdcdc"
    } 
    label_prefeito.style.display="none"
    label_vice.style.display="none"
    vice.style.display="none"
    function screen_prefeito(){
     pp.style.marginBottom="20px"
     pp.style.marginTop="20px"
     namem_vice.style.display="flex"
    }
    screen_prefeito()

