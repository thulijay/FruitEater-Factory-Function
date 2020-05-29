function FruitEater(){
  
  var applesTotal = 0;
  var pearsTotal = 0;

  function eatApple(){
    applesTotal++;
  }

  function applesEaten(){
    return applesTotal;
  }

  function eatPear(){
    pearsTotal++;
  }

  function pearsEaten(){
    return pearsTotal;
  }

  return{
    applesEaten,
    eatApple,
    pearsEaten,
    eatPear
  }
}
