// creating a class for all the buttons going to tbe used in the program
class button {
    constructor(buttonX, buttonY, buttonWidth, buttonHeight, text) {
        this.buttonX = buttonX;
        this.buttonY = buttonY;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = buttonHeight;
        this.text = text;
        this.buttonColor = [0, 100, 100];
        this.textColor = 200;
    }

    draw() {
        fill(this.buttonColor);
        strokeWeight(1.5);
        rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, 10);
        strokeWeight(1);

        let tw = textWidth(this.text);
        let th = textAscent() + textDescent();

        fill(this.textColor);

        // Center the text horizontally and vertically within the button
        let textX = this.buttonX + (this.buttonWidth - tw) / 2;
        let textY = this.buttonY + (this.buttonHeight - th) / 2 + textAscent();
        textStyle(BOLD);
        text(this.text, textX, textY);
        fill(255);
    }

    mouseCollide() {
        if (
            mouseX > this.buttonX &&
            mouseX < this.buttonX + this.buttonWidth &&
            mouseY > this.buttonY &&
            mouseY < this.buttonY + this.buttonHeight
        ) {
            return true;
        } else {
            return false;
        }
    }
}
let rho = 0.735;
// class to display a table displaying the values obtained from the left and right gap positions
class table {
    constructor(exp) {
        this.exp = exp;
        this.i = 1;
        this.mean = undefined;
        if (this.exp == 0) {
            this.data = [
                ["S.no", "R", "Left Gap", "Right Gap", "l3~l4", "R/(l3~l4)"],
                [undefined, undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined, undefined]
            ]
            let cellWidth = 100;
            let cellHeight = 30;
            this.buttonList = [[undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]];
            for (let i = 1; i < 5; i++) {
                for (let j = 1; j < 4; j++) {
                    this.buttonList[i - 1][j - 1] = new button(501 + j * cellWidth, 601 + i * cellHeight, cellWidth - 2, cellHeight - 2, "");
                    this.buttonList[i - 1][j - 1].buttonColor = [255, 255, 255];
                    this.buttonList[i - 1][j - 1].textColor = [0, 0, 0];
                }
            }
        } else {
            this.data1 = [
                ["S.no", "R", "Left Gap", "Right Gap", "l1 - l2", "R + rho*(l1-l2)"],
                [undefined, undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined, undefined],
                [undefined, undefined, undefined, undefined, undefined, undefined]]
            let cellWidth = 100;
            let cellHeight = 30;
            this.buttonList = [[undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]];
            for (let i = 1; i < 5; i++) {
                for (let j = 1; j < 4; j++) {
                    this.buttonList[i - 1][j - 1] = new button(501 + j * cellWidth, 601 + i * cellHeight, cellWidth - 2, cellHeight - 2, "");
                    this.buttonList[i - 1][j - 1].buttonColor = [255, 255, 255];
                    this.buttonList[i - 1][j - 1].textColor = [0, 0, 0];
                }
            }
        }
    }

