let val;
const today = new Date();
val = today;
const today1 = new Date('November 16 1993 09:18:36');
val1=today1.getDay();
console.log(today);
document.getElementById('todaydate').innerHTML = today;
document.getElementById('mybuddy').innerHTML = val1;