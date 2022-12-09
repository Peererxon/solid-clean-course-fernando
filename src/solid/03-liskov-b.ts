export abstract class Vehiculo {
  /*   getNumberOfSeats(): number {
    throw Error("Method not implemented");
  } */

  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  /*   getNumberOfTeslaSeats() {
    return this.numberOfSeats;
  } */

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }

  /*   getNumberOfAudiSeats() {
    return this.numberOfSeats;
  } */
}

export class Toyota extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  /*   getNumberOfToyotaSeats() {
    return this.numberOfSeats;
  } */

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }
  //importante resaltar que estos metodos "unicos" de la clase puede ser que sean necesarios
  //en este caso no lo es, es redundante pero se dejo como ejemplo de esto
  getNumberOfHondaSeats() {
    return this.numberOfSeats;
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Ford extends Vehiculo {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}
