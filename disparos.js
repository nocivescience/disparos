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
        for(var i=0;i<missiles.length;i++){
            var m=missiles[i];
            ctx.fillRect(m.x,m.y-=5,m.w,m.h);
        }
    }
}
function drawShip(){
    ctx.fillStyle='white';
    ctx.moveTo(ship.x,ship.y);
    ctx.lineTo(ship.x+ship.w,ship.y);
    ctx.lineTo(ship.x+ship.w,ship.y+ship.h);
    ctx.lineTo(ship.x,ship.y+ship.h);
    ctx.lineTo(ship.x,ship.y);
    ctx.fill();
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawShip();
    ship.render();
}
setInterval(animate,6);
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
document.addEventListener("keydown", function (event) {
    if (event.key == 'a') {
        ship.direccion = "left";
        if (ship.x < ship.w * 0.2 - 130) {
            ship.x += 0;
        }
    }else if(event.key == 'd'){
        ship.direccion = "right";
        if (ship.x > ship.w - 110) {
            ship.x -= 0;
        }
    }
})
document.addEventListener("keyup", function (event) {
    if (event.key == 'a') {
        ship.x += 0;
        ship.direccion = "";
    }else if(event.key == 'd'){
        ship.x -= 0;
        ship.direccion = "";
    }
})
    document.addEventListener("keydown", dispararBalas);