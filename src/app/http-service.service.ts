import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpServiceService {
  public baseUrl = "https://indian-cities-api-nocbegfhqg.now.sh";
  constructor(private http: HttpClient) {}
  getStatesData(url: any): Observable<any> {
    return this.http.get(this.baseUrl + url);
  }
}
