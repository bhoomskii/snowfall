class Snow{
    constructor(x,y,r){
        var options ={
            restitution:0.03
        }
        this.r=r
        this.snow=Bodies.circle(x,y,this.r, options)
        this.image= loadImage("snow5.webp")
        World.add(world,this.snow)
    }
    display(){
        var pos=this.snow.position
        var angle=this.snow.angle
        push()
        translate (pos.x,pos.y)
        rotate (angle)
        imageMode (CENTER)
        image (this.image, 0,0,this.r, this.r)
        pop ()
    }
}