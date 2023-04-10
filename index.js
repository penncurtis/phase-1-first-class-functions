function receivesAFunction(function1){
    function1()
}


function returnsANamedFunction(){
    return function Hello(){
        console.log("Hello")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hello")
    }
}