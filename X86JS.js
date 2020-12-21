canvas = document.getElementById("Canvas1");


ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
images = "https://i.pinimg.com/originals/d0/9c/4c/d09c4cfd1b93cc66dc13c8b461fd2145.jpg";
background_image = images;
rover_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
image2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvl3nVz5OV6ziClv6dufNHDFYi3OuBnQnI0w&usqp=CAU         "
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

function add2() {
    image2_imgTag = new Image();
    image2_imgTag.onload = uploadRover2;
    background_imgTag.src = background_image;

    image2_imgTag.src = image2;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadRover2() {
    ctx.drawImage(image2Tag, rover_x, rover_y2, rover_width, rover_height);
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
}