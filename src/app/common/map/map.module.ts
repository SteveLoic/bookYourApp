import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { NgPipesModule } from 'ngx-pipes';
import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  providers: [CamelizePipe],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4uaXKaZt-wBspEDOOb_AxkV-TN-dVtuU',
    }),
    NgPipesModule,
  ],
})
export class MapModule {}
