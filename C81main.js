canvas= document.getElementById('canva');
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.lineWidth=4;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="black";
ctx.lineWidth=4;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth=4;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow";
ctx.lineWidth=4;
ctx.arc(300,240,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="green";
ctx.lineWidth=4;
ctx.arc(400,240,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener('mousedown' ,my_mousedown );

function my_mousedown(e)
{
    mx=e.clientX -canvas.offsetLeft;

    my=e.clientY -canvas.offsetTop;
    circle(mx,my);  
}
