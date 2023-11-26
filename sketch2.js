let tableData = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);

  let numRows = tableData.length;
  let numCols = tableData[0].length;

  // Set cell size
  let cellWidth = width / numCols;
  let cellHeight = height / numRows;

  // Draw table
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // Draw cell
      let x = j * cellWidth;
      let y = i * cellHeight;
      fill(255);
      stroke(0);
      rect(x, y, cellWidth, cellHeight);

      // Display data in the cell
      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(16);
      text(tableData[i][j], x + cellWidth / 2, y + cellHeight / 2);
    }
  }

  // Draw horizontal lines
  for (let i = 1; i < numRows; i++) {
    let y = i * cellHeight;
    stroke(0);
    line(0, y, width, y);
  }

  // Draw vertical lines
  for (let j = 1; j < numCols; j++) {
    let x = j * cellWidth;
    stroke(0);
    line(x, 0, x, height);
  }
}
