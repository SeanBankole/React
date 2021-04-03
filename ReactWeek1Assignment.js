class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(newStudent){

    }
}
const newNumber = 3
let duplicate = []
const arr= [1,2,3,4,5,3];
for(let i = 0; i < arr.length; i++){
if (arr[i] == newNumber){
    duplicate.push(arr[i])
}
else{
    arr.push(newNumber)
}
}
let dup2 = arr.filter((element) => {
    return element = newNumber
} )


console.log(duplicate)