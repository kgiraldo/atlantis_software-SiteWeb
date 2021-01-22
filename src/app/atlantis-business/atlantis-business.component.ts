import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atlantis-business',
  templateUrl: './atlantis-business.component.html',
  styleUrls: ['./atlantis-business.component.scss']
})
export class AtlantisBusinessComponent implements OnInit, DoCheck {

  sections:string;

  constructor(private router: Router) {
    this.sections ="packages";
    
  }

  ngOnInit(){ 
  }

  ngDoCheck(){
    if(this.router.url.includes('packages')){
      this.sections = "packages";
    } else if(this.router.url.includes('modules')){
      this.sections ="modules";
    } else if(this.router.url.includes('extensions')){
      this.sections = "extensions"
    }
    this.changeStyleSelectBar();
  }


  getBannerInfo(){
    return{
      title : "Sélectionnez votre package et évoluez avec nous",
      description : "Choisissez le meilleur choix pour votre entreprise. Laissez nous gérer pour vous. "
    };
  }

  getNavOption(){
    return{
      sections: [ 
        {name: "Packages", description: "Atlantis Business s'adapte à votre négoce par son approche modulaire qui vous permet d'évoluer, selon vos besoins." },
        {name: "Description des modules", description: "Fonctionnalités d'Atlantis Business, gestion commerciale." },
        {name: "Extensions", description: "" }
      ]
    };
  }

  //Click on Sections
  clickOnSections(name?:string){
    if(name === 'Packages'){
      this.sections ="packages";
    }else if(name === 'Description des modules'){
      this.sections ="modules";
    }else{
      this.sections ="extensions";
    }
    this.changeStyleSelectBar();
    this.router.navigate(['/atlantis/'+this.sections]);
  }

  changeStyleSelectBar(){
    const selected = document.getElementById('sc_selector') as HTMLElement;
    if(this.sections === "packages"){
      selected.style.left = '0';
      selected.style.width = '27%';
    } else if(this.sections === "modules"){
      selected.style.left = '25%';
      selected.style.width = '48%'
    } else if(this.sections === "extensions"){
      selected.style.left = '73%';
      selected.style.width = '27%';
    }
  }

  getTittleSection(){
    let titles = this.getNavOption().sections;
    let selection = (this.sections.substr(1, this.sections.length-1));
    let finalInfo = titles.find(el => el.name.includes(selection));
    return {
      title: finalInfo?.name,
      description : finalInfo?.description
    };
  }

}
