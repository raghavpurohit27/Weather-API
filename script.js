
   const searchbox =document.getElementById("input-box");
const displaydata=async()=>{
    try {
     
        const value = searchbox.value;
        console.log(value);
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=bab281d79e5f1e9755a68d754cc313e7&units=metric`;
        const data = await fetch(api);
        const realdata = await data.json();
        console.log(realdata);


        let city = document.getElementById('city');
        city.innerText=`${realdata.name},${realdata.sys.country}`;

        let temperature = document.getElementById('temp');
        temperature.innerHTML=`${Math.round(realdata.main.temp)}&deg;C`;


        let minMaxTemp = document.getElementById('min-max');
        minMaxTemp.innerHTML = `${Math.floor(realdata.main.temp_min)}&deg;C (min)/ ${Math.ceil(realdata.main.temp_max)}&deg;C (max) `;

        let weatherType = document.getElementById('weather');
        weatherType.innerText = `${realdata.weather[0].main}`;

        if(weatherType.innerText== 'Clear') {
            document.body.style.backgroundImage = "url('images/clear.jpg')";
            
        }
        else if(weatherType.textContent == 'Clouds') {
    
            document.body.style.backgroundImage = "url('images/cloud.jpg')";
            
        }
        else if(weatherType.textContent == 'Haze') {
    
            document.body.style.backgroundImage = "url('images/haze.jpg')";
            
        }     
        else if(weatherType.textContent == 'Rain') {
            
            document.body.style.backgroundImage = "url('images/rain.jpg')";
            
        } 
        else if(weatherType.textContent == 'Snow') {
            
            document.body.style.backgroundImage = "url('images/snow.jpg')";
        
        } 
        else if(weatherType.textContent == 'Thunderstorm') {
        
            document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
            
        } 
         
        let date= document.getElementById("date");
        let d = new Date();
        let datetoday= d.getDate();
        console.log(datetoday)

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let month = months[d.getMonth()];
        console.log(month);

        let day=days[d.getDay()];
        console.log(day);


        let year = d.getFullYear();
        console.log(year)

        date.innerText=`${datetoday} ${month} (${day}), ${year}`

        
    } catch (error) {
        
    }

}



searchbox.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        // console.log(searchbox.value);
        displaydata();
        document.querySelector('.weather-body').style.display = "block";
    }

})