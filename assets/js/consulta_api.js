


class Consulta_api{


  constructor(){
    this.precio = document.querySelector(".precio");
    this.Consulta();

  }


  Consulta(){


        fetch("https://api.exchangerate-api.com/v4/latest/USD").then((valor)=>{

          valor.json().then((valor)=>{
            console.log();
            this.precio.innerHTML=valor.rates.VES + " BsD";
          });
        });



  }


}

let objeto_consulta_dolar = new Consulta_api();
