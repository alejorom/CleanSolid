(() => {

    type Gender = 'M'|'F';
    class Person {
        constructor(public name:string, public gender: Gender, public birthdate: Date) { }
    }

    const newPerson = new Person('Yotas', 'M', new Date('2013-05-23'));
    console.log ({newPerson});

})();
