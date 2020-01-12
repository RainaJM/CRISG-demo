import { Component, OnInit } from "@angular/core";
import { HttpServiceService } from "./http-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "CRISG-demo";
  public data = [];
  public states = [];
  public cities = [];
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = "satellite";
  constructor(private httpService: HttpServiceService) {}
  ngOnInit() {
    this.getStates();
  }
  getStates() {
    this.httpService.getStatesData("/cities").subscribe(response => {
      this.data = response;
      if (this.data) {
        let statesRepeat = [];
        for (let i = 0; i < this.data.length; i++) {
          statesRepeat[i] = this.data[i].State;
        }
        this.states = statesRepeat.filter(
          (item, i, ar) => ar.indexOf(item) === i
        );
      }
    });
  }
  showCities(state) {
    let selectedStateObj = this.data.filter(item => {
      if (item.State == state) {
        return item.City;
      }
    });
    for (let i = 0; i < selectedStateObj.length; i++) {
      this.cities[i] = selectedStateObj[i].City;
    }
    console.log(this.cities);
  }
}
