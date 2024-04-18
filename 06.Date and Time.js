let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.getHours());

// console.log(typeof myDate);

// let createDate = new Date(2024 , 0 , 23 , 19 , 33) // month js main 0 se start hota hai , ye humne ek custom date banaya hain
 // console.log(createDate.toString());

 // ek aur method 

 // let myCreateDate = new Date("2023-03-11")  // ye format waise India main follow nahin hota 
 // console.log(myCreateDate.toLocaleString());

 // let myTimeStamp = Date.now()
 //console.log(myTimeStamp); // ye millisec main value hain

// console.log(myCreateDate.getTime()); 

// console.log(Math.floor(Date.now()/1000));  // ye date dega abhi ki in millisec

 let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth()+1); // note getMonth month dega 0 se isley ise 1 se start hoga

newDate.toLocalString('default',{ //ye date banane ka tareeka hai
    weekday: 'Date',
    myDate: 'date'
})


