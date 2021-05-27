Class Form{
    costructor(){
        this.input=createInput("PlayerName");
        this.button=createButton('Play');
        this.greating=createElemant('h4');
        this.title=createElement('H3');
    }
    display(){
        var Input=createInput('PlayerName');
        input.position(displayWidth/2,displayHeight/2+100);
        
        var button=createButton('Play');
        button.position(displayWidth/2+50,displayHeight/3);
        
        var title=createTitle('h3');
        title.html("Enjoy Animal Racing Game");
        title.position(displayWidth/2,displayHeight/2-150);
        
        button.mousePressed(function(){
        input.hide();
        button.hide();

        var name=input.value();
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount)
        var greating=createElement("H4");
        greating.html("Hello"+name);
        greating.position(displayWidth/2,displayHeight/2);
        });
    }
}

