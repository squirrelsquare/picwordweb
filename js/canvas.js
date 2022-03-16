/*(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
*/

var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  colorPallete = ["#9222f9", "#ffdd02", "#36ff40"];

 
var width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight),
  origin = { x: width / 2, y: height / 2 },
  mouse = { x: width / 2, y: height / 2 },
  balls = [],
  count = 0,
  randomCount = 1;

window.onresize = () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  origin = { x: width / 2, y: height / 2 };
};

class Ball {
  constructor() {
    this.x = origin.x;
    this.y = origin.y;
    this.angle = Math.PI * 2 * Math.random();
    this.vx = (1.3 + Math.random() * 0.3) * Math.cos(this.angle);
    this.vy = (1.3 + Math.random() * 0.3) * Math.sin(this.angle);
    this.r = 6 + 3 * Math.random();
    this.color = colorPallete[Math.floor(Math.random() * colorPallete.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.r -= 0.01;
  }
}

  // window.setInterval(loop, 1000 / 60); // 60fps

loop();
function loop() {
  context.clearRect(0, 0, width, height);
  if (count === randomCount) {
    balls.push(new Ball());
    count = 0;
    randomCount = 5 + Math.floor(Math.random() * 10);
  }
  count++;
  for (var i = 0; i < balls.length; i++) {
    var b = balls[i];
    context.fillStyle = b.color;
    context.beginPath();
    var wC = b.r;
        if (wC < 0) {
            wC = 0;
        }

    context.arc(b.x, b.y, wC, 0, Math.PI * 2, false);
    context.fill();
    b.update();
  }

  origin.x += (mouse.x - origin.x) * 0.15;
  origin.y += (mouse.y - origin.y) * 0.15;

  context.fillStyle = "#1f3cf6";
  context.beginPath();
  context.arc(origin.x, origin.y, 25, 0, Math.PI * 2, false);
  context.fill();

  removeBall();
  requestAnimationFrame(loop);
}

function removeBall() {
  for (var i = 0; i < balls.length; i++) {
    var b = balls[i];
    if (
        i>10
      //b.x + b.r < 0 ||
      //b.x - b.r > width ||
      //b.y + b.r < 0 ||
      //b.y - b.r > height ||
      //b.r <= 0
    ) {
      balls.splice(0, 1);//i
    }
  }
}

window.addEventListener(
  "mousemove",
  function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  },
  false
);
