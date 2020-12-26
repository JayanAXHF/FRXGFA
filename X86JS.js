canvas = document.getElementById("Canvas1");


ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
rover_x = 10;
rover_y = 10;
rover_y2 = 100;



function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;


    background_imgTag.src = background_image;


    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;


    rover_imgTag.src = rover_image;

}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


addEventListener("keydown", keydown1);

function keydown1(e) {
    keyPressed = e.keyCode;

    console.log(keyPressed);

    if (keyPressed == "38") {
        //up
        if (rover_y >= 0) {
            rover_y = rover_y - 10;
            console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
            uploadBackground();
            uploadRover();
        }

    }
    if (keyPressed == "40") {
        //down
        if (rover_y <= 500) {
            rover_y = rover_y + 10;

            uploadBackground();
            uploadRover();
        }
    }

    if (keyPressed == "37") {
        //left
        if (rover_x >= 0) {
            rover_x = rover_x - 10;

            uploadBackground();
            uploadRover();
        }
    }

    if (keyPressed == "39") {
        //right
        if (rover_x <= 700) {
            rover_x = rover_x + 10;

            uploadBackground();
            uploadRover();

        }
    }
    if (e.shiftKey == true && keyPressed == "70") {
        rover_width = rover_width + 10;
        console.log("F ~ file: X86JS.js ~ line 92 ~ keydown1 ~ rover_width", rover_width);
        rover_height = rover_height + 10;
        console.log("F ~ file: X86JS.js ~ line 94 ~ keydown1 ~ rover_height", rover_height);
        localStorage.setItem("shift + f", rover_height + rover_width)
    }

    if (e.shiftKey == true && keyPressed == "66") {
        rover_width = rover_width - 10;
        console.log("F ~ file: X86JS.js ~ line 92 ~ keydown1 ~ rover_width", rover_width);
        rover_height = rover_height - 10;
        console.log("F ~ file: X86JS.js ~ line 94 ~ keydown1 ~ rover_height", rover_height);
        localStorage.setItem("shift + b", rover_height + rover_width)

    }


    if (keyPressed = "83") {
        newImage("https://lh6.googleusercontent.com/Gm4ExrJQ0HMD4DJ35On6ptiqT_nV4MNQZvMe8LwsRjO1dBLtsV3KLYD4a8Ef_ksLFocNWJLgMHrySdbk8taM=w1280-h665");
        uploadRover();

    }

    if (keyPressed = "72") {
        newImage("https://lh5.googleusercontent.com/VkpN1K9H700oOKEipeewRYkzqa0awRLHRPsqFKuSBQxp024DlFGKuR7-G5Q4OVsIxJNAp3Zf2VKcT5WtLiFE=w1280-h665")
    }
}
if (keyPressed == "38") {
    //up
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);

        uploadRover();
    }

}
if (keyPressed == "40") {
    //down
    if (rover_y <= 500) {
        rover_y = rover_y + 10;

        uploadRover();
    }
}

if (keyPressed == "37") {
    //left
    if (rover_x >= 0) {
        rover_x = rover_x - 10;


        uploadRover();
    }
}

if (keyPressed == "39") {
    //right
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadRover();

    }
}
