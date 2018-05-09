import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
/**
 * weather component
 */
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
0;
/**
   * for binding
   */
weatherjson: any =[]
/**
 * weather service
 * @param weatherService weatherservice
 */
  constructor(private weatherService: WeatherService) { }
/**
 * get weather on page load
 */
  ngOnInit() {
    this.getWeather()
  }
  /**
   * gets the weather from the api
   */
  getWeather() {
    this.weatherService.getWeather().subscribe(
      res => {this.weatherjson = res})
  }
  /**
   * updates weather every minute
   */
  updateWeather() {
    setTimeout(() => {
      this.updateWeather
    }, 60000);
    this.getWeather()
  }
}