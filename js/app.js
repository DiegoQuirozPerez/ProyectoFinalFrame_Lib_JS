//punto 1. cambia el color del titulo y alterna
function colorBlink(selector) {
  $(selector).animate({
    opacity: '1',
  }, {
    step: function () {
      $(this).css('color', 'white');
    },
    queue: true
  })
  .animate({
    opacity: '1'
  }, {
    step: function () {
      $(this).css('color', 'yellow');
    },
    queue: true
  }, 600)
  .delay(1000)
  .animate({
    opacity: '1'
  }, {
    step: function () {
      $(this).css('color', 'white');
    },
    queue: true
  })
  .animate({
    opacity: '1'
  }, {
    step: function () {
      $(this).css('color', 'yellow');
      colorBlink('h1.main-titulo');
    },
    queue: true
  });
}
//punto 2. funcion para generar números aleatorios
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// obtiene filas de dulces o columas
function giveCandyArrays(arrayType, index) {
  var candyCol1 = $('.col-1').children();
  var candyCol2 = $('.col-2').children();
  var candyCol3 = $('.col-3').children();
  var candyCol4 = $('.col-4').children();
  var candyCol5 = $('.col-5').children();
  var candyCol6 = $('.col-6').children();
  var candyCol7 = $('.col-7').children();
  var candyColumns = $([candyCol1, candyCol2, candyCol3, candyCol4, candyCol5, candyCol6, candyCol7]);
  if (typeof index === 'number') {
    var candyRow = $([candyCol1.eq(index), candyCol2.eq(index), candyCol3.eq(index), candyCol4.eq(index), candyCol5.eq(index), candyCol6.eq(index), candyCol7.eq(index)]);
  } else {
    index = '';
  }
  if (arrayType === 'columns') {
    return candyColumns;
  } else if (arrayType === 'rows' && index !== '') {
    return candyRow;
  }
}

// arreglos de filas
function candyRows(index) {
  var candyRow = giveCandyArrays('rows', index);
  return candyRow;
}

// arreglos de colunmnas
function candyColumns(index) {
  var candyColumn = giveCandyArrays('columns');
  return candyColumn[index];
}
