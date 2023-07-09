import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  
  getWeatherData(city)
  {   
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=61befef700d8bc5080e9b185e92827af' );
  }

  getForecastData(city)
  {   
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&exclude=hourly&appid=61befef700d8bc5080e9b185e92827af' );
  }

 
}
