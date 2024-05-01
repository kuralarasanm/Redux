
import { compose, pipe } from "lodash/fp";
import Counter from "./features/counter/Counter";

// function pressLike() {
//   return console.log("thanks a lot");

// }

// let pL=pressLike
// pL()
// pressLike()
// --------------------------------------------
// function pressLike() {
//   return "thanks a lot"
// }

// function sayThanks(fn) {
//   console.log(fn());
// }
// sayThanks(pressLike);
// ---------------------------------------
// anonymous function
// function pressLike(){
//   return function(){
//     console.log("thanks");
//   }
// }

// let fn=pressLike()
// let message=fn()
// --------------------------------------------
//higher order function
//  1
// array=[1,2,3]
// array.map(number=> number*5)
//  2
// setTimeout(()=>console.log("hi"),1000)
// -------------------------------------------------
// normal way of thinging
// let input ="   Subscribe   "
// let output="<div>"+input.trim() +"</div>"
// console.log(output);
// functional way of thinging
// const trim=str=>str.trim()
// const wrapInDiv=str=>`<div>${str}</div>`
// const toLowerCase=str=>str.toLowerCase()

// const result=wrapInDiv(toLowerCase(trim(input)))
// console.log(result);

// const tranform =compose(wrapInDiv,toLowerCase,trim)
// console.log(tranform(input));

// const tranform1=pipe(trim,toLowerCase,wrapInDiv)
// console.log(tranform1(input));

// -------------------------------------------------
// let input = "   Subscribe   ";
// let output = "<div>" + input.trim() + "</div>";
// console.log(output);

// const trim = (str) => str.trim();
// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// // const tranform1 = pipe(trim, toLowerCase, wrap("div"));
// const tranform1 = pipe(trim, toLowerCase, wrap("span"));
// console.log(tranform1(input));

// ------------------------------------------------------------------
// function add(a,b){
//   return a+b
// }
// console.log(add(13,2));
// ------------------------------------
// function add(a){
//   return function(b){
//     return a+b
//   }
// }
// const x=add(3)
// console.log(x(5));
// console.log(add(3)(8));

// const add1=a=>b=>c=>a+b+c
// console.log(add1(2)(3)(10));
// -------------------------------------------------------
//pure function
// function randomnumber(number) {
//   return number * 3;
// }
// function isEligible(age, minage) {
//   return age > minage;
// }
// impure function
// function randomnumber1(number) {
//   return number * Math.random();
// }
// function isEligible1(age) {
//   return age > minage;
// }
// ----------------------------------------------------------------
// const person={
//   name:"kural",
//   address:{
//     city:"dharmapuri",
//     country:"india"
//   }
// }
// // person.name="funny"
// // console.log(person);
// const updated={
//   ...person,address :{...person.address,country:"singapore"},name:"kuralarasan"
// }
// console.log(person);
// console.log(updated);
// --------------------------------------------------------------------------------------------------------

function App() {
    return (
        <div className="app">
            <Counter/>
        </div>
    )
}

export default App;
