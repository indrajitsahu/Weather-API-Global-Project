# Weather-API-Global-Project

This is a weather API app that fetches multiple places with realtime weather data from an API and show it with a pretty UI.

![image](https://user-images.githubusercontent.com/76425862/187028705-5ace8d75-a58d-4bff-bb67-15a3ae01bfab.png)

![image](https://user-images.githubusercontent.com/76425862/187028708-b25d7d12-91e0-4592-9f0c-6209c8c4b0be.png)


### Features
- Shows you the temperature at that location
- Can fetch multiple locations in a single run
- The UI is user-friendly and visually appealing
- Shows you the current weather conditions through images
- Updating the API every time for better results

### The API link
> http://api.weatherapi.com/v1/current.json?key=aef54d40b58b45a48f7165549221408&q=London&aqi=no

Bdw this is my API link, may be not workable for yours, but you can create yours from [Weather API](https://www.weatherapi.com/).

The response would be like this:

```
  {
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1661600888,
        "localtime": "2022-08-27 12:48"
    },
    "current": {
        "last_updated_epoch": 1661600700,
        "last_updated": "2022-08-27 12:45",
        "temp_c": 23.0,
        "temp_f": 73.4,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "wind_mph": 4.3,
        "wind_kph": 6.8,
        "wind_degree": 70,
        "wind_dir": "ENE",
        "pressure_mb": 1019.0,
        "pressure_in": 30.09,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 47,
        "cloud": 25,
        "feelslike_c": 25.0,
        "feelslike_f": 76.9,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 4.0,
        "gust_mph": 6.7,
        "gust_kph": 10.8
    }
}
```

