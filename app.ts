// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Nacho',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],

// }

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Nacho',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
    
}

console.log(person.role)
// person.role.push('admin'); - supported
// person.role[0] = 10 - supported
// person.role= [0, 'admin', 'user'] - unsupported



for (const hobby of person.hobbies){
console.log(hobby.toUpperCase())
}
