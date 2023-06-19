
// Agar enroll students ka data server se a rha hai to hume pta nhi hai usme kitna waqt lagega to hum ek call back fucntion use karenge enroll student ke last me aur phir uski jagah pe get students karenge taki data aane ke baad get students function run ho
// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
        console.log(students.name);
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();

