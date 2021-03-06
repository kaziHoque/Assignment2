// Make connection to socket
// var socket = io.connect(String(process.env.IP) + ":" + String(process.env.PORT));

var socket = io.connect('https://assignment-2-v3-scarletmclearn.c9users.io/');


// API IMPLEMENTED/SOCKET FUNCTIONS

// Query of DOM
var msg = document.getElementById('msg'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

//  Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        msg: msg.value,
        handle: handle.value
    });
    msg.value = "";
});

msg.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})

// Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.msg + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});