    displayTable() {
        if (exp == 0) {
            // Set cell size
            let cellWidth = 100;
            let cellHeight = 30;

            // Draw table headers
            for (let j = 0; j < this.data[0].length; j++) {
                let x = 500 + j * cellWidth;
                let y = 600;
                fill(200);
                stroke(0);
                rect(x, y, cellWidth, cellHeight);
                fill(0);
                noStroke();
                textAlign(CENTER, CENTER);
                textSize(12);
                text(this.data[0][j], x + cellWidth / 2, y + cellHeight / 2);
                textAlign(LEFT, BASELINE);
                fill(255);
                strokeWeight(1);

            }

            // Draw table data
            for (let i = 1; i < this.data.length; i++) {
                for (let j = 0; j < this.data[i].length; j++) {
                    let x = 500 + j * cellWidth;
                    let y = 600 + i * cellHeight;
                    fill(255);
                    stroke(0);
                    rect(x, y, cellWidth, cellHeight);
                    fill(0);
                    noStroke();
                    textAlign(CENTER, CENTER);
                    textSize(12);
                    if (this.data[i][j]) {
                        text(this.data[i][j], x + cellWidth / 2, y + cellHeight / 2);
                    } else {
                        text("", x + cellWidth / 2, y + cellHeight / 2);
                    }
                    textAlign(LEFT, BASELINE);
                    fill(255);
                    strokeWeight(1);
                }
            }
            let x = 500 + 5 * cellWidth;
            let y = 600 + 5 * cellHeight;
            fill(255);
            stroke(0);
            rect(x, y, cellWidth, cellHeight);
            fill(0);
            noStroke();
            textAlign(CENTER, CENTER);
            textSize(12);
            text("mean    =", x - 90 + cellWidth / 2, y + cellHeight / 2);
            if (this.mean) {
                text(this.mean.toFixed(3), x + cellWidth / 2, y + cellHeight / 2);
                rho = this.mean.toFixed(3);
            } else {
                text("", x + cellWidth / 2, y + cellHeight / 2);
            }
            textAlign(LEFT, BASELINE);
            fill(255);
            strokeWeight(1);
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    this.buttonList[i][j].draw();
                }
            }

        } else {
            // Set cell size
            let cellWidth = 100;
            let cellHeight = 30;

            // Draw table headers
            for (let j = 0; j < this.data1[0].length; j++) {
                let x = 500 + j * cellWidth;
                let y = 600;
                fill(200);
                stroke(0);
                rect(x, y, cellWidth, cellHeight);
                fill(0);
                noStroke();
                textAlign(CENTER, CENTER);
                textSize(12);
                text(this.data1[0][j], x + cellWidth / 2, y + cellHeight / 2);
                textAlign(LEFT, BASELINE);
                fill(255);
                strokeWeight(1);

            }

            // Draw table data
            for (let i = 1; i < this.data1.length; i++) {
                for (let j = 0; j < this.data1[i].length; j++) {
                    let x = 500 + j * cellWidth;
                    let y = 600 + i * cellHeight;
                    fill(255);
                    stroke(0);
                    rect(x, y, cellWidth, cellHeight);
                    fill(0);
                    noStroke();
                    textAlign(CENTER, CENTER);
                    textSize(12);
                    if (this.data1[i][j]) {
                        text(this.data1[i][j], x + cellWidth / 2, y + cellHeight / 2);
                    } else {
                        text("", x + cellWidth / 2, y + cellHeight / 2);
                    }
                    textAlign(LEFT, BASELINE);
                    fill(255);
                    strokeWeight(1);
                }
            }
            let x = 500 + 5 * cellWidth;
            let y = 600 + 5 * cellHeight;
            fill(255);
            stroke(0);
            rect(x, y, cellWidth, cellHeight);
            fill(0);
            noStroke();
            textAlign(CENTER, CENTER);
            textSize(12);
            text("mean    =", x - 90 + cellWidth / 2, y + cellHeight / 2);
            if (this.mean) {
                text(this.mean.toFixed(3), x + cellWidth / 2, y + cellHeight / 2);
            } else {
                text("", x + cellWidth / 2, y + cellHeight / 2);
            }
            textAlign(LEFT, BASELINE);
            fill(255);
            strokeWeight(1);
            noStroke();
            let s = PI * 0.25 * 0.25 * this.mean;
            textSize(15);
            text("mean value of S = " + s.toFixed(3) + "x 10^-6", x - 200 + cellWidth / 2, 80 + y + cellHeight / 2);
            textSize(12);

            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    this.buttonList[i][j].draw();
                }
            }
        }
    }
}

