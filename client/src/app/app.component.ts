import { Component } from '@angular/core';
import { AddsService} from "../_service/adds.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  add = null;
  constructor(private addService: AddsService){

  }

  ngOnInit() {
    this.getAdsForSlots();
  }

  onNavigate(add){
    window.open(add.url);
    this.addService.recordClick(add).subscribe((res) => {})
  }

  //For getting max CPI
  getAdsForSlots(){
    this.addService.getAdvertisements().subscribe((results) => {
      let max = null;
      for(let list of results){
        if('listOfAdvertisements' in list){
          for(let add of list.listOfAdvertisements){
            if(max !== null) {
              if(max.cpi < add.cpi) {
                max = add;
              }
            }else{
              max = add;
            }
          }
        }
      }
      this.add = max;
    });

  }
}
