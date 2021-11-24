var socket = io.connect("http://localhost:3000/93creative");
socket.emit("connection");

$("#button").on("click",() => {
  socket.emit("isim yaz")
})

socket.on("herkese gonder",(data) => {
  $("body").append(data.name+"</br>")
})