// creating initial variables 
let x1, x2, x3 = 10, x4 = 10, switchOnOff, leftGap, rightGap;
switchOnOff = new button(670, 70, 100, 50, "switch ON/OFF");
leftGap = new button(410, 200, 100, 50, "left gap");
rightGap = new button(1030, 200, 100, 50, "right gap");
let r1;
let r2;
let r3;
let r4;
let switchExp = new button(370 - 150 - 10, 50, 150, 70, "Determination of Rho");
let switchExp1 = new button(370, 50, 150, 70, "Determination of X and S");
let r;
let noDeflectionPoint;
let state2 = "null";
let state = "key out";
let state3 = "unlocked";
let x
let img, img1;
let exp = 0;
let exp1 = new table(0);
let exp2 = new table(1);
let addToTable = new button(1175, 480, 80, 60, "Add To Table");
let inputState = ["buttonOff", undefined, undefined];
let cellWidth = 100;
let cellHeight = 30;
let calc1 = new button(501 + 6 * cellWidth, 601 + 1 * cellHeight, cellWidth - 2, cellHeight - 2, "Evaluate");
let calc2 = new button(501 + 6 * cellWidth, 601 + 2 * cellHeight, cellWidth - 2, cellHeight - 2, "Evaluate");
let calc3 = new button(501 + 6 * cellWidth, 601 + 3 * cellHeight, cellWidth - 2, cellHeight - 2, "Evaluate");
let calc4 = new button(501 + 6 * cellWidth, 601 + 4 * cellHeight, cellWidth - 2, cellHeight - 2, "Evaluate");
let calc5 = new button(501 + 5 * cellWidth, 601 + 6 * cellHeight, cellWidth - 2, cellHeight - 2, "Evaluate Mean");
let webState = "simulation";
let number = 1;

// theory Button
let theory = new button(10, 50, 190, 70, "theory")
let simulation = new button(10, 130, 190, 70, "simulation")

// loading all the images going to be used in the program into the buffer
function preload() {
    img1 = loadImage('circuit.jpeg');
    img = loadImage('circuit1.png');
}
// setup function 
function setup() {
    createCanvas(1510, 1600);
}

