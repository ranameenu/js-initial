// 1. const, let & var -- Variable scope

// Global Scope/Context/Namespace -- accessible in whole script
// Local/Function Scope -- accessible inside local only
// Block -- accessible inside block only

// const a = 10;
// let b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// -----------------------------

// window object -- Whatever belongs to GS will added to window object.

// console.log(window.a);
// console.log(window.b);
// console.log(window.c);

// -----------------------------

// const a = 10;
// a = 20;
// const a;
// console.log(a);

// -----------------------------

// const c = 5;
// let a = 10;
// var b = 20;

// console.log(a);
// console.log(b);

// function show(){
//     console.log(c);
//     console.log(a);
//     console.log(b);
// }
// show();

// {
//     console.log(c);
//     console.log(a);
//     console.log(b);
// }

// -----------------------------

// function show(){
//     let a = 10;
//     var b = 20;

//     // console.log(a);
//     // console.log(b);
// }

// show();

// console.log(a);
// console.log(b);

// -----------------------------

// {
//     let a = 10;
//     var b = 20;

//     // console.log(a);
//     // console.log(b);
// }

// // console.log(a);
// console.log(b);