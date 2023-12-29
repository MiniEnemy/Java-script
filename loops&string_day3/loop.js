// console.log("hello man");
// for(let i=1;i<=5;i++){
//     console.log("humans are great");
// }

// // console.log("loops has ended")
// let sum=0;
// for(i=1;i<=5;i++){
//     sum=i+sum;
// }
// console.log("The sum is",sum);
// let i=1;
// do{
//     console.log("number:",i);
//     i++;
// }while(i<=5)

// for of loop
// let str="Aryan";
// let size=0;
// for(let k of str){
//     console.log("char",k)
//     size++
// } 
// console.log("string size=",size)
// let no=0;
// for(let i=0;i<=100;i++)
// {
// // console.log(i);
// if(i%2==0){
//     console.log("num=",i);
// }
// }

//  ! practice question to print 100 even numbers
// for(let a=0;a<=100;a++){{
//     if(a%2==0){{
//         console.log("the number is even",a)
//     }}else if (a%2!==0){
//         console.log("it's an odd number",a)
//     }
//     else{
//         console.log("number is invalid");
//     }
// }}

// ! create a game where you start with any random game number.Ask user to keep guessing the number until the user enter sthe correct value

// ? my own sol\
// let game_num=5;
// let usernum= prompt("Guess the number");
// console.log(usernum);
// while (usernum != game_num) {
//     console.log("You entered wrong number",usernum);
//     usernum=prompt("guess the number")
// }
// console.log("congrats u got right number",usernum);

// sharda ans
// let game_num = 5;
// let usernum = prompt("Guess the number");
// console.log(usernum);

// while (usernum != game_num) {
//     console.log("You entered wrong number", usernum);
//     usernum = prompt("Guess the number");
// }

// console.log("Congrats! You guessed the right number:", usernum);
// let no=5;
// usernum=prompt("enter the number:");
// while (usernum!=5) {
//     if(usernum===null ){{
//         console.log("number was empty ")
//         break;
//     }}
// }
//     console.log("wrong number RE-try",usernum);
//     usernum=prompt("guess the number");
// if (usernum==5) {
    
//     console.log("The number is correct",usernum);
// }
let str=prompt("enter your full name ");
let at="@"+str+str.length;
console.log(at.trim())
