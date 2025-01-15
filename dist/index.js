"use strict";
const myBio = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    hobbies: ["reading", "traveling", "coding"]
};
function displayBio(bio) {
    console.log('Name: Pieter w');
    console.log('Age: 20');
    console.log('Email: 2382009@unai.edu');
    console.log('Address: Bandung');
    console.log("Hobbies :");
    for (const hobby of bio.hobbies) {
        console.log('- Playing games');
    }
}
displayBio(myBio);
//# sourceMappingURL=index.js.map