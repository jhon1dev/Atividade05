var telefoneInput = document.getElementById("tel");
var emailInput = document.getElementById("email");

const dddsBrasil = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97", "98", "99"];

telefoneInput.addEventListener("input", function(event) {

  var telefone = telefoneInput.value.replace(/\D/g, '');
  
  var ddd = telefone.slice(0, 2);

  if (!dddsBrasil.includes(ddd)) {
    telefoneInput.setCustomValidity("Por favor, insira um DDD válido do Brasil.");
  } else {
    telefoneInput.setCustomValidity("");
  }

  var telefoneFormatado = '(' + ddd + ') ' + telefone.slice(2, 3) + ' ' + telefone.slice(3, 7) + '-' + telefone.slice(7, 11);
  telefoneInput.value = telefoneFormatado;
});

emailInput.addEventListener("input", function(event){
  if(!(emailInput.value.includes(".") && emailInput.value.includes("@"))){
    emailInput.setCustomValidity("Por favor, insira um email válido.");
  } 
  else{
    emailInput.setCustomValidity("");
  }
});

function validCheckbox(event){
  var boxInputs = document.querySelectorAll('input[type=checkbox]:checked'); // devolve um array de inputs do tipo checkbox com todas as checkbox que forem selecionadas.

  if(boxInputs.length > 3){
    event.target.checked = false;
  }
}
