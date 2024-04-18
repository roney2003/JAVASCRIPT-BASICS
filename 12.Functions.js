// function karenge 
/*
function add(a, b) {
    console.log(a + b);
}

*/

function add(a, b) {
   let result =  a + b;
   return result;
}

const result= add(2, 3); // 5

//  console.log(result); // undefined






function loginUserName(username = 'bhai') {  // default value set kiya hai username ka
    if(username === undefined) {
        return 'Please provide username'  // iss function me username ki value nahi di gayi toh ye return karega
        // aur haan humesha yaad rakhna ki return ke baad kuch bhi nahi likhna hota hai, kyonki return ke baad kuch bhi likhenge toh wo execute nahi hoga
    }

    else if(typeof username === 'number') {
        return 'Please provide a string value not a number'  // agar username ki value number hai toh ye return karega
    }


    return `${username} is logged in`
}

console.log(loginUserName()); // Suryansh is logged in