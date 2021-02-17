
const person: {
    name: string;
    age: number;
    hobbies: string [];
    role: 
} = {
    name: "Helen",
    age: 42,
    hobbies: ["Cooking", "Walking"],
    role: [2, "author"]
};
//______________________________________________________________________

enum Role {ADMIN = "Admin", READ_ONLY = "ReadOnly", AUTHOR = "Author"};

const person1 = {
    name: "Eva",
    age: 37,
    hobbies: ["Writing", "Walking", "Gardening"],
    role: Role.AUTHOR
}

let favoriteActivities: string [];
favoriteActivities = ["Writing"];

console.log(person1.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

switch (person1.role) {
    case "Admin": 
        console.log("you are Admin");
        break;

    case "Author":
        console.log('you are Author');
        break;

    case "ReadOnly":
        console.log("you can only read here");
        break;
}