// draw fucntion -- unlimited loop
function draw() {
    clear();
    theory.draw();
    simulation.draw();
    if (webState == "theory") {
        let a1 = document.createElement('iframe');
        a1.name = "pdffile";
        a1.src = "CFB.pdf";
        a1.width = "60%";
        a1.height = "10%";
        if (number == 1) {
            document.body.appendChild(a1);
            number = 0;
        }
    } else if (webState == "simulation") {
        number = 1;
        var elements = document.getElementsByName('pdffile');
        var elementToRemove = elements[0];
        if (elementToRemove) {
            elementToRemove.parentNode.removeChild(elementToRemove);
        }
        if (exp == 0) {

            calc1.draw();
            calc2.draw();
            calc3.draw();
            calc4.draw();
            calc5.draw();
            // displaying the circuit images for switched off and on modes and creating the jockey mechanism
            if (state == "key in") {
                image(img1, 370, 100);
                circle(width / 2 + 100, 440, 100);
                stroke(255, 0, 0);
                line(width / 2 + 100, 440, width / 2 + 100, 390);
                stroke(0);

                circle(x, 480, 40);
                textAlign(CENTER);
                let temp1 = round((x - 435) / (1098 - 435) * 100)
                fill(0);
                text(temp1, x, 480)
                fill(255)
                textAlign(LEFT, BASELINE);
                if (state3 == "unlocked") {
                    x = constrain(mouseX, 435, 1098);
                }
                line(width / 2 + 10, 410, x, 515);
                circle(x, 515, 10);
            } else {
                image(img, 370, 100);
                stroke(0);
                line(width / 2 + 10, 410, (1098 + 435) / 2, 515);
                circle((1098 + 435) / 2, 515, 10);
            }

            // creating the buttons to assign the values of the R
            r1 = new button(260, 290, 100, 20, 0.1);
            r2 = new button(260, 320, 100, 20, 0.2);
            r3 = new button(260, 350, 100, 20, 0.3);
            r4 = new button(260, 380, 100, 20, 0.4);

            // background color
            //background(0, 0, 255);


            // creating the basic buttons
            // switch on/off the circuit
            switchOnOff.draw();
            // switching the experiment between finding rho and unknown resistance
            switchExp.draw();
            switchExp1.draw();
            // left gap button ; x2 = 0
            leftGap.draw();
            // right gap button ; x1 = 0
            rightGap.draw();
            // 4 buttons for the 4 possibles of R
            r1.draw();
            r2.draw();
            r3.draw();
            r4.draw();

            // showing the value of x1, x2, x3, x4
            fill(255, 100, 200);
            rect(520, 215, 60, 20);
            if (x1 != undefined) {
                fill(0);
                text('X1 = ' + x1, 530, 230);
            }
            fill(255, 100, 200);
            rect(960, 215, 60, 20);
            if (x2 != undefined) {
                fill(0);
                text('X2 = ' + x2, 970, 230);
            }
            fill(255, 100, 200);
            rect(665, 215, 60, 20);
            fill(0);
            text('X3 = ' + x3, 675, 230);
            fill(255, 100, 200);
            rect(815, 215, 60, 20);
            fill(0)
            text('X4 = ' + x4, 825, 230);
            fill(255);


            // after the key has been closed
            if (x1 != undefined && x2 != undefined && x3 != undefined && x4 != undefined) {
                if (state == "key in") {
                    let currPos = x - 438;
                    let totalDistance = 1098 - 438;
                    let distaceCM = Math.trunc((1 / totalDistance) * currPos * 100) - noDeflectionPoint;
                    let ratio = distaceCM / noDeflectionPoint;
                    ratio = constrain(ratio, -1, 1);
                    theta = ratio * (PI / 3);
                    theta = constrain(theta, -(PI / 3), (PI / 3));
                    strokeWeight(3);
                    line(width / 2 + 100, 440, (width / 2 + 100) + (50 * sin(theta)), 440 - (50 * cos(theta)));
                    strokeWeight(1);
                }

            }

            exp1.displayTable();
        } else {
            calc1.draw();
            calc2.draw();
            calc3.draw();
            calc4.draw();
            calc5.draw();
            // displaying the circuit images for switched off and on modes and creating the jockey mechanism
            if (state == "key in") {
                image(img1, 370, 100);
                circle(width / 2 + 100, 440, 100);
                stroke(255, 0, 0);
                line(width / 2 + 100, 440, width / 2 + 100, 390);
                stroke(0);

                circle(x, 480, 40);
                textAlign(CENTER);
                let temp1 = round((x - 435) / (1098 - 435) * 100)
                fill(0);
                text(temp1, x, 480)
                fill(255)
                textAlign(LEFT, BASELINE);
                if (state3 == "unlocked") {
                    x = constrain(mouseX, 435, 1098);
                }
                line(width / 2 + 10, 410, x, 515);
                circle(x, 515, 10);
            } else {
                image(img, 370, 100);
                stroke(0);
                line(width / 2 + 10, 410, (1098 + 435) / 2, 515);
                circle((1098 + 435) / 2, 515, 10);
            }

            // creating the buttons to assign the values of the R
            r1 = new button(260, 290, 100, 20, 3.0);
            r2 = new button(260, 320, 100, 20, 3.1);
            r3 = new button(260, 350, 100, 20, 3.2);
            r4 = new button(260, 380, 100, 20, 3.3);

            // background color
            //background(0, 0, 255);


            // creating the basic buttons
            // switch on/off the circuit
            switchOnOff.draw();
            // switching the experiment between finding rho and unknown resistance
            switchExp.draw();
            switchExp1.draw();
            // left gap button ; x2 = 0
            leftGap.draw();
            // right gap button ; x1 = 0
            rightGap.draw();
            // 4 buttons for the 4 possibles of R
            r1.draw();
            r2.draw();
            r3.draw();
            r4.draw();

            // showing the value of x1, x2, x3, x4
            fill(255, 100, 200);
            rect(520, 215, 60, 20);
            if (x1 != undefined) {
                fill(0);
                text('X1 = ' + x1, 530, 230);
            }
            fill(255, 100, 200);
            rect(960, 215, 60, 20);
            if (x2 != undefined) {
                fill(0);
                text('X2 = ' + x2, 970, 230);
            }
            fill(255, 100, 200);
            rect(665, 215, 60, 20);
            fill(0);
            text('X3 = ' + x3, 675, 230);
            fill(255, 100, 200);
            rect(815, 215, 60, 20);
            fill(0)
            text('X4 = ' + x4, 825, 230);
            fill(255);

            // after the key has been closed
            if (x1 != undefined && x2 != undefined && x3 != undefined && x4 != undefined) {
                if (state == "key in") {
                    let currPos = x - 438;
                    let totalDistance = 1098 - 438;
                    let distaceCM = Math.trunc((1 / totalDistance) * currPos * 100) - noDeflectionPoint;
                    let ratio = distaceCM / noDeflectionPoint;
                    ratio = constrain(ratio, -1, 1);
                    theta = ratio * (PI / 3);
                    theta = constrain(theta, -(PI / 3), (PI / 3));
                    strokeWeight(3);
                    line(width / 2 + 100, 440, (width / 2 + 100) + (50 * sin(theta)), 440 - (50 * cos(theta)));
                    strokeWeight(1);
                }

            }
            exp2.displayTable();
        }
    }
}

