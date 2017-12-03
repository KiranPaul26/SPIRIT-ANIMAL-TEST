var result=[];

function firstButton() {
    
    document.getElementById("questionTwo").style.visibility = "visible";
    document.getElementById("questionOne").style.visibility = "hidden";
    
    if(document.getElementById("air").checked) {
        
        result.push("O");
        result.push("C");
        result.push("D");
        result.push("BU");
        
    } else if(document.getElementById("earth").checked) {
        
        result.push("BE");
        result.push("D");
        result.push("W");
        
    } else if(document.getElementById("fire").checked) {
        
        result.push("F");
        
    } else if(document.getElementById("water").checked) {
        
        result.push("W");
    }
    
    /*alert("You have " + result);*/
    
}

function secondButton() {
    
    document.getElementById("questionThree").style.visibility = "visible";
    document.getElementById("questionTwo").style.visibility = "hidden";
    
    if(document.getElementById("day").checked) {
        
        result.push("BU");
        result.push("C");
        result.push("BE");
        result.push("D");
        
    } else if(document.getElementById("night").checked) {
        
        result.push("O");
        result.push("F");
        result.push("W");
        result.push("BE");
        result.push("D");
        
    }
    
}

function thirdButton() {
    
    document.getElementById("questionFour").style.visibility = "visible";
    document.getElementById("questionThree").style.visibility = "hidden";
    
    if(document.getElementById("family").checked) {
        
        result.push("W");
        result.push("C");
        result.push("D");
        
    } else if(document.getElementById("independence").checked) {
        
        result.push("O");
        result.push("F");
        result.push("BE");
        result.push("BU");
        
    }
    
}

function fourthButton() {
    
    document.getElementById("questionFive").style.visibility = "visible";
    document.getElementById("questionFour").style.visibility = "hidden";
    
    if(document.getElementById("leader").checked) {
        
        result.push("W");
        
    } else if(document.getElementById("scientist").checked) {
        
        result.push("O");
        
    } else if(document.getElementById("adventurer").checked) {
        
        result.push("F");
        
    } else if(document.getElementById("peacemaker").checked) {
        
        result.push("D");
        
    } else if(document.getElementById("psychic").checked) {
        
        result.push("C");
        
    } else if(document.getElementById("optimist").checked) {
        
        result.push("BU");
        
    } else if(document.getElementById("protector").checked) {
        
        result.push("BE");
        
    }
    
}

function fifthButton() {
    
    document.getElementById("questionSix").style.visibility = "visible";
    document.getElementById("questionFive").style.visibility = "hidden";
    
    if(document.getElementById("five1").checked) {
        
        result.push("F");
        result.push("BE");
        result.push("C");
        
    } else if(document.getElementById("five2").checked) {
        
        result.push("W");
        
    } else if(document.getElementById("five3").checked) {
        
        result.push("O");
        
    } else if(document.getElementById("five4").checked) {
        
        result.push("BU");
        result.push("D");
        
    } 
    
}

function sixthButton() {
    
    document.getElementById("questionSeven").style.visibility = "visible";
    document.getElementById("questionSix").style.visibility = "hidden";
    
    if(document.getElementById("six1").checked) {
        
        result.push("BU");
        
    } else if(document.getElementById("six2").checked) {
        
        result.push("F");
        
    } else if(document.getElementById("six3").checked) {
        
        result.push("O");
        result.push("D");
        result.push("C");
        
    } else if(document.getElementById("six4").checked) {
        
        result.push("W");
        result.push("BE");
        
    }
    
}

function seventhButton() {
    
    document.getElementById("questionEight").style.visibility = "visible";
    document.getElementById("questionSeven").style.visibility = "hidden";
    
    if(document.getElementById("confident").checked) {
        
        result.push("W");
        result.push("BE");
        
    } else if(document.getElementById("wild").checked) {
        
        result.push("F");
        
    } else if(document.getElementById("cute").checked) {
        
        result.push("BU");
        result.push("D");
        
    } else if(document.getElementById("mysterious").checked) {
        
        result.push("C");
        
    } else if(document.getElementById("wise").checked) {
        
        result.push("O");
        
    }
    
}

function eighthButton() {
    
    document.getElementById("questionNine").style.visibility = "visible";
    document.getElementById("questionEight").style.visibility = "hidden";
    
    if(document.getElementById("eight1").checked) {
        
        result.push("O");
        result.push("F");
        result.push("BU");
        
    } else if(document.getElementById("eight2").checked) {
        
        result.push("W");
        result.push("C");
        result.push("D");
        
    } else if(document.getElementById("eight3").checked) {
        
        result.push("B");
        
    }
    
}

function ninthButton() {
    
    document.getElementById("questionTen").style.visibility = "visible";
    document.getElementById("questionNine").style.visibility = "hidden";
    
    if(document.getElementById("nine1").checked) {
        
        result.push("BE");
        result.push("W");
        
    } else if(document.getElementById("nine2").checked) {
        
        result.push("F");
        result.push("C");
        result.push("BU");
        
    } else if(document.getElementById("nine3").checked) {
        
        result.push("D");
        
    } else if(document.getElementById("nine4").checked) {
        
        result.push("O");
        
    }
    
}

function tenthButton() {
    
    document.getElementById("questionEleven").style.visibility = "visible";
    document.getElementById("questionTen").style.visibility = "hidden";
    
    if(document.getElementById("ten1").checked) {
        
        result.push("BE");
        
    } else if(document.getElementById("ten2").checked) {
        
        result.push("F");
        result.push("D");
        result.push("W");
        
    } else if(document.getElementById("ten3").checked) {
        
        result.push("O");
        result.push("C");
        
    } else if(document.getElementById("ten4").checked) {
        
        result.push("BU");
        
    }
    
}

