class slingshot {
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stifness:105,
        lenght:10
    }
    this.pointB=pointB;
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }

    
    display(){
        if(this.chain.bodyA){
    var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;
    stroke("black");
    strokeWeight(6);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    }