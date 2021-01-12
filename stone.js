class stone{
 
    constructor(x,y,r,bodyA,pointB){
       
    var options={
        bodyA: bodyA,
        pointB: pointB,
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.r=r;    
    this.pointB=pointB;
    this.image=loadImage("stone.png");
    this.body=Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    }
    fly(){
        this.body.bodyA = null;
    }
    
    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rect(this.x,this.y,this.r,this.r);
     imageMode(CENTER);
     ellipseMode(CENTER)
     image(this.image,this.x,this.y,this.r,this.r);
     pop();
     if(this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }    
     
    }
   


}