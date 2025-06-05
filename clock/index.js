
function updated(){
    const date = new Date();
    const hour=date.getHours().toString().padStart(2,0);
    const merdian=hour >= 12 ? "PM" : "AM";
    const minutes=date.getMinutes().toString().padStart(2,0);
    const seconds=date.getSeconds().toString().padStart(2,0);
    const timesetter =`${hour}:${minutes}:${seconds} ${merdian}`;
    document.getElementById("clock").textContent=timesetter;
}
updated();
setInterval(updated,1000);