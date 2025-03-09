var engine = { 
    make: "Ford",
    headGasket:{
        post:[
            "piston1",
            "piston2"
        ]
    }
}

function runExpression(){

    var a = 10;

    function add()
    {
        return a + b;
    }
    console.log(
        add(90),
        add(20)
    );
    
}