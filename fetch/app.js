const apiUrl = "https://api.api-ninjas.com/v1/weather?city=mumbai";
// fetch(url,methods in form of objects)
// to hum fetch me url ke sath api key aur method isse dalenge
const keyData = {
    method: 'GET',
    headers: { 'X-Api-Key': 'O22W1laF8ZJUPrJsRLh+7A==LBJAILa0OlFzmRTv'}
}

async function getWeather(){
    let weather = await fetch(apiUrl,keyData)
    let data = await weather.json();
    console.log(data);
}
getWeather()