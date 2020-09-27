import {Component} from '@angular/core';
import {AgmMarker} from '@agm/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  position = {
    latitude: 51.678418,
    longitude: 7.809007,
  };

  constructor() {
    this._getCurrentLocation();
  }

  selectMarker($event: AgmMarker): void {
    console.log('select marker: ' + $event);
  }

  _setLocation(location): void {
    this.position = location;
  }

  _getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this._setLocation(position.coords);
      });
    }
  }

  max(coordType: 'latitude' | 'longitude'): number {
    return Math.max(this.position[coordType]);
  }

  min(coordType: 'latitude' | 'longitude'): number {
    return Math.min(this.position[coordType]);
  }

}