function eleventhButton() {
    
    document.getElementById("questionTwelve").style.visibility = "visible";
    document.getElementById("questionEleven").style.visibility = "hidden";
    
    if(document.getElementById("eleven1").checked) {
        
        result.push("BU");
        
    } else if(document.getElementById("eleven2").checked) {
        
        result.push("B");
        result.push("W");
        
    } else if(document.getElementById("eleven3").checked) {
        
        result.push("D");
        
    } else if(document.getElementById("eleven4").checked) {
        
        result.push("C");
        result.push("O");
        result.push("F");
        
    }
    
}

function finalButton() {
    
    if(document.getElementById("twelve1").checked) {
        
        result.push("O");
        result.push("C");
        result.push("BU");
        
    } else if(document.getElementById("twelve2").checked) {
        
        result.push("F");
        result.push("D");
        result.push("W");
        
    } else if(document.getElementById("twelve3").checked) {
        
        result.push("BE");
        
    } 
    
    /*alert("The array of results are " + result);*/
   
    //COUNTING COMMON STRING
    var maxfreq = 1;            //DEFAULT MAX FREQUENCY
    var m = 0;                  //COUNTER
    var item;                   //TO STORE ITEM WITH MAX FREQUENCY
    
    for(var i = 0; i < result.length; i++) {          //SELECTING CURRENT ELEMENT IN THE ARRAY
        
        for(var j = i; j < result.length; j++) {      //LOOP THROUGH NEXT ELEMENTS IN ARRAY TO COMPARE 
            
            if(result[i] == result[j]) {              //SEE IF ELEMENT OCCURS AGAIN IN THE ARRAY
                m++                                   //INCREMENT COUNTER IF IT DOES
            }
            if(maxfreq < m) {                              //IF DEFAULT MAX FREQUENCY IS LESS THAN NEW COMMON ELEMENT 
                
                maxfreq = m;                               //THEN THE NEW MAX FREQUENCY IS THIS NEW COMMON ELEMENT 
                item = result[i];                     //STORE CURRENT ELEMENT 
            }
        }
        
        m = 0;                                        //MAKE COUNTER  m = 0 FOR NEXT ELEMENT AND REPEAT PROCESS
    }
    
    /*alert(item + " ( " + maxfreq + " times ) ");*/
    
    switch(item) {
        case "BE":
            document.getElementById("bearA").style.visibility = "visible";
            break;
        case "BU":
            document.getElementById("butterflyA").style.visibility = "visible";
            break;
        case "C":
            document.getElementById("crowA").style.visibility = "visible";
            break;
        case "D":
            document.getElementById("deerA").style.visibility = "visible";
            break;
        case "F":
            document.getElementById("foxA").style.visibility = "visible";
            break;
        case "O":
            document.getElementById("owlA").style.visibility = "visible";
            break;
        case "W":
            document.getElementById("wolfA").style.visibility = "visible";
            break;
    }
    
    document.getElementById("fa").style.visibility = " visible";
    
}










$(document).ready(function(){
    $('#q1Btn').click(function() {
        if (!$("input[name='q1']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionTwo").style.visibility = "hidden";
            document.getElementById("questionOne").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q2Btn').click(function() {
        if (!$("input[name='q2']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionThree").style.visibility = "hidden";
            document.getElementById("questionTwo").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q3Btn').click(function() {
        if (!$("input[name='q3']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionFour").style.visibility = "hidden";
            document.getElementById("questionThree").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q4Btn').click(function() {
        if (!$("input[name='q4']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionFive").style.visibility = "hidden";
            document.getElementById("questionFour").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q5Btn').click(function() {
        if (!$("input[name='q5']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionSix").style.visibility = "hidden";
            document.getElementById("questionFive").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q6Btn').click(function() {
        if (!$("input[name='q6']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionSeven").style.visibility = "hidden";
            document.getElementById("questionSix").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q7Btn').click(function() {
        if (!$("input[name='q7']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionEight").style.visibility = "hidden";
            document.getElementById("questionSeven").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q8Btn').click(function() {
        if (!$("input[name='q8']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionNine").style.visibility = "hidden";
            document.getElementById("questionEight").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q9Btn').click(function() {
        if (!$("input[name='q9']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionTen").style.visibility = "hidden";
            document.getElementById("questionNine").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q10Btn').click(function() {
        if (!$("input[name='q10']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionEleven").style.visibility = "hidden";
            document.getElementById("questionTen").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q11Btn').click(function() {
        if (!$("input[name='q11']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("questionTwelve").style.visibility = "hidden";
            document.getElementById("questionEleven").style.visibility = "visible";
            
        }
    });
});

$(document).ready(function(){
    $('#q12Btn').click(function() {
        if (!$("input[name='q12']:checked").val()) {
            alert('Nothing is checked! Please pick an option.');
            document.getElementById("bearA").style.visibility = "hidden";
            document.getElementById("butterflyA").style.visibility = "hidden";
            document.getElementById("crowA").style.visibility = "hidden";
            document.getElementById("deerA").style.visibility = "hidden";
            document.getElementById("foxA").style.visibility = "hidden";
            document.getElementById("owlA").style.visibility = "hidden";
            document.getElementById("wolfA").style.visibility = "hidden";
            document.getElementById("fa").style.visibility = " hidden";
            
            document.getElementById("questionTwelve").style.visibility = "visible";
            
        }
    });
});