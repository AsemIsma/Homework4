function preob (celsius) {
  farin1 = celsius * 9 / 5 + 32;


  console.log(celsius + '\u00B0C' + ' = ' + farin1 + '\u00B0F' );


}

preob(76);
preob(768);
preob(76822);

function preobras (farin) {

  celsius1 = (farin - 32) * 5 / 9;


  console.log(farin + '\u00B0F'  + ' = ' + celsius1 + '\u00B0C' );

}

preobras(3);
preobras(30);
preobras(300);