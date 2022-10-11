document.querySelector('.optacabamentos').addEventListener('change', function () {
  if(document.getElementById("gola1").checked || document.getElementById("vista1").checked){
  document.querySelector('.sempunho').style.display = "block";}
  else{document.querySelector('.sempunho').style.display = "none";}
});

document.getElementById('sempunho').addEventListener("click", function(){
  if(document.getElementById("gola1").checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#00000000");
document.querySelector("#costas4").style.visibility = "hidden";
document.querySelector("#frente5").style.visibility = "hidden";
document.getElementById('ge').style.backgroundColor = "#fff";
  }if(document.getElementById("vista1").checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#00000000");
    document.querySelector("#costas5").style.visibility = "hidden";
    document.querySelector("#frente4").style.visibility = "hidden";
    document.getElementById('VD').style.backgroundColor = "#fff";
  }
})


document.getElementById('base').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Base";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Base"; }
});
document.getElementById('botoes').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Manga";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Manga"; }
});
document.getElementById('gola1').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores do Punho";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores do Punho"; }
});
document.getElementById('gola2').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Barra";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Barra"; }
});
document.getElementById('punho').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Gola";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Gola"; }
});
document.getElementById('vista1').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores do Capuz";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores do Capuz"; }
});

let cor1 = document.querySelector('#cor1').value;
let cor2 = document.querySelector('#cor2').value;
let cor3 = document.querySelector('#cor3').value;
let cor4 = document.querySelector('#cor4').value;
let cor5 = document.querySelector('#cor5').value;
let cor6 = document.querySelector('#cor6').value;
let cor7 = document.querySelector('#cor7').value;
let cor8 = document.querySelector('#cor8').value;
let cor9 = document.querySelector('#cor9').value;
let cor10 = document.querySelector('#cor10').value;
let cor11 = document.querySelector('#cor11').value;
let cor12 = document.querySelector('#cor12').value;
let cor13 = document.querySelector('#cor13').value;
let cor14 = document.querySelector('#cor14').value;
let cor15 = document.querySelector('#cor15').value;
let cor16 = document.querySelector('#cor16').value;
let cor17 = document.querySelector('#cor17').value;
let cor18 = document.querySelector('#cor18').value;
let cor19 = document.querySelector('#cor19').value;
let cor20 = document.querySelector('#cor20').value;
let cor21 = document.querySelector('#cor21').value;
let cor22 = document.querySelector('#cor22').value;
let cor23 = document.querySelector('#cor23').value;
let cor24 = document.querySelector('#cor24').value;
let cor25 = document.querySelector('#cor25').value;
let cor26 = document.querySelector('#cor26').value;
let cor27 = document.querySelector('#cor27').value;
let cor28 = document.querySelector('#cor28').value;
let cor29 = document.querySelector('#cor29').value;
let cor30 = document.querySelector('#cor30').value;
let cor31 = document.querySelector('#cor31').value;
let cor32 = document.querySelector('#cor32').value;
let cor33 = document.querySelector('#cor33').value;
let cor34 = document.querySelector('#cor34').value;
let cor35 = document.querySelector('#cor35').value;
let cor36 = document.querySelector('#cor36').value;
let cor37 = document.querySelector('#cor37').value;
let cor38 = document.querySelector('#cor38').value;
let cor39 = document.querySelector('#cor39').value;
let cor40 = document.querySelector('#cor40').value;
let cor41 = document.querySelector('#cor41').value;
let cor42 = document.querySelector('#cor42').value;
let cor43 = document.querySelector('#cor43').value;
let cor44 = document.querySelector('#cor44').value;

