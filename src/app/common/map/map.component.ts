import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'byh-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() location: string;
  lat =0;
  lng =0;
  isPositionError = false;

  constructor(private mapService: MapService, private ref: ChangeDetectorRef) {}

  ngOnInit() {}

  mapReadyHandler() {

    this.mapService.getGeoLocation(this.location).subscribe(
      (coordinates) => {
      this.lat = coordinates.lat;
      this.lng = coordinates.lng;
      this.ref.detectChanges();
    },
    () => {
      this.isPositionError = true;
    }
    );
  }
}
