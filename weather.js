let loc = document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");

searchButton.addEventListener('click',(e)=>

{

    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';
});

const getWeather=async(city)=>
{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a31620c479281ac9a658ea80bb8ce429`, {mode:'cors'});

            
            const weatherData=await response.json();
            console.log(weatherData);
            const{name}=weatherData;
            const{feels_like}=weatherData.main;
            const{id,main}=weatherData.weather[0];
            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=Math.round(feels_like-273);
            if(id<300 && id>=200)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064285.png"
                    }
                    if(id<400 && id>=300)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064321.png"
                    }
                    if(id<600 && id>=500)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064341.png"
                    }
                    if(id<700 && id>=600)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064317.png"
                    }
                    if(id<800 && id>=700)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064276.png"
                    }
                    document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + loc.textContent + "')";

                    
    }
        catch(error)
        {
            alert('city not found');
        }
};


window.addEventListener("load", ()=> {

    let long;
    let lat;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/"

                const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a31620c479281ac9a658ea80bb8ce429`
                fetch(api).then((response)=>
                {
                    console.log(response);
                    return response.json();
                })

                .then(data=>
                    {
                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];

                    loc.textContent=name;
                    climate.textContent=main;
                    tempvalue.textContent=Math.round(feels_like-273);
                    if(id<300 && id>=200)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064285.png"
                    }
                    if(id<400 && id>=300)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064321.png"
                    }
                    if(id<600 && id>=500)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064341.png"
                    }
                    if(id<700 && id>=600)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064317.png"
                    }
                    if(id<800 && id>=700)
                    {
                        tempicon.src="https://cdn-icons-png.flaticon.com/128/4064/4064276.png"
                    }

                    document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?coimbatore')";
                    console.log(data);
                    }
                    )
        })
    }
})