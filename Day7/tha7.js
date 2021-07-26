//question1
const student = {
name: "David Rayy",
sclass: "VI",
rollno: 12
}
console.log(Object.keys(student));

//question2
const student={
    name: "David Rayy",
    sclass= "VI",
    rollno: 12
}
console.log(student);
delete student.rollno;
console.log(student);

//question3
const student={
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}
var count=0;
for(var i in student){
    count++;
}
console.log(count);

//question4
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

//question5
const cylinder={
    vol:1.0000,
    volume: function(h,r){
        vol=2*3.14*r*h
        console.log(vol)
    }}
cylinder.volume(3.1,2.4)

//question6
var lib=[
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]
console.log(lib.sort((a,b)=>{
    return b.libraryID-a.libraryID;
}))

