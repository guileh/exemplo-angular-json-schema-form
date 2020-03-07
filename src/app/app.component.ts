import { Component, OnInit } from '@angular/core';
import { sample } from './sample';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-form';
  current;
  schema: any;
  clients = [{
    id: 1,
        name: 'Jose Moreira',
        nickname: 'Ze',
        orders: [
            {
                product: 'sardinha',
                amount: 10,
                price: 20.0
            },
            {
                product: 'pão francês',
                amount: 50,
                price: 25.55
            },
            {
                product: 'manteiga',
                amount: 1,
                price: 19.90
            }
        ]
  }];
  showForm = false;

  constructor(){}

  ngOnInit(){
    this.current = null;
    this.schema = sample();
    console.log(this.schema.data);

  }


  closeForm() {
    this.showForm = false;
    this.current = null;
  }
 
  newClient() {
    this.current = null;
    this.schema.data = null;
    this.showForm = true;
  }

  getData(id: number) {
    //console.log(id);
    this.schema.data = this.clients.find(e => e.id === id);
    this.current = id;
    this.showForm = true;
    //console.log(this.schema.data)
  }

  getIndex(id: number) {
    return this.clients.findIndex(e => e.id === id);
  }

  postData(data: any) {
    if (this.current === null ) {
      data.id = this.clients.length + 1;
      //console.log(data.id);
      this.clients.push(data);
      this.schema.data = {};
      this.current = null;
    }
    else {
      //console.log(index);
      data.id = this.current;
      this.clients[this.getIndex(this.current)] = data;
      this.schema.data = {};
      this.current = null;
      //console.log(index);
    }
    this.showForm = false;
    //console.log(this.clients)
  }

  delete(id: number) {
     this.clients.splice(this.getIndex(id));
  }

  errorValidate(error) {
    console.log(error);
  }

}
