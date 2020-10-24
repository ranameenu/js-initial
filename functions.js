// function details(firstName, lastName) {
// if(typeof firstName === 'undefined') { firstName='john' }
// if(typeof lastName === 'undefined') { lastName='doe' }
//     return ('hello'+' ' +firstName+ ' ' + lastName );
// }


// ARGUMENT VALUE PASSING AT THE INITIAL FUNCTION DECLARATION
// function details(firstName='john', lastName='doe') {
        
//         return ('hello'+' ' +firstName+ ' ' + lastName );
//     }
// console.log(details());



// FUNCTION EXPRESSIONS

const maths = function(a=10, b=20){
    return a*b;
}
console.log(maths());


// invockable function expression

(function(name='meenu'){
    console.log('hi'+' '+ name);
})();


//PROPERTY METHODS 
const todo = {
    add:function(){
        console.log('learning');
    },
    edit:function(){
        console.log('dancing');
    }

}

todo.delete = function() {
    console.log('this list has been deleted');
}
todo.add();
todo.edit();
todo.delete();