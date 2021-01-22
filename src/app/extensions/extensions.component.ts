import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.scss']
})
export class ExtensionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getExtensionInfo(){
    return [
      {
        name: "B2B",
        types: ["Web Client"],
        image : 
        {
          img: "../../assets/img/extension_b2b.png",
          alt: "Woman hand's writing"
        }
      },

      {
        name: "B2C",
        types: ["E-Négoce", "Gestion Caisse"],
        image:
        {
          img: "../../assets/img/extension_b2c.png",
          alt: "Men working on computers"
        }
      },

      {
        name: "Nomade",
        types: ["Touch"],
        image: {
          img:"",
          alt:""
        }
      },

      {
        name: "Contact",
        types: ["Webmail"],
        image: {
          img:"",
          alt:""
        }
      },
    ];
  }

}