document.getElementById('cor1').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor1);
    document.getElementById('CB').style.backgroundColor = cor1;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor1);
    document.getElementById('BT').style.backgroundColor = cor1;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor1);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor1;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor1);
    document.getElementById('gi').style.backgroundColor = cor1;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor1);
    document.getElementById('PU').style.backgroundColor = cor1;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor1);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor1;
  }
});
document.getElementById('cor2').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor2);
    document.getElementById('CB').style.backgroundColor = cor2;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor2);
    document.getElementById('BT').style.backgroundColor = cor2;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor2);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor2;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor2);
    document.getElementById('gi').style.backgroundColor = cor2;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor2);
    document.getElementById('PU').style.backgroundColor = cor2;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor2);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor2;
  }
});
document.getElementById('cor3').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor3);
    document.getElementById('CB').style.backgroundColor = cor3;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor3);
    document.getElementById('BT').style.backgroundColor = cor3;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor3);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor3;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor3);
    document.getElementById('gi').style.backgroundColor = cor3;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor3);
    document.getElementById('PU').style.backgroundColor = cor3;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor3);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor3;
  }
});
document.getElementById('cor4').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor4);
    document.getElementById('CB').style.backgroundColor = cor4;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor4);
    document.getElementById('BT').style.backgroundColor = cor4;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor4);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor4;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor4);
    document.getElementById('gi').style.backgroundColor = cor4;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor4);
    document.getElementById('PU').style.backgroundColor = cor4;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor4);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor4;
  }
});
document.getElementById('cor5').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor5);
    document.getElementById('CB').style.backgroundColor = cor5;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor5);
    document.getElementById('BT').style.backgroundColor = cor5;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor5);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor5;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor5);
    document.getElementById('gi').style.backgroundColor = cor5;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor5);
    document.getElementById('PU').style.backgroundColor = cor5;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor5);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor5;
  }
});
document.getElementById('cor6').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor6);
    document.getElementById('CB').style.backgroundColor = cor6;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor6);
    document.getElementById('BT').style.backgroundColor = cor6;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor6);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor6;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor6);
    document.getElementById('gi').style.backgroundColor = cor6;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor6);
    document.getElementById('PU').style.backgroundColor = cor6;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor6);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor6;
  }
});
document.getElementById('cor7').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor7);
    document.getElementById('CB').style.backgroundColor = cor7;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor7);
    document.getElementById('BT').style.backgroundColor = cor7;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor7);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor7;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor7);
    document.getElementById('gi').style.backgroundColor = cor7;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor7);
    document.getElementById('PU').style.backgroundColor = cor7;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor7);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor7;
  }
});
document.getElementById('cor8').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor8);
    document.getElementById('CB').style.backgroundColor = cor8;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor8);
    document.getElementById('BT').style.backgroundColor = cor8;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor8);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor8;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor8);
    document.getElementById('gi').style.backgroundColor = cor8;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor8);
    document.getElementById('PU').style.backgroundColor = cor8;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor8);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor8;
  }
});
document.getElementById('cor9').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor9);
    document.getElementById('CB').style.backgroundColor = cor9;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor9);
    document.getElementById('BT').style.backgroundColor = cor9;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor9);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor9;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor9);
    document.getElementById('gi').style.backgroundColor = cor9;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor9);
    document.getElementById('PU').style.backgroundColor = cor9;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor9);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor9;
  }
});
document.getElementById('cor10').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor10);
    document.getElementById('CB').style.backgroundColor = cor10;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor10);
    document.getElementById('BT').style.backgroundColor = cor10;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor10);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor10;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor10);
    document.getElementById('gi').style.backgroundColor = cor10;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor10);
    document.getElementById('PU').style.backgroundColor = cor10;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor10);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor10;
  }
});
document.getElementById('cor11').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor11);
    document.getElementById('CB').style.backgroundColor = cor11;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor11);
    document.getElementById('BT').style.backgroundColor = cor11;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor11);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor11;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor11);
    document.getElementById('gi').style.backgroundColor = cor11;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor11);
    document.getElementById('PU').style.backgroundColor = cor11;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor11);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor11;
  }
});
document.getElementById('cor12').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor12);
    document.getElementById('CB').style.backgroundColor = cor12;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor12);
    document.getElementById('BT').style.backgroundColor = cor12;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor12);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor12;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor12);
    document.getElementById('gi').style.backgroundColor = cor12;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor12);
    document.getElementById('PU').style.backgroundColor = cor12;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor12);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor12;
  }
});
document.getElementById('cor13').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor13);
    document.getElementById('CB').style.backgroundColor = cor13;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor13);
    document.getElementById('BT').style.backgroundColor = cor13;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor13);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor13;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor13);
    document.getElementById('gi').style.backgroundColor = cor13;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor13);
    document.getElementById('PU').style.backgroundColor = cor13;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor13);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor13;
  }
});
document.getElementById('cor14').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor14);
    document.getElementById('CB').style.backgroundColor = cor14;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor14);
    document.getElementById('BT').style.backgroundColor = cor14;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor14);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor14;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor14);
    document.getElementById('gi').style.backgroundColor = cor14;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor14);
    document.getElementById('PU').style.backgroundColor = cor14;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor14);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor14;
  }
});
document.getElementById('cor15').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor15);
    document.getElementById('CB').style.backgroundColor = cor15;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor15);
    document.getElementById('BT').style.backgroundColor = cor15;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor15);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor15;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor15);
    document.getElementById('gi').style.backgroundColor = cor15;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor15);
    document.getElementById('PU').style.backgroundColor = cor15;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor15);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor15;
  }
});
document.getElementById('cor16').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor16);
    document.getElementById('CB').style.backgroundColor = cor16;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor16);
    document.getElementById('BT').style.backgroundColor = cor16;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor16);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor16;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor16);
    document.getElementById('gi').style.backgroundColor = cor16;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor16);
    document.getElementById('PU').style.backgroundColor = cor16;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor16);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor16;
  }
});
document.getElementById('cor17').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor17);
    document.getElementById('CB').style.backgroundColor = cor17;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor17);
    document.getElementById('BT').style.backgroundColor = cor17;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor17);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor17;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor17);
    document.getElementById('gi').style.backgroundColor = cor17;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor17);
    document.getElementById('PU').style.backgroundColor = cor17;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor17);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor17;
  }
});
document.getElementById('cor18').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor18);
    document.getElementById('CB').style.backgroundColor = cor18;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor18);
    document.getElementById('BT').style.backgroundColor = cor18;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor18);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor18;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor18);
    document.getElementById('gi').style.backgroundColor = cor18;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor18);
    document.getElementById('PU').style.backgroundColor = cor18;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor18);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor18;
  }
});
document.getElementById('cor19').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor19);
    document.getElementById('CB').style.backgroundColor = cor19;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor19);
    document.getElementById('BT').style.backgroundColor = cor19;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor19);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor19;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor19);
    document.getElementById('gi').style.backgroundColor = cor19;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor19);
    document.getElementById('PU').style.backgroundColor = cor19;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor19);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor19;
  }
});
document.getElementById('cor20').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor20);
    document.getElementById('CB').style.backgroundColor = cor20;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor20);
    document.getElementById('BT').style.backgroundColor = cor20;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor20);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor20;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor20);
    document.getElementById('gi').style.backgroundColor = cor20;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor20);
    document.getElementById('PU').style.backgroundColor = cor20;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor20);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor20;
  }
});
document.getElementById('cor21').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor21);
    document.getElementById('CB').style.backgroundColor = cor21;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor21);
    document.getElementById('BT').style.backgroundColor = cor21;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor21);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor21;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor21);
    document.getElementById('gi').style.backgroundColor = cor21;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor21);
    document.getElementById('PU').style.backgroundColor = cor21;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor21);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor21;
  }
});
document.getElementById('cor22').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor22);
    document.getElementById('CB').style.backgroundColor = cor22;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor22);
    document.getElementById('BT').style.backgroundColor = cor22;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor22);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor22;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor22);
    document.getElementById('gi').style.backgroundColor = cor22;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor22);
    document.getElementById('PU').style.backgroundColor = cor22;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor22);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor22;
  }
});
document.getElementById('cor23').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor23);
    document.getElementById('CB').style.backgroundColor = cor23;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor23);
    document.getElementById('BT').style.backgroundColor = cor23;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor23);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor23;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor23);
    document.getElementById('gi').style.backgroundColor = cor23;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor23);
    document.getElementById('PU').style.backgroundColor = cor23;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor23);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor23;
  }
});
document.getElementById('cor24').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor24);
    document.getElementById('CB').style.backgroundColor = cor24;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor24);
    document.getElementById('BT').style.backgroundColor = cor24;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor24);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor24;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor24);
    document.getElementById('gi').style.backgroundColor = cor24;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor24);
    document.getElementById('PU').style.backgroundColor = cor24;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor24);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor24;
  }
});
document.getElementById('cor25').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor25);
    document.getElementById('CB').style.backgroundColor = cor25;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor25);
    document.getElementById('BT').style.backgroundColor = cor25;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor25);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor25;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor25);
    document.getElementById('gi').style.backgroundColor = cor25;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor25);
    document.getElementById('PU').style.backgroundColor = cor25;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor25);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor25;
  }
});
document.getElementById('cor26').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor26);
    document.getElementById('CB').style.backgroundColor = cor26;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor26);
    document.getElementById('BT').style.backgroundColor = cor26;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor26);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor26;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor26);
    document.getElementById('gi').style.backgroundColor = cor26;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor26);
    document.getElementById('PU').style.backgroundColor = cor26;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor26);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor26;
  }
});
document.getElementById('cor27').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor27);
    document.getElementById('CB').style.backgroundColor = cor27;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor27);
    document.getElementById('BT').style.backgroundColor = cor27;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor27);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor27;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor27);
    document.getElementById('gi').style.backgroundColor = cor27;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor27);
    document.getElementById('PU').style.backgroundColor = cor27;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor27);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor27;
  }
});
document.getElementById('cor28').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor28);
    document.getElementById('CB').style.backgroundColor = cor28;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor28);
    document.getElementById('BT').style.backgroundColor = cor28;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor28);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor28;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor28);
    document.getElementById('gi').style.backgroundColor = cor28;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor28);
    document.getElementById('PU').style.backgroundColor = cor28;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor28);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor28;
  }
});
document.getElementById('cor29').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor29);
    document.getElementById('CB').style.backgroundColor = cor29;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor29);
    document.getElementById('BT').style.backgroundColor = cor29;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor29);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor29;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor29);
    document.getElementById('gi').style.backgroundColor = cor29;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor29);
    document.getElementById('PU').style.backgroundColor = cor29;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor29);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor29;
  }
});
document.getElementById('cor30').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor30);
    document.getElementById('CB').style.backgroundColor = cor30;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor30);
    document.getElementById('BT').style.backgroundColor = cor30;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor30);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor30;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor30);
    document.getElementById('gi').style.backgroundColor = cor30;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor30);
    document.getElementById('PU').style.backgroundColor = cor30;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor30);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor30;
  }
});
document.getElementById('cor31').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor31);
    document.getElementById('CB').style.backgroundColor = cor31;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor31);
    document.getElementById('BT').style.backgroundColor = cor31;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor31);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor31;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor31);
    document.getElementById('gi').style.backgroundColor = cor31;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor31);
    document.getElementById('PU').style.backgroundColor = cor31;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor31);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor31;
  }
});
document.getElementById('cor32').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor32);
    document.getElementById('CB').style.backgroundColor = cor32;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor32);
    document.getElementById('BT').style.backgroundColor = cor32;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor32);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor32;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor32);
    document.getElementById('gi').style.backgroundColor = cor32;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor32);
    document.getElementById('PU').style.backgroundColor = cor32;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor32);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor32;
  }
});
document.getElementById('cor33').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor33);
    document.getElementById('CB').style.backgroundColor = cor33;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor33);
    document.getElementById('BT').style.backgroundColor = cor33;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor33);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor33;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor33);
    document.getElementById('gi').style.backgroundColor = cor33;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor33);
    document.getElementById('PU').style.backgroundColor = cor33;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor33);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor33;
  }
});
document.getElementById('cor34').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor34);
    document.getElementById('CB').style.backgroundColor = cor34;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor34);
    document.getElementById('BT').style.backgroundColor = cor34;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor34);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor34;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor34);
    document.getElementById('gi').style.backgroundColor = cor34;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor34);
    document.getElementById('PU').style.backgroundColor = cor34;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor34);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor34;
  }
});
document.getElementById('cor35').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor35);
    document.getElementById('CB').style.backgroundColor = cor35;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor35);
    document.getElementById('BT').style.backgroundColor = cor35;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor35);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor35;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor35);
    document.getElementById('gi').style.backgroundColor = cor35;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor35);
    document.getElementById('PU').style.backgroundColor = cor35;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor35);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor35;
  }
});
document.getElementById('cor36').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor36);
    document.getElementById('CB').style.backgroundColor = cor36;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor36);
    document.getElementById('BT').style.backgroundColor = cor36;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor36);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor36;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor36);
    document.getElementById('gi').style.backgroundColor = cor36;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor36);
    document.getElementById('PU').style.backgroundColor = cor36;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor36);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor36;
  }
});
document.getElementById('cor37').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor37);
    document.getElementById('CB').style.backgroundColor = cor37;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor37);
    document.getElementById('BT').style.backgroundColor = cor37;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor37);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor37;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor37);
    document.getElementById('gi').style.backgroundColor = cor37;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor37);
    document.getElementById('PU').style.backgroundColor = cor37;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor37);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor37;
  }
});
document.getElementById('cor38').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor38);
    document.getElementById('CB').style.backgroundColor = cor38;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor38);
    document.getElementById('BT').style.backgroundColor = cor38;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor38);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor38;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor38);
    document.getElementById('gi').style.backgroundColor = cor38;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor38);
    document.getElementById('PU').style.backgroundColor = cor38;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor38);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor38;
  }
});
document.getElementById('cor39').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor39);
    document.getElementById('CB').style.backgroundColor = cor39;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor39);
    document.getElementById('BT').style.backgroundColor = cor39;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor39);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor39;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor39);
    document.getElementById('gi').style.backgroundColor = cor39;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor39);
    document.getElementById('PU').style.backgroundColor = cor39;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor39);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor39;
  }
});
document.getElementById('cor40').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor40);
    document.getElementById('CB').style.backgroundColor = cor40;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor40);
    document.getElementById('BT').style.backgroundColor = cor40;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor40);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor40;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor40);
    document.getElementById('gi').style.backgroundColor = cor40;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor40);
    document.getElementById('PU').style.backgroundColor = cor40;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor40);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor40;
  }
});
document.getElementById('cor41').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor41);
    document.getElementById('CB').style.backgroundColor = cor41;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor41);
    document.getElementById('BT').style.backgroundColor = cor41;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor41);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor41;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor41);
    document.getElementById('gi').style.backgroundColor = cor41;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor41);
    document.getElementById('PU').style.backgroundColor = cor41;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor41);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor41;
  }
});
document.getElementById('cor42').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor42);
    document.getElementById('CB').style.backgroundColor = cor42;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor42);
    document.getElementById('BT').style.backgroundColor = cor42;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor42);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor42;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor42);
    document.getElementById('gi').style.backgroundColor = cor42;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor42);
    document.getElementById('PU').style.backgroundColor = cor42;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor42);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor42;
  }
});
document.getElementById('cor43').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor43);
    document.getElementById('CB').style.backgroundColor = cor43;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor43);
    document.getElementById('BT').style.backgroundColor = cor43;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor43);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor43;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor43);
    document.getElementById('gi').style.backgroundColor = cor43;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor43);
    document.getElementById('PU').style.backgroundColor = cor43;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor43);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor43;
  }
});
document.getElementById('cor44').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor44);
    document.getElementById('CB').style.backgroundColor = cor44;
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = cor44);
    document.getElementById('BT').style.backgroundColor = cor44;
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = cor44);
    document.getElementById('frente5').style.visibility = "visible";
    document.getElementById('costas4').style.visibility = "visible";
    document.getElementById('ge').style.backgroundColor = cor44;
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = cor44);
    document.getElementById('gi').style.backgroundColor = cor44;
  }if(document.getElementById('punho').checked){
    document.querySelectorAll(".corte").forEach(v => v.style.fill = cor44);
    document.getElementById('PU').style.backgroundColor = cor44;
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = cor44);
    document.getElementById('frente4').style.visibility = "visible";
    document.getElementById('costas5').style.visibility = "visible";
    document.getElementById('VD').style.backgroundColor = cor44;
  }
});
  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('cobreziper').style.visibility = "visible";
      document.getElementById('frente6').style.visibility = "visible";
    }else {
      document.getElementById('cobreziper').style.visibility = "hidden";
      document.getElementById('frente6').style.visibility = "hidden";
    }
  });


  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Polo.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.visibility = "visible";
    }else {
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.visibility = "hidden" ;
    }
  });


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";

    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpunho').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorpeitilho1').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpeitilho2').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorfriso').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

