(function(){
    let screen = docunment.querySecter('.screen');
    let button = docunment.querySecterAll('.btn');
    let equal = docunment.querySecter('.btn-clear');
    let clear = docunment.querySecter('.btn-equal');
    
    button.foreach(function(button) 
        button.addEventlisterner('click'),function(e){
          let value= e.target.dataset.num;
          screen.value += value;

        } 
            
    ;

    equal.addEventlisterner('click',function(e){
        if (screen.value === '') {
            screen.value = "please enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    

        }
    )

    clear.addEventlisterner('click,'),function(e) 
       {
        screen.value = "";
       }
