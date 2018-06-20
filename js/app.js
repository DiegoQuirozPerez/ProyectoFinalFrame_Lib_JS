var i, intervalo, tiempo, nuevos_dulces;
var rbn, rbv, valor_nuevo_d;
var lenco=["","","","","","",""];
var lenres=["","","","","","",""];
var maximo, matriz, eliminar;
var contador = 0, cnc1 = 0;
var espera = 0;
var score = 0;
var mov = 0;
var min = 2;
var seg = 0;

function cambio_color(elemento){
  $(".main-titulo").animate({
    color: "white",
  }, 2000);
  cambio_color_ant();
}

function cambio_color_ant(elemento){
  $("main-titulo").animate({
    color: "#DCFF0E";
  },2000);
  cambio_color();
}

$(function(){
  cambio_color_ant();
});
var seg = 0, min = 2;
function timer(){
  if(seg!= 0){
    seg = seg-1;
  }
  if (seg == 0){
    if (min == 0){
      clearInterval(eliminar);
      clearInterval(nuevos_dulces);
      clearInterval(intervalo);
      clearInterval(tiempo);
      $(".panel-tablero").hide("drop", "slow", "callback");
      $(".time").hide();
    }
    seg = 59;
    min = min-1;
  }
  $("#timer").html("0"+min+":"+seg)
}

function callback(){
  $(".panel-score").animate({width:'100%'}, 4000);
}
