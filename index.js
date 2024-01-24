      let numero1 = 4;
      let numero2 = 10;

      let resultado = numero1 + numero2;
      let resultado2 = numero1 * numero2;
      let resultado3 = numero1 / numero2;
      let resultado4 = numero1 - numero2;

      console.log(resultado);
      console.log(resultado2);
      console.log(resultado3);
      console.log(resultado4);


      

      let n1;
      let n2;
      let signo;
      let siguiente = false;
      
      let clearDisplay ;

      let result1;


      
      
      
      function cero(){
        if(siguiente == false){
            n1 = 0;
        }else{
            n2 = 0;
        }
      }

      


      function uno(){
        if(siguiente == false){
            n1 = 1;
        }else{
            n2 = 1;
        }
         
      }
      function seis(){
        if(siguiente == false){
            n1 = 6;
        }else{
            n2 = 6;
        }
      }
      function nueve(){
        if(siguiente == false){
            n1 = 9;
        }else{
            n2 = 9;
        }
      }
      function ocho(){
        if(siguiente == false){
            n1 = 8;
        }else{
            n2 = 8;
        }
      }
      function siete(){
        if(siguiente == false){
            n1 = 7;
        }else{
            n2 = 7;
        }
      }
      function cinco(){
        if(siguiente == false){
            n1 = 5;

            let mitexto = document.getElementById("valor");
            mitexto.innerText = n1;
        }else{
            n2 = 5;
        }
      }
      function cuatro(){
        if(siguiente == false){
            n1 = 4;
        }else{
            n2 = 4;
        }
      }
      function tres(){
        if(siguiente == false){
            n1 = 3;
        }else{
            n2 = 3;
        }
      }
      function dos(){
        if(siguiente == false){
            n1 = 2;
        }else{
            n2 = 2;
        }
      }
      function nueve(){
        if(siguiente == false){
            n1 = 9;
        }else{
            n2 = 9;
            let mivalor = document.getElementById("valor");
            mivalor.innerText = mivalor.innerText + n2;
        }
      }


      function suma(){
         signo = "+";
         siguiente = true;

         let mivalor = document.getElementById("valor");
         mivalor.innerText = mivalor.innerText + signo;
      }

      function resta(){
        signo = "-";
        siguiente = true;
      }
      function multiplicacion(){
        signo = "*";
        siguiente = true;
      }
      function division(){
        signo = "/";
        siguiente = true;
      }
      

      function igual(){
        if(signo =='+'){
           result1 = n1+n2;
        }
      
        if(signo == '-'){
            result1 = n1 - n2;
        }
        if(signo == '*'){
            result1 = n1 * n2;
        }
        if(signo == '/'){
            result1 = n1 / n2;
        }
        
        let mispan = document.getElementById("valor");
        mispan.innerText = result1;
        siguiente = false;
      }


      function ac(){
        let mivalor = document.getElementById("valor");
        mivalor.innerText = "0";
        siguiente = false;
      }



  