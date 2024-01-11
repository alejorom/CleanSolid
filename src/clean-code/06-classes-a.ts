(() => {

    type Gender = 'M'|'F';
    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name:string, gender: Gender, birthdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    const newPerson = new Person('Yotas', 'M', new Date('2013-05-23'));
    console.log ({newPerson});

})();
