
let inputAdultos=document.getElementsByClassName("adultos")
let inputCriancas=document.getElementsByClassName("criancas")
let inputDuracao=document.getElementsByClassName("duracao")


let resultado=document.getElementById("resultado")


function calcular(){
  console.log("calculando...")

let adultos = inputAdultos[0].value
let  criancas =inputCriancas[0].value
let duracao=inputDuracao[0].value

  let qntTotalcarne = carnePP(duracao) * adultos + (carnePP(duracao)/ 2 * criancas)
  let qntTotalcerveja = cervejaPP(duracao) * adultos 
  let qntTotalbebida= bebidaPP(duracao) * adultos + (bebidaPP(duracao)/ 2 * criancas)
   
  resultado.innerHTML=`<p>${qntTotalcarne/1000} kg de carne </p>`
  resultado.innerHTML += `<p>${qntTotalcerveja/1000} L de cerveja</p>`
  resultado.innerHTML += `<p>${qntTotalbebida/1000} L de bebida (refrigerante ou agua)</p>`
function carnePP(duração){
  if (duração>=6){
    return 650;
  }
else {
  return 400
}
}

function cervejaPP(duração){
  if (duração>=6){
    return 2000;
  }
else {
  return 1200
}
}

function bebidaPP(duração){
  if (duração>=6){
    return 1500;
  }
else {
  return 1000
}
}
}
