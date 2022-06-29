const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Wall {
  constructor({ position, srcPosition, image }) {
    this.position = position;
    this.width = 32;
    this.height = 32;
    this.srcPosition = srcPosition;
    this.image = image;
  }

  draw() {
    // ctx.fillStyle = '#0000ff';
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(this.image, this.srcPosition.sx, this.srcPosition.sy, 32, 32, this.position.dx, this.position.dy, this.width, this.height);
  }
}

class Player {
  constructor({ name, position, velocity, srcPosition, image }) {
    this.name = name;
    this.position = position;
    this.velocity = velocity
    this.srcPosition = srcPosition;
    this.image = image;
    this.score = 0;
  }

  draw() {
    ctx.drawImage(this.image, this.srcPosition.sx, this.srcPosition.sy, 32, 32, this.position.dx, this.position.dy, 32, 32);
  }

}


/*16x16*/
const map = [
  ['ul', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'ur'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['vw', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', 'vw'],
  ['ll', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'hw', 'lr'],
];

const walls = [];

/* LEGEND FOR MAP ELEMENTS
Char       Description
-----------------------------------
ul    |    upper left corner wall
ll    |    lower left corner wall
ur    |    upper right corner wall
lr    |    lower right corner wall
pm    |    pacman
cc    |    coin
00    |    blank 
01    |    cherry 
02    |    strawberry
-----------------------------------
*/


const generateImage = (src) => {
  const img = new Image();
  img.src = src;
  //console.log(img);
  return img;
}

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    switch (map[i][j]) {
      case 'vw':
        walls.push(new Wall({
          position: {
            dx: j * 32,
            dy: i * 32
          },
          srcPosition: {
            sx: 264,
            sy: 273
          },
          image: generateImage("../assets/images/pacman-map-sprites2.png")
        }));
        break;
      case 'hw':
        walls.push(new Wall({
          position: {
            dx: j * 32,
            dy: i * 32
          },
          srcPosition: {
            sx: 298,
            sy: 250
          },
          image: generateImage("../assets/images/pacman-map-sprites2.png")
        }));
        break;
      case 'ul':
        walls.push(new Wall({
          position: {
            dx: j * 32,
            dy: i * 32
          },
          srcPosition: {
            sx: 264,
            sy: 250
          },
          image: generateImage("../assets/images/pacman-map-sprites2.png")
        }));
        break;
      case 'll':
        walls.push(new Wall({
          position: {
            dx: j * 32,
            dy: i * 32
          },
          srcPosition: {
            sx: 264,
            sy: 738
          },
          image: generateImage("../assets/images/pacman-map-sprites2.png")
        }));
        break;
      case 'ur':
        walls.push(new Wall({
          position: {
            dx: j * 32,
            dy: i * 32
          },
          srcPosition: {
            sx: 704,
            sy: 250
          },
          image: generateImage("../assets/images/pacman-map-sprites2.png")
        }));
        break;
      case 'lr':
        walls.push(new Wall({
          position: {
            dx: j * 32,
            dy: i * 32
          },
          srcPosition: {
            sx: 704,
            sy: 738
          },
          image: generateImage("../assets/images/pacman-map-sprites2.png")
        }));
        break;
    }
  }
}

const player = new Player({
  name: "Player",
  position: {
    dx: 32,
    dy: 32,
  },
  velocity: {
    x: 32,
    y: 32
  },
  srcPosition: {
    sx: 32,
    sy: 0
  },
  image: generateImage("../assets/images/pacman-general-sprites.png")
});



onload = function () {
  for (let i = 0; i < walls.length; i++) {
    //console.log(walls[i]);
    walls[i].draw();
  }

  player.draw();
}

