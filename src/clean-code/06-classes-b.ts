//this file is like a parch of the file 06-classes-a.ts
(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;
    //js tiene una forma larga y una corta de delcarar clases.
    //Lo que esta comentado es la forma larga.
    constructor({ birthDate, gender, name }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastAccess: Date;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public role: string;
    constructor({
      email,
      role,
      lastAccess,
      name,
      gender,
      birthDate,
    }: UserProps) {
      super({ name, gender, birthDate });
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      //...
      return true;
    }
  }

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastAccess: Date;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;
    constructor({
      birthDate,
      email,
      gender,
      lastAccess,
      name,
      lastOpenFolder,
      workingDirectory,
      role,
    }: UserSettingsProps) {
      super({ email, role, lastAccess, name, gender, birthDate });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date("2000-07-08"),
    email: "anderson@anderson.com",
    gender: "M",
    lastAccess: new Date(),
    lastOpenFolder: "./user/dir",
    name: "Anderson",
    role: "admin",
    workingDirectory: "./user",
  });
  console.log(userSettings);

  //const newUser = new User()
})();
