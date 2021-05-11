class Form{
    constructor(){
        this.input=createInput("answer"),
        this.button=createButton('check')
    }
    hide(){
        this.input.hide();
        this.button.hide();
    }
    display(){
        background("purple");
        var text=createElement('h2');
        text.html("DO YOU WANT TO PLAY THIS GAME??");
        this.input.position(500,500);
        this.button.position(500,600);
        var answer=this.input.value();
        if(answer==="YES"){
            return 1;
        }
        else{
        
            return 0;
        }
    }
}