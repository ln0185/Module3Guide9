// Create an array of Person objects
var people = [
    {
        name: "Tally Winslow",
        dateOfBirth: new Date("1992-02-19"),
        children: 3,
        country: "Brazil",
        knowsHowToProgram: true,
    },
    {
        name: "Sherry Playdon",
        dateOfBirth: new Date("1997-11-26"),
        children: 5,
        country: "Belgium",
        knowsHowToProgram: true,
    },
    {
        name: "Catherina Rosenstengel",
        dateOfBirth: new Date("2001-06-11"),
        children: 4,
        country: "Panama",
        knowsHowToProgram: true,
    },
    {
        name: "Ralina Cornhill",
        dateOfBirth: new Date("1998-12-30"),
        children: 1,
        country: "China",
        knowsHowToProgram: false,
    },
    {
        name: "Susanna Gelardi",
        dateOfBirth: new Date("1987-05-10"),
        children: 0,
        country: "Philippines",
        knowsHowToProgram: false,
    },
];
// 1. Is the first person older than the last person?
if (people[0].dateOfBirth < people[4].dateOfBirth) {
    console.log("The first person is older than the last person.");
}
else {
    console.log("The first person is not older than the last person.");
}
// 2. Does the 2nd person have the same amount of kids as the 3rd?
if (people[1].children === people[2].children) { ///=== means strictly equal
    console.log("The 2nd person has the same number of kids as the 3rd person.");
}
else {
    console.log("The 2nd person does not have the same number of kids as the 3rd person.");
}
// 2a. Does the 2nd person have more kids than the 3rd? 
if (people[1].children > people[2].children) {
    console.log("The 2nd person has more kids than the 3rd person.");
}
else {
    console.log("The 2nd person less kids than the 3rd person.");
}
// 3. Do the 1st person and the 4th person both know how to program?
if (people[0].knowsHowToProgram && people[3].knowsHowToProgram) {
    console.log("Yay!");
}
else {
    console.log("LMGTFY");
}
// 4. Check the nationality of the 2nd person
switch (people[1].country) {
    case "Iceland":
        console.log("Hæ");
        break;
    case "Spain":
        console.log("Hola");
        break;
    case "Korea":
        console.log("여보세요");
        break;
    default:
        console.log("Hello");
}
// 5. Check if the 2nd person’s name is longer than 5 characters using a ternary operator
console.log(people[1].name.length > 5
    ? "The 2nd person's name is longer than 5 characters."
    : "The 2nd person's name is not longer than 5 characters.");
