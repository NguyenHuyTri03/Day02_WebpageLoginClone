let usrIn;


function btnClick(){
    document.getElementById("textDemo").innerHTML = "";
    let num = Math.floor(Math.random() * 100) + 1;
    usrIn= prompt("Enter a number ");
    do{
        answer = parseInt(usrIn);
        if(answer !== num){
            if(answer < num){
                usrIn = prompt("Number entered is smaller than n");
            }else if(answer > num){
                usrIn = prompt("Number entered is larger than n");
            }else{
                document.getElementById("textDemo").innerHTML = num + " is the mystery number";
            }
        }else{
            document.getElementById("textDemo").innerHTML = num + " is the mystery number";
        }
    }while(answer != num);
}

// btnClick();