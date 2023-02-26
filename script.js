function calc() {
  let n1 = document.getElementById("primeiranota").value
  let n2 = document.getElementById("segundanota").value
  let n3 = document.getElementById("terceiranota").value
  let n4 = document.getElementById("quartanota").value
  if (n1 == "") {
    alert("Preencha a Peimeira Nota!")
  } else if (n2 == "") {
    alert("Preencha a Segunda Nota!")
  } else if (n3 == "") {
    alert("Preencha a Terceira Nota!")
  } else if (n4 == "") {
    alert("Preencha a Quarta Nota!")
  }else{
    Calcular()
  }

}

function Calcular() {
  let n1 = document.getElementById("primeiranota").value
  let n2 = document.getElementById("segundanota").value
  let n3 = document.getElementById("terceiranota").value
  let n4 = document.getElementById("quartanota").value
  let v1 = parseFloat(n1)
  let v2 = parseFloat(n2)
  let v3 = parseFloat(n3)
  let v4 = parseFloat(n4)
  let total = (v1 + v2 + v3 + v4) / 4
  let descricao = "Sua média foi: "
  let media = document.getElementById("resultado")
  media.innerHTML = descricao + total

}
function reset() {
  let media = document.getElementById("resultado")
  document.getElementById("primeiranota").value = "";
  document.getElementById("segundanota").value = "";
  document.getElementById("terceiranota").value = "";
  document.getElementById("quartanota").value = "";
  media.innerHTML = "";
}


