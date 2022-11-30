(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(movieId: string) {
    console.log({ id: movieId });
  }

  function getActorBiographyById(ActorId: string) {
    console.log({ ActorId });
  }

  // Crear una película

  interface movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ cast, description, rating, title }: movie) {
    console.log({ title, description, rating, cast });
  }

  function createActor(birthdate: Date, fullName: string): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
