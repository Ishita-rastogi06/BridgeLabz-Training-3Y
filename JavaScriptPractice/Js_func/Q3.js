// Q3: Demonstrate the difference between arrow and normal functions

// Object with an arrow function method
const user = {
    name: "Ishita",

    showName: () => {
        console.log("Arrow Function:", this.name);
    }
};

// Calling the arrow function
user.showName();

// Fixing it by using a normal function
const fixedUser = {
    name: "Ishita",

    showName: function () {
        console.log("Normal Function:", this.name);
    }
};

// Calling the normal function
fixedUser.showName();