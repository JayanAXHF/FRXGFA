// var SpeechRecognition = window.webkitSpeechRecognition;

// var recognition = new SpeechRecognition();

// function start() {
//     document.getElementById("textarea").innerHTML = "";

//     recognition.start();

// }

// recognition.onresult = function run(event) {
//     console.log(event);

//     var Content = event.results[0][0].transcript;

//     console.log(Content);


//     document.getElementById("textarea").innerHTML = Content;


// }



var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textarea").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textarea").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie --- ");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;

    speechData = document.getElementById("textarea").value;

    var Speech = new SpeechSynthesisUtterance(speechData);

    synth.speak(Speech);
    Webcam.attach(camera)
    Photo();
    save();
}
camera = document.getElementById("cameraFootage");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    png_quality: 100
});

function Photo() {
    Webcam.snap(function (photo) {
        document.getElementById("selfie").innerHTML = '<img id="selfie_image" src="' + photo + '"/>';

    })
}

function save() {
    link = document.getElementById("link");

    image = document.getElementById("selfie_image").src;

    link.href = image;

    link.click();

}