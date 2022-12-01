(() => {
  type Gender = "M" | "F";

  class Person {
    /*     public name: string;
    public gender: Gender;
    public birthDate: Date; */
    //js tiene una forma larga y una corta de delcarar clases.
    //Lo que esta comentado es la forma larga.
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {
      /*       this.name = name;
      this.gender = gender;
      this.birthDate = birthDate; */
    }
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
    }

    checkCredentials() {
      //...
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      name: string,
      gender: Gender,
      birthday: Date,
      role: string,
      lastAccess: Date
    ) {
      super(email, role, lastAccess, name, gender, birthday);
    }
  }

  const userSettings = new UserSettings(
    "./user",
    "./user",
    "anderson@anderson.com",
    "Anderson",
    "M",
    new Date(),
    "admin",
    new Date("2000-07-08")
  );
  console.log({ userSettings });

  //const newUser = new User()
})();
