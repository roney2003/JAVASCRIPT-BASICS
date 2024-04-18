function one(){
    const userName = 'suryansh';


function two(){
    const webSite = 'youtube';
    console.log(userName);          // child function parent function ka variable access kar sakta hai , ise closures bhi kehte hain
}

//console.log(webSite);

//two();       // ye two function one() ka userName print karega

}

one();



if(true){
    const username = 'bhai';
    if(username === 'bhai'){
        const web = 'youtube';
       // console.log(username + web);      
    }
   // console.log(web);   ye print nahi hoga is scope main nahi hain
          
}

// console.log(username);




//*****************************INTRESTING CONCEPT*************//    HOISTING
console.log(addOne(5))

function addOne(value){       // function ko yahan pe declare kiya gya hain , normally , hum ise call ya print kabhi likh saktein hain
    return value+1;
}


console.log(solve(4))

const solve = function addTwo(num){
    return num+2;                          // is tareeke se function ko likhna expression kehte hain, isme declarintion ke badd hi function call karo 
}

// different methods main function call ko hoisting kehte hain


