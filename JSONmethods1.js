class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  const developer = new Person(1, 'Mario', 'Rossi', 25);
  const strDeveloper=JSON.stringify(developer);
  const jsonDev=JSON.parse(strDeveloper);
  console.log(jsonDev);
  // Print developer as JSON object