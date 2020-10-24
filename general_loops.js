// let i;
// for(i=0;i<=100;i++)
// {
//     // if(i%3!=0 && i%2!=0)
//     // {
//     // console.log(i);
//     // }

//     if(i===57)
//     {
//         console.log('' +i);
//         break;
//     }
//     console.log('Number' + ' ' + i);
// }



// WHILE 

// let i=0;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }


// DO WHILE

// let i=0;
// do {
// if(i==2)
// {
//     console.log("it is no. 2");
//     // continue;
// } 

// else(i==50)
// {
//     console.log("complete century");
//     // continue;
// } 

//     i++;
    
// }
// while(i<=100)
// 


// LOOP THROUGH ARRAY
// const hobbies=['dancing', 'lisening', 'coding', 'travelling'];
// // for(let i=0;i<hobbies.length;i++)
// // {
// //     // console.log(hobbies[i]);
// // }

// // FOREACH
// hobbies.forEach(function(hobby,){
//     console.log(hobby);
// });

// ----------------------------------------------------


// MAP
// const babies = [
//     {name:'meenu', number:2, age:'twenty six'},
//     {name:'reena', number:3, age:'twenty five'},
//     {name:'teena', number:1, age:'twenty nine'},
//     {name:'maapaa', number:4, age:'fifty'}
// ];
//     // console.log(babies[2]);

// const baby = babies.map(function(num){
           
//     return num.number;

//     });
//     console.log(baby);


// -----------------------------------
// FOR IN LOOP
const info = {
    name:'meenu',
    designation: ' developer',
    age: '26'
}

for(let single in info){
console.log(`${single}  :  ${info[single]}`);
}   