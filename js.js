//calback to
/*function add(a,b) {
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function double (num1, num2, callback){
    return 2*callback(num1, num2);
}

document.write(double(3,7,multiply)); 42 sagot
*/

//set interval
/*
ctr = 0
setInterval(function(){
    ctr +=2;
    document.write(`${ctr}secs, has elapsed . . .<br>`)}, 2000);
*/

var promise = new Promise(function(resolve, reject){
    const name1 = "peter";
    const name2 = "peter";
    if (name1 === name2){
        resolve();

    }else{
        reject();
    }
});

promise
    .then(function(){
        console.log("successfully resolved . . .");

    })
    .catch(function(){
        console.log("failed to resolved. . .")
    });