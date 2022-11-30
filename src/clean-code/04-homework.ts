(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const redFruits = ["manzana", "cereza", "ciruela"];
    return redFruits.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  type FruitColor = "red" | "purple" | "yellow";
  type Fruit = {
    [key in FruitColor]: string[];
  };
  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColor: Fruit = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["uva", "moras"],
    };

    if (color in fruitsByColor) {
      return fruitsByColor[color];
    }

    throw Error("the color must be: red, yellow, purple");
    //los dos estan bien
    switch (color) {
      case "red":
        return fruitsByColor.red;
      case "yellow":
        return fruitsByColor.yellow;
      case "purple":
        return fruitsByColor.purple;
      default:
        throw Error("the color must be: red, yellow, purple");
    }
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    /*     if (isFirstStepWorking === true) {
      if (isSecondStepWorking === true) {
        if (isThirdStepWorking === true) {
          if (isFourthStepWorking === true) {
            return "Working properly!";
          } else {
            return "Fourth step broken.";
          }
        } else {
          return "Third step broken.";
        }
      } else {
        return "Second step broken.";
      }
    } else {
      return "First step broken.";
    } */

    if (!isFourthStepWorking) return "Fourth step broken.";
    if (!isThirdStepWorking) return "Third step broken.";
    if (!isSecondStepWorking) return "Second step broken.";
    if (!isFirstStepWorking) return "First step broken.";
    return "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
