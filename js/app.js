const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class Wall {
  constructor({position}) {
    this.position = position;
    this.width = 20;
    this.height = 20;
  }

  draw() {
    ctx.fillStyle = '#0000ff';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const map = [
  ['1', '1', '1', '1', '1', '1', '1', '1'],
  ['1', '0', '0', '0', '0', '0', '0', '1'],
  ['1', '0', '0', '0', '0', '0', '0', '1'],
  ['1', '0', '0', '1', '1', '0', '0', '1'],
  ['1', '0', '0', '1', '1', '0', '0', '1'],
  ['1', '0', '0', '0', '0', '0', '0', '1'],
  ['1', '0', '0', '0', '0', '0', '0', '1'],
  ['1', '1', '1', '1', '1', '1', '1', '1'],
];

const walls = [];

/* LEGEND
0 - blank
1 - wall
p - pacman
g - ghost
2 - fruit
3 - fruit
*/
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    switch(map[i][j]) {
      case '1':
        walls.push(new Wall ({
          position: {
            x : j * 20,
            y : i * 20
          }
        }));
        break;
    }
  }
}

// console.log(walls);

for (let i = 0; i < walls.length; i++) {
  console.log(walls);
  walls[i].draw();
}
