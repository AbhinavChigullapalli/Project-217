const { name } = require("ejs");

const socket = io("/");

const name = prompt("Please enter your name")

$(function () {
    $("#send").click(function () {
        if ($("#chat_message").val().length !== 0) {
            console.log(user);
            socket.emit("message", $("#chat_message").val(), name);
            $("#chat_message").val("");
        }
    })
    $("#chat_message").keydown(function (e) {
        if (e.key == "Enter" && $("#chat_message").val().length !== 0) {
            socket.emit("message", $("#chat_message").val(), name);
            $("#chat_message").val("");
        }
    })
})

socket.on("createMessage", (message, user) => {
    $(".messages").append(`
        <div class="message">
            <b><span class="username"> ${user}: </span> </b>
            <span>${message}</span>
        </div>
    `)
});