function mousePressed() {
    if (theory.mouseCollide()) {
        webState = 'theory';
        theory.buttonColor = [255 / 2, 255 / 2, 255 / 2];
        simulation.buttonColor = [0, 100, 100];
    }
    if (simulation.mouseCollide()) {
        webState = "simulation";
        simulation.buttonColor = [255 / 2, 255 / 2, 255 / 2];
        theory.buttonColor = [0, 100, 100];
    }
    if (webState == 'simulation') {
        if (switchExp.mouseCollide()) {
            exp = 0;
            switchOnOff = new button(670, 70, 100, 50, "switch ON/OFF");
            leftGap = new button(410, 200, 100, 50, "left gap");
            rightGap = new button(1030, 200, 100, 50, "right gap");
            state2 = "null";
            state = "key out";
            state3 = "unlocked";
            x1 = x2 = undefined;
            exp1 = new table(0);
            exp2 = new table(1);
            switchExp.buttonColor = [255 / 2, 255 / 2, 255 / 2];
            switchExp1.buttonColor = [0, 100, 100];
        }
        if (switchExp1.mouseCollide()) {
            exp = 1;
            switchExp1.buttonColor = [255 / 2, 255 / 2, 255 / 2];
            switchExp.buttonColor = [0, 100, 100];
        }

        if (exp == 0) {
            // managing switching on and off the cicuit
            if (switchOnOff.mouseCollide()) {
                if (state == "key in") {
                    state = "key out";
                    switchOnOff.buttonColor = [0, 100, 100];
                } else if (state == "key out") {
                    state = "key in";
                    switchOnOff.buttonColor = [255 / 2, 255 / 2, 255 / 2];
                }
            }

            // assigning the value of r and then assigning the values of x1 and x2
            // r1
            if (r1.mouseCollide()) {
                r = 0.1;
                if (state2 == "left") {
                    noDeflectionPoint = 43;
                } else if (state2 == "right") {
                    noDeflectionPoint = 62;
                }
                if (state2 == 'left') {
                    x1 = r;
                }
                if (state2 == 'right') {
                    x2 = r;
                }

                // r2
            } else if (r2.mouseCollide()) {
                r = 0.2;
                if (state2 == "left") {
                    noDeflectionPoint = 38;
                } else if (state2 == "right") {
                    noDeflectionPoint = 66.5;
                }
                if (state2 == 'left') {
                    x1 = r;
                }
                if (state2 == 'right') {
                    x2 = r;
                }
                // r3
            } else if (r3.mouseCollide()) {
                r = 0.3;
                if (state2 == "left") {
                    noDeflectionPoint = 35;
                } else if (state2 == "right") {
                    noDeflectionPoint = 70.5;
                }
                if (state2 == 'left') {
                    x1 = r;
                }
                if (state2 == 'right') {
                    x2 = r;
                }
                // r4
            } else if (r4.mouseCollide()) {
                r = 0.4;
                if (state2 == "left") {
                    noDeflectionPoint = 29;
                } else if (state2 == "right") {
                    noDeflectionPoint = 75;
                }
                if (state2 == 'left') {
                    x1 = r;
                }
                if (state2 == 'right') {
                    x2 = r;
                }
            }

            // left gap or right gap?
            if (leftGap.mouseCollide()) {
                x2 = 0;
                x1 = r;
                state2 = "left";
                leftGap.buttonColor = [255 / 2, 255 / 2, 255 / 2];
                rightGap.buttonColor = [0, 100, 100];
            }
            if (rightGap.mouseCollide()) {
                x1 = 0;
                x2 = r;
                state2 = "right";
                rightGap.buttonColor = [255 / 2, 255 / 2, 255 / 2];
                leftGap.buttonColor = [0, 100, 100];
            }

            // printing the values of the current position of the jockey wtr to left
            let currPos = x - 438;
            let totalDistance = 1098 - 438;
            // locking the jockey in place to take down the value of the length
            if (x1 != undefined && x2 != undefined && x3 != undefined && x4 != undefined) {
                if (state == "key in") {
                    if (mouseX > 370 && mouseX < 1170 && mouseY > 280 && mouseY < 550) {
                        if (state3 == "unlocked") {
                            state3 = "locked";
                            console.log(x)
                        } else {
                            state3 = "unlocked";
                        }
                    }
                }
            }

            // resetting all the values of the experiment to switch experiment

            // managing the function of adding the values of the circuit to the table

            // handling the inputting the data into the table mannually
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    if (exp1.buttonList[i][j].mouseCollide()) {
                        inputState = ["buttonOn", i, j];
                    }
                }
            }

            // calulating the last 2 columns
            if (calc1.mouseCollide()) {
                if ((exp1.data[1][1] != undefined) && (exp1.data[1][2] != undefined) && (exp1.data[1][3] != undefined)) {
                    exp1.data[1][4] = Math.abs(exp1.data[1][2] - exp1.data[1][3]).toFixed(3);
                    exp1.data[1][5] = (exp1.data[1][1] / exp1.data[1][4]).toFixed(3);
                    exp1.data[1][0] = 1;
                }
            }

            if (calc2.mouseCollide()) {
                if ((exp1.data[2][1] != undefined) && (exp1.data[2][2] != undefined) && (exp1.data[2][3] != undefined)) {
                    exp1.data[2][4] = Math.abs(exp1.data[2][2] - exp1.data[2][3]).toFixed(3);
                    exp1.data[2][5] = (exp1.data[2][1] / exp1.data[2][4]).toFixed(3);
                    exp1.data[2][0] = 2;
                }
            }

            if (calc3.mouseCollide()) {
                if ((exp1.data[3][1] != undefined) && (exp1.data[3][2] != undefined) && (exp1.data[3][3] != undefined)) {
                    exp1.data[3][4] = Math.abs(exp1.data[3][2] - exp1.data[3][3]).toFixed(3);
                    exp1.data[3][5] = (exp1.data[3][1] / exp1.data[3][4]).toFixed(3);
                    exp1.data[3][0] = 3;
                }
            }

            if (calc4.mouseCollide()) {
                if ((exp1.data[4][1] != undefined) && (exp1.data[4][2] != undefined) && (exp1.data[4][3] != undefined)) {
                    exp1.data[4][4] = Math.abs(exp1.data[4][2] - exp1.data[4][3]).toFixed(3);
                    exp1.data[4][5] = (exp1.data[4][1] / exp1.data[4][4]).toFixed(3);
                    exp1.data[4][0] = 4;
                }
            }

            if (calc5.mouseCollide()) {
                if ((exp1.data[1][5] != undefined) && (exp1.data[2][5] != undefined) && (exp1.data[3][5] != undefined) && (exp1.data[4][5] != undefined)) {
                    exp1.mean = ((exp1.data[1][5] + exp1.data[2][5] + exp1.data[3][5] + exp1.data[4][5] != undefined) / 4);
                }
            }

        } else {
            // managing switching on and off the cicuit
            if (switchOnOff.mouseCollide()) {
                if (state == "key in") {
                    state = "key out";
                    switchOnOff.buttonColor = [255 / 2, 255 / 2, 255 / 2];
                } else if (state == "key out") {
                    state = "key in";
                    switchOnOff.buttonColor = [0, 100, 100];
                }
            }

            // assigning the value of r and then assigning the values of x1 and x2
            // r1
            if (r1.mouseCollide()) {
                r = 3.0;
                if (state2 == "left") {
                    noDeflectionPoint = 81;
                } else if (state2 == "right") {
                    noDeflectionPoint = 21;

                }
                if (state2 == 'left') {
                    x1 = r;
                }
                if (state2 == 'right') {
                    x2 = r;
                }

                // r2
            } else if (r2.mouseCollide()) {
                r = 3.1;
                if (state2 == "left") {
                    noDeflectionPoint = 77;
                } else if (state2 == "right") {
                    noDeflectionPoint = 27;
                }
                if (state2 == 'left') {
                    x1 = r;
                }
                if (state2 == 'right') {
                    x2 = r;
                }
                // r3
            } else if (r3.mouseCollide()) {
                r = 3.2;
                if (state2 == "left") {
                    noDeflectionPoint = 72;
                } else if (state2 == "right") {
                    noDeflectionPoint = 30;
                }
                if (state2 == 'left') {
                    x1 = r;
                }
                if (state2 == 'right') {
                    x2 = r;
                }
                // r4
            } else if (r4.mouseCollide()) {
                r = 3.3;
                if (state2 == "left") {
                    noDeflectionPoint = 67;
                } else if (state2 == "right") {
                    noDeflectionPoint = 35;
                }
                if (state2 == 'left') {
                    x1 = r;
                }
                if (state2 == 'right') {
                    x2 = r;
                }
            }

            // left gap or right gap?
            if (leftGap.mouseCollide()) {
                x2 = "?";
                x1 = r;
                state2 = "left";
                leftGap.buttonColor = [255 / 2, 255 / 2, 255 / 2];
                rightGap.buttonColor = [0, 100, 100];
            }
            if (rightGap.mouseCollide()) {
                x1 = "?";
                x2 = r;
                state2 = "right";
                rightGap.buttonColor = [255 / 2, 255 / 2, 255 / 2];
                leftGap.buttonColor = [0, 100, 100];
            }

            // printing the values of the current position of the jockey wtr to left
            let currPos = x - 438;
            let totalDistance = 1098 - 438;

            // locking the jockey in place to take down the value of the length
            if (x1 != undefined && x2 != undefined && x3 != undefined && x4 != undefined) {
                if (state == "key in") {
                    if (mouseX > 370 && mouseX < 1170 && mouseY > 280 && mouseY < 550) {
                        if (state3 == "unlocked") {
                            state3 = "locked";
                        } else {
                            state3 = "unlocked";
                        }
                    }
                }
            }

            // managing the function of adding the values of the circuit to the table

            // handling the inputting the data into the table mannually
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    if (exp1.buttonList[i][j].mouseCollide()) {
                        inputState = ["buttonOn", i, j];
                    }
                }
            }

            // calulating the last 2 columns
            if (calc1.mouseCollide()) {
                if ((exp2.data1[1][1] != undefined) && (exp2.data1[1][2] != undefined) && (exp2.data1[1][3] != undefined)) {
                    exp2.data1[1][4] = (exp2.data1[1][2] - exp2.data1[1][3]).toFixed(3);
                    exp2.data1[1][5] = (Math.abs(exp2.data1[1][1]) + (rho * exp2.data1[1][4])).toFixed(3);
                    exp2.data1[1][0] = 1;
                }
            }

            if (calc2.mouseCollide()) {
                if ((exp2.data1[2][1] != undefined) && (exp2.data1[2][2] != undefined) && (exp2.data1[2][3] != undefined)) {
                    exp2.data1[2][4] = (exp2.data1[2][2] - exp2.data1[2][3]).toFixed(3);
                    exp2.data1[2][5] = (Math.abs(exp2.data1[2][1]) + rho * exp2.data1[2][4]).toFixed(3);
                    exp2.data1[2][0] = 2;
                }
            }

            if (calc3.mouseCollide()) {
                if ((exp2.data1[3][1] != undefined) && (exp2.data1[3][2] != undefined) && (exp2.data1[3][3] != undefined)) {
                    exp2.data1[3][4] = (exp2.data1[3][2] - exp2.data1[3][3]).toFixed(3);
                    exp2.data1[3][5] = (Math.abs(exp2.data1[3][1]) + rho * exp2.data1[3][4]).toFixed(3);
                    exp2.data1[3][0] = 3;
                }
            }

            if (calc4.mouseCollide()) {
                if ((exp2.data1[4][1] != undefined) && (exp2.data1[4][2] != undefined) && (exp2.data1[4][3] != undefined)) {
                    exp2.data1[4][4] = (exp2.data1[4][2] - exp2.data1[4][3]).toFixed(3);
                    exp2.data1[4][5] = (Math.abs(exp2.data1[4][1]) + rho * exp2.data1[4][4]).toFixed(3);
                    exp2.data1[4][0] = 4;
                }
            }

            if (calc5.mouseCollide()) {
                if ((exp2.data1[1][5] != undefined) && (exp2.data1[2][5] != undefined) && (exp2.data1[3][5] != undefined) && (exp2.data1[4][5] != undefined)) {
                    exp2.mean = ((exp2.data1[1][5] + exp2.data1[2][5] + exp2.data1[3][5] + exp2.data1[4][5] != undefined) / 4);
                }
            }
        }
    }
}

function keyTyped() {
    console.log(key, inputState);
    if (inputState[0] == "buttonOn") {
        if (key != "Enter") {
            if ((key in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) || key == '.') {
                if (exp == 0) {
                    exp1.buttonList[inputState[1]][inputState[2]].text += key;
                } else {
                    exp2.buttonList[inputState[1]][inputState[2]].text += key;
                }
            }
        } else {
            if (exp == 0) {
                exp1.data[inputState[1] + 1][inputState[2] + 1] = exp1.buttonList[inputState[1]][inputState[2]].text;
                inputState = ["buttonOff", undefined, undefined];
            } else {
                exp2.buttonList[inputState[1]][inputState[2]].text = exp2.buttonList[inputState[1]][inputState[2]].text;
                exp2.data1[inputState[1] + 1][inputState[2] + 1] = exp2.buttonList[inputState[1]][inputState[2]].text;
                inputState = ["buttonOff", undefined, undefined];
            }
        }
    }
}

function keyPressed() {
    if (inputState[0] == "buttonOn") {
        if (key != "Enter") {
            if (key === "Backspace") {
                if (exp == 0) {
                    exp1.buttonList[inputState[1]][inputState[2]].text = exp1.buttonList[inputState[1]][inputState[2]].text.slice(0, -1)
                } else {
                    exp2.buttonList[inputState[1]][inputState[2]].text = exp2.buttonList[inputState[1]][inputState[2]].text.slice(0, -1);
                }
            }
        }
    }
}