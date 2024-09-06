import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PurchaseModule';
  supplierName:string="";

  constructor(private _http: HttpClient){
    
  }
  onSave(){
    this.saveSupplier().subscribe(response =>
    {
      alert("Suppliers Added successfully")

    });
    
  }
  saveSupplier()
  {
    var body = {SupplierName : this.supplierName}
    const headers = new HttpHeaders().set('content-type','application/json');
    return this._http.post("https://localhost:44367/Supplier",body,{headers});
  }
}
