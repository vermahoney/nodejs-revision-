const  fs=require('fs');
// fs ,moule ko i help we can interact witht the file system of our computer
// we can read ,write,delete,create files and folders using fs module
// there are two types of fs module 
// 1. synchronous 
// 2. asynchronous
// fs.writeFileSync('hello.txt','Hello World');

// fs.writeFile('hello.txt','Hello World', (err)=>{

    // const result =fs.readFileSync('./contacts.txt', 'utf-8');
    // console.log(result);
// asynronous kuch retrun nhi krta hai but callback function ke through hume result milta hai means ye hamesha ek callback expect krta hai jisme error aur result dono hote hai
fs.readFile('./contacts.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);   
    } else {
        console.log(result);
    }
});

fs.appendFileSync('hello.txt','\nHello World');

fs.cpSync('hello.txt','hello2.txt');

fs.unlinkSync('hello2.txt');