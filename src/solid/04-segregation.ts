//Este archivo es una violacion al principio de ISP

interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}

class Tucan implements Bird {
  public fly(): void {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Hummingbird {
  public fly(): void {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Ostrich implements Bird {
  public fly(): void {
    throw new Error("Esta ave no vuela.");
  }
  public eat(): void {}
  public run(): void {}
  public swim() {}
}

class Pinguin implements Bird {
  public fly(): void {
    throw new Error("Esta ave no vuela.");
  }
  public eat(): void {}
  public run(): void {}
  public swim() {}
}
