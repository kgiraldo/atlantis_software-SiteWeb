import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Get Address Information
  getAddressInfo(){
    return{
      campus: [
        { name : "Agence", address:"12 rue Edinson | 69500, Bron "},
        { name: "Siège social", address: "10 Bd de la Foire | 1528, Luxembourg "}
      ]
    };
  }

}
