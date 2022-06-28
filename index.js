// Your code here


class Cat {
    constructor(Sasha, female) {
        this.name = Sasha;
        this.sex = female;
    }
    speak() {
        return `${this.name} says meow!`;
    }
    // speak()
};


class Dog {
    constructor(Rufio, male) {
        this.name = Rufio;
        this.sex = male;
    }
    speak() {
        return `${this.name} says woof!`
    }

}

class Bird {
    constructor(Pablo, male) {
        this.name = Pablo;
        this.sex = male;
    }
    speak() {
        if (this.sex == 'male') {
            return `It's me! ${this.name}, the parrot!`
        }
        else if(this.sex === 'female'){
            return `${this.name} says squawk!`
        }
   
         }}

        //  class bird2 {
        //     constructor(Mable, female) {
        //         this.name = Mable;
        //         this.sex = female;
        //     }
        //     speak() {
        //             return `${this.name} says squawk!`
           
        //          }
                
        //         }

     
