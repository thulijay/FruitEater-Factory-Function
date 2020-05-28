function FruitEater(){
  
  var applesTotal = 0;
  var pearsTotal = 0;

  function applesEaten(){
    applesTotal++;
  }

  function eatApple(){
    return applesTotal;
  }

  function pearsEaten(){
    pearsTotal++;
  }

  function eatPear(){
    return pearsTotal;
  }

  return{
    applesEaten,
    eatApple,
    pearsEaten,
    eatPear
  }
}
