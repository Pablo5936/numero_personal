const MENSAJE = document.getElementById('resultado')

let numeroPersonal = 0

function reducirNumero(numero) {
  let numeroReducido = numero
  console.log('Número inicial:', numeroReducido)
  const maestros = [11, 22, 33]
  while (numeroReducido > 9 && !maestros.includes(numeroReducido)) {
    let suma = 0
    let digitos = numeroReducido.toString().split('')
    //convierte los números a String y los incluye en un array
    for (let i = 0; i < digitos.length; i++) {
      suma += parseInt(digitos[i])
    }
    numeroReducido = suma
  }
  return numeroReducido
}

function calcular() {
  const FECHA = document.getElementById('fecha-nacimiento')
  const fechaNacimiento = new Date(FECHA.value)
  if (isNaN(fechaNacimiento)) {
    MENSAJE.innerHTML = 'Por favor, ingresa una fecha válida.'
    return
  }
  let diaNacimiento = fechaNacimiento.getDate()
  numeroPersonal = reducirNumero(diaNacimiento)
  MENSAJE.innerHTML = `Tu número personal es: ${numeroPersonal}`
}

function mostrarSignificado() {
  const EXPLICACION = document.getElementById('explicacion')
  
  // Validar que se haya calculado un número personal válido
  if (numeroPersonal === 0 || numeroPersonal === null || numeroPersonal === undefined) {
    MENSAJE.innerHTML = 'Por favor, calcula primero tu número personal.'
    EXPLICACION.innerHTML = '' // Limpiar explicación anterior
    return
  }
  
  // Buscar el significado del número personal
  const resultado = significados.find((s) => s.numero === numeroPersonal)
  
  if (resultado) {
    EXPLICACION.innerHTML = `<strong>Significado del número ${numeroPersonal}:</strong><br>${resultado.descripcion}`
    MENSAJE.innerHTML = `Tu número personal es: ${numeroPersonal}` // Mantener el resultado visible
  } else {
    EXPLICACION.innerHTML = `No se encontró el significado para el número ${numeroPersonal}.`
    console.error(`Número ${numeroPersonal} no encontrado en el array de significados`)
  }
}
