import React from "react";


function Testimonio (){
  return (

      <div className="contenedor-testimonio">
        <img
          className='imagen-testimonio'
          src={require('../componentes/imagenes/playa.jpg')}
     />
          
        
        <div className='contenedor-texto-textimonio'>
            <p className='nombre-testimonio'>Emma tokisha</p>
            <p className='cargo-testimonio'>bombero</p>
            <p className='texto-testimonio'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
        
        </div>
      </div>
  )
}

export default Testimonio;
