//Este archivo es una violacion al principio de ISP

/* interface Bird {
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
} */

// Implementando ISP
interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): number;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {
    return 80;
  }
  public eat() {}
}

class Hummingbird implements Bird, FlyingBird {
  public fly() {
    return 100;
  }
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  public eat(): void {}
  public run(): void {}
}

class Pinguin implements Bird, SwimmerBird {
  public eat(): void {}
  public swim() {}
}
