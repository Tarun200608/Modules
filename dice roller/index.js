function rolldice(){
    const numofdices=document.getElementById("numofdices").value;
    const diceresult=document.getElementById("diceresult");
    const diceimages=document.getElementById("diceimages");
    const values=[];
    const images=[];
    for(let i =0;i<numofdices; i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="images/image (${value}).png">`);
    }
    diceresult.textContent=`dice: ${values.join(', ')}`;
    diceimages.innerHTML=images.join('');

}