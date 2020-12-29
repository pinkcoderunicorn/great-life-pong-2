class You{
    constructor(){
        this.xposition = displayWidth/2;
        this.yposition = displayHeight - 20;
        this.radius = 7;
        this.shapeColor="blue";
    }
    display(){
        fill("blue");
     circle(this.xposition, this.yposition,this.radius);
    }
}