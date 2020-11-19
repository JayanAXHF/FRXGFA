let menu_list = ["Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
];

function getmenu() {
    let htmldata;
    htmldata = "<ol class='menu'>"
    menu_list.sort();


    for (let index = 0; index < menu_list.length; index++) {
        htmldata = htmldata + "<li>" + menu_list[index] + "</li>"
    }

    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    let htmldata;
    let item = document.getElementById("add_item").value;
    menu_list.push(item);
    menu_list.sort();

    htmldata = "<section id = 'cards'>"
    for (let index = 0; index < menu_list.length; index++) {
        htmldata = " <div class='cards'>" + "<img src='https://image.shutterstock.com/image-photo/delicious-pizza-olives-sausages-on-260nw-1100491781.jpg'>" + menu_list[index] + "</div>"

    }
    htmldata = htmldata + "</section>"


    document.getElementById("addmenu_display").innerHTML = htmldata;
}