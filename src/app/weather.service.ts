import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'https://community-open-weather-map.p.rapidapi.com/weather';
apiKey = 'ecc6208181msh4d644dc2e8e4f9bp197f8cjsndf0fb3d66c45';

  constructor(private http: HttpClient) { }
  
  localvar: any;

  getWeatherDataByCoords(lat: any, lng: any){
    const httpHeaders = new HttpHeaders()
    .set('x-rapidapi-key', 'ecc6208181msh4d644dc2e8e4f9bp197f8cjsndf0fb3d66c45')
    .set('x-rapidapi-host', 'community-open-weather-map.p.rapidapi.com')
    let httpParams = new HttpParams()
    .set('lat', lat)
    .set('lon', lng)
    .set('units', 'imperial')

    const options = {  headers: httpHeaders, params: httpParams };

    return this.http.get(this.url,  options );
    
  }

  getWeatherDataByCityName(city: string){
    const httpHeaders = new HttpHeaders()
    .set('x-rapidapi-key', 'ecc6208181msh4d644dc2e8e4f9bp197f8cjsndf0fb3d66c45')
    .set('x-rapidapi-host', 'community-open-weather-map.p.rapidapi.com')
    let httpParams = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')

    const options = {  headers: httpHeaders, params: httpParams };

    return this.http.get(this.url, options);
  }
}
