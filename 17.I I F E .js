// kabhi kabhi aise program likhne padte hain , jisme hum logon ko database main immediately code chalna hota hai , 
// also iife use hota hai global scope ke pollution se function ko bachana , 

(function bhai(){
    console.log('bhai is here');
})();
// humesha uske baad semicolon , lagao taki iife ke invoked context ko rok sako
(()=>{

    console.log('bhai is going');
})()