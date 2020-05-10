import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {of} from 'rxjs';
import { CamelizePipe } from 'ngx-pipes';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private geoCoder;
  private locationCache: any = {

  };

  constructor(private camelizePipe: CamelizePipe) {}

  private cacheLocation(location: string , coordinates: any) {
    const camelizedLocation = this.camelizePipe.transform(location);
    this.locationCache[camelizedLocation] = coordinates;
  }

  private isLocationCached(location: string): boolean {
    return this.locationCache[this.camelizePipe.transform(location)];
  }

private  geoCodeLocation(location: string): Observable<any> {
  if(!this.geoCoder) {this.geoCoder = new (window as any).google.maps.Geocoder(); }
  return new Observable<any>(observer => {
    this.geoCoder.geocode({ address: location }, (result, status) => {
      if (status === 'OK') {
        const geometry = result[0].geometry.location;
        const coordinates = { lat: geometry.lat(), lng: geometry.lng() };
        this.cacheLocation(location, coordinates);
        observer.next(coordinates);
      } else {
        observer.error('location could not geocoder');
      }
    });
   });
}

  getGeoLocation(location: string): Observable<any> {
    this.geoCoder = new (window as any).google.maps.Geocoder();
    if (this.isLocationCached(location)) {
        of(this.locationCache[this.camelizePipe.transform(location)]);
      } else {
          return this.geoCodeLocation(location);
      }
  }
}
