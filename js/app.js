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

function llenar_img(){
  i=i+1
  var numero = 0;
  var imagen;
  $(".elemento").draggable({disable: true});
  if(i<8){
    for (var j=1; j<8; j++){
      if($(".col"+j).children("img:nth-child("+i")").html()==null){
        numero = Math.foor(Math.randon() * 4) + 1;
        imagen = "image/"+numero+".png";
        $(".col-"+j).prepend("<img src="+imagen+"class='elemento'/>").css("justify-content","flex")
      }
    }
  }
  if(i==8){
    clearInterval(intervalo); //desactiva la funcion llenar_img
    eliminar=setInterval(function(){eliminarhorver()},150) //activa la funcion eliminarhorver
  }
}
