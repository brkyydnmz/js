//html dosyasıdır bu
<html>
<body>
<canvas id="canvas" width="400" height="250" style="border:1px solid #d3d3d3;"></canvas>

<script>
// Dikdörtgen çiz
var c = document.getElementById("canvas");
var ctxr = c.getContext("2d");
ctxr.beginPath();
//rect(x,y,lengthX,lengthY);
ctxr.rect(20, 20, 150, 100);
ctxr.stroke();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Elips çiz
ctx.beginPath();
// void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
ctx.ellipse(300, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// Elipsin yansımasını çiz
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(200, 200); //başlangıç noktası
ctx.lineTo(400, 0); //bitiş noktası
ctx.stroke();

</script> 

</body>
</html>
