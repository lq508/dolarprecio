

class Modal{


  constructor(){

   this.boton = document.querySelector(".button");
    this.Evento();


  }

  Evento(){

    this.boton.addEventListener("click", ()=>{

      let modal = document.querySelector(".modal");
      modal.classList.add("active");
      let precio = document.querySelector(".precio");

    });

  }



}


let objeto_modal = new Modal();
