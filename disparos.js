canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var enemies = [];
var missiles = [];
const ship={
    y:500,
    x:canvas.width*0.5-25,
    w:100,
    h:100,
    bg:"black",
    direccion:null,
    render: function(){
        if(this.direccion=="left"){
            this.x-=5;
        }else if(this.direccion=="right"){
            this.x+=5;
        }
        ctx.fillStyle=this.bg;
        ctx.drawImage(naveImage,this.x,this.y,100,90);
        for(var i=0;i<missiles.length;i++){
            var m=missiles[i];
            ctx.fillRect(m.x,m.y-=5,m.w,m.h);
        }
    }
}
function dispararBalas(e){
    if(e.key='w'){
        missiles.push({
            x:ship.x + ship.w,
            y:ship.y,
            w:10,
            h:10
        });
    }
}
document.addEventListener("keydown", dispararBalas);