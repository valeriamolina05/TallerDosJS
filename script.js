function cambiarEstilos(){
    const pagina = document.querySelector('#pagina')
    const contenedor = document.querySelector('#contenedor')
    const izquierda = document.querySelector('#izquierda')
    const primero = document.querySelector('#primero')
    const redes = document.querySelector('#redes')
    const p = document.querySelector('#parrafo')
    const campos = document.querySelector('#campos')
    const camposinput = document.querySelector('#campos input')
    const boton2 = document.querySelector('#boton2')
    const derecha = document.querySelector('#derecha')
    const segundo = document.querySelector('#segundo')
    const forgot = document.querySelector('#forgot')
   
  
    pagina.classList.add('pagina')
    contenedor.classList.add('contenedor')
    izquierda.classList.add('izquierda');
    primero.classList.add('primero')
    redes.classList.add('redes')
    p.classList.add('parrafo')
    campos.classList.add('campos')
    camposinput.classList.add('input')
    derecha.classList.add('derecha')
    segundo.classList.add('segundo')
    forgot.classList.add('forgot')
    boton2.classList.add('boton2')
  
  }