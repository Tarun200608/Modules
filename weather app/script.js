const weatherform = document.querySelector(".weatherform");
const cityinput=document.querySelector(".cityinput");
const card =document.querySelector(".card");
const apikey ="30969618f82bf242e31399415e64c984";

weatherform.addEventListener("submit",async event=>{
    event.preventDefault();
    const city = cityinput.value;
    if(city){
        try {
            const info=await getweatherdata(city);
            displayweatherinfo(info);
            
        } catch (error) {
            console.error(error);
            displayerror(error);
        }
    }
    else{
        displayerror("pls enter a valid city");
    }

});

async function getweatherdata(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    if(!response.ok){
        throw new Error("could not fetch the data");
    }
    return await response.json();
}

function displayweatherinfo(data){
    const {name:city,main:{temp,humidity},weather:[{description,id}]}=data;
    card.textContent="";
    card.style.display="flex"

    const citydispaly=document.createElement("h1");
    const tempdispaly=document.createElement("p");
    const humiditydispaly=document.createElement("p");
    const descdispaly=document.createElement("p");
    const weatheremoji=document.createElement("p");

    citydispaly.textContent=city;
    tempdispaly.textContent=`${(temp - 273.15).toFixed(1)}°C`;
    humiditydispaly.textContent=`Humidity:${humidity}%`;
    descdispaly.textContent=description;
    weatheremoji.textContent=getweatheremoji(id);

    citydispaly.classList.add("citydisplay");
    tempdispaly.classList.add("tempdisplay");
    humiditydispaly.classList.add("humiditydisplay");
    descdispaly.classList.add("descdisplay");
    weatheremoji.classList.add("weatheremoji");

    card.appendChild(citydispaly);
    card.appendChild(tempdispaly);
    card.appendChild(humiditydispaly);
    card.appendChild(descdispaly);
    card.appendChild(weatheremoji);

}

function getweatheremoji(weatherid){
    switch(true){
        case (weatherid >= 200 && weatherid<300):
            return "⛈️";
        case (weatherid >= 300 && weatherid<400):
                return "🌧️";
        case (weatherid >= 500 && weatherid<600):
                return "🌧️";
        case (weatherid >= 600 && weatherid<700):
                return "❄️";
        case (weatherid >= 700 && weatherid<800):
                return "🌫️";
        case (weatherid === 800):
                return "☀️";
        case (weatherid >= 801 && weatherid<810):
                return "😶‍🌫️";
        default:
            return "😱";

    }
}

function displayerror(message){
    const errordisplay =document.createElement("p");
    errordisplay.textContent=message;
    errordisplay.classList.add("errordisplay");

    card.textContent="";
    card.style.display ="flex";
    card.appendChild(errordisplay);
}