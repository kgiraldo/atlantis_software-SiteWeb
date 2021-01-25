import { Component, DoCheck, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-commersialisation',
  templateUrl: './commersialisation.component.html',
  styleUrls: ['./commersialisation.component.scss']
})
export class CommersialisationComponent implements OnInit, DoCheck {

  typeMarketing:string;
  typeMobile:string;

  //Carousel
  @ViewChild('sc_carousel_benefits', {static:true, read: DragScrollComponent}) carousel: DragScrollComponent;
  posInit:number;
  slider:HTMLElement;

  constructor(private route: Router) {
    this.typeMarketing = "mode-saas";
    this.typeMobile = this.getSizeWindow();
  }

  ngOnInit(): void {
    this.changeSelectorPosition();
    this.typeMobile = this.getSizeWindow();
  }

  ngDoCheck(){
    if(this.route.url.includes('saas')){
      this.typeMarketing = "mode-saas";
    } else if(this.route.url.includes('acquisition')){
      this.typeMarketing ="mode-acquisition";
    }
    this.changeSelectorPosition();
    this.typeMobile = this.getSizeWindow();
  }

  //Resize window
  getSizeWindow(){
    const windowSize = window.innerWidth;
    let actualSize:string;
    if(windowSize>=350 && windowSize<=800){
      actualSize ="small";
    } else if(windowSize>=800 && windowSize<=1390) {
      actualSize= "medium";
    }else{
      actualSize="large";
    }
    return actualSize;
  }

  getModeMarketing(){
    return [ "Mode Saas", "Mode Acquisition"];
  }

  getBannerInfo(){
    if(this.typeMarketing.includes("acquisition")){
      return{
        title : "Mode Acquisition",
        image :"../../assets/img/ImageBanneraAcqui.png",
        description : "Atlantis Software, en qualité d'éditeur et d'intégrateur, accompagne la croissance de ses clients en intégrant leurs besoins spécifiques afin de faire converger leur métier avec le progiciel.",
        information: "Si l'entreprise possède un capital d'investissement et souhaite optimiser ses choix techniques, elle choisit alors l'achat du logiciel, sa mise en œuvre et son intégration, le matériel ainsi que le paiement d'une redevance annuelle de maintenance.<br /> <br />Atlantis Software dispose d'une méthodologie de conduite du changement et propose une gestion du projet d'intégration en six phases :",
        steps : [
          {
            order: "01",
            name: "Études",
            description : "Analyse générales des besoins,définition du planning détaillé."
          },
          {
            order: "02",
            name: "Développement",
            description : "Prototypages, paramétrage et tests."
          },
          {
            order: "03",
            name: "Validation",
            description : "Formation de l'équipe projet et tests de validation."
          },
          {
            order: "04",
            name: "Formation",
            description : "Formation des utilisateurs."
          },
          {
            order: "05",
            name: "Déploiement",
            description : "Phase de reprise des données."
          },
          {
            order: "06",
            name: " Maintenance",
            description : "Maintenance et garantie"
          }
        ],
        benefits : [
          {
            icon: "../../assets/icons/3d_icon.svg",
            title : "Maîtriser",
            description: "la méthodologie de gestion du projet."
          },
          {
            icon: "../../assets/icons/save.svg",
            title : "Garder",
            description: "une couverture fonctionnelle optimale."
          },
          {
            icon: "../../assets/icons/user.svg",
            title : "Optimiser",
            description: "son investissement en ressources humaines existantes."
          },
          {
            icon: "../../assets/icons/server.svg",
            title : "Être propriétaire",
            description: "de son infrastructure logicielle et matérielle."
          },
          {
            icon: "../../assets/icons/arrow-left-right.svg",
            title : "Disposer",
            description: "d’une réversibilité complète."
          },
          {
            icon: "../../assets/icons/enterprise.svg",
            title : "Répondre",
            description: "à une stratégie de l'entreprise d'internalisation."
          },
        ]
      };
    }else{
      return {
        title : "Mode Saas",
        image : "../../assets/img/ImageBannerSass.png",
        description: "Le SaaS ou comment une simple connexion Internet change l’approche de vos solutions informatiques",
        information : "L’informatique à la demande (ou SaaS) consiste à délivrer un service 24h/24, 7j/7 en se connectant simplement par des accès Internet à vos applications métier, hébergées sur des serveurs mutualisés par le fournisseur de services.<br /> <br />L’usage à ce service est facturé sous forme d’abonnement mensuel, ce qui permet la réduction des coûts de déploiement, d’exploitation et de maintenance des plateformes matérielles et logicielles.<br /> <br />Vous pouvez alors vous recentrer sur votre cœur de métier et vous appuyer sur notre expertise informatique et notre réactivité à vos demandes clients afin d’augmenter votre productivité.<br /> <br />Le SaaS témoigne d’une maturité de plus de 10 ans sur le marché logiciel et dispose aujourd’hui d’une gestion des risques et d’une sécurisation maximale des données.<br /> <br />Le prestataire de service reste dans tous les cas votre unique interlocuteur et s’engage à vos côtés, en maîtrisant les aspects fonctionnels.",
        benefits: [
          {
            icon: "../../assets/icons/arrow-repeat.svg",
            title : "Gagner",
            description: "en flexibilité et en souplesse."
          },
          {
            icon: "../../assets/icons/save.svg",
            title : "Garder",
            description: "une couverture fonctionnelle optimale."
          },
          {
            icon: "../../assets/icons/grid.svg",
            title : "Passer ",
            description: "d’un coût d’investissement à un coût de fonctionnement."
          },
          {
            icon: "../../assets/icons/connection-signal.svg",
            title : "Simplifier",
            description: "votre infrastructure : une connexion Internet suffit, disponible 24/24h."
          },
          {
            icon: "../../assets/icons/arrow-left-right.svg",
            title : "Disposer",
            description: "d’une réversibilité complète."
          },
          {
            icon: "../../assets/icons/clock.svg",
            title : "Réduire",
            description: "le délai de mise en œuvre."
          },
          {
            icon: "../../assets/icons/card-text.svg",
            title : "Disposer",
            description: "d’un paiement à l’accès, modulaire."
          },
          {
            icon: "../../assets/icons/security.svg",
            title : "Opter",
            description: "pour une sécurisation maximum."
          },
        ]

      }
    }
  }

  clickOnTypeMarketing(type:string){
    let itemSelect = type.toLocaleLowerCase();
    if(itemSelect.includes("saas")){
      this.typeMarketing = "mode-saas";
    }else if(itemSelect.includes('acquisition')){
      this.typeMarketing = "mode-acquisition";
    }

    this.route.navigate(['/commersialisation/'+this.typeMarketing]);
  }

  changeSelectorPosition(){
    const selectorType = document.getElementById('sc_selector_type') as HTMLElement; 
    if(this.typeMarketing.includes('saas') && this.typeMobile.includes('large')){
      selectorType.style.right= "37%";
    } else if(this.typeMarketing.includes('acquisition') && this.typeMobile.includes('large')){
      selectorType.style.right= "5%";
    } else if(this.typeMarketing.includes('saas') && this.typeMobile.includes('small')){
      selectorType.style.right = "70%"; 
    }  else if(this.typeMarketing.includes('acquisition') && this.typeMobile.includes('small')){
      selectorType.style.right = "30%"; 
    }else if(this.typeMarketing.includes('saas') && this.typeMobile.includes('medium')){
      selectorType.style.right = "50%"; 
    } else if(this.typeMarketing.includes('acquisition') && this.typeMobile.includes('medium')){
      selectorType.style.right = "10%"; 
    }
  }

//Touch Events
  @HostListener('document:touchmove', ['$event'])
  moveSlider(event:any){
    event.preventDefault();
    const slider = event.target as HTMLElement;
    if(slider.classList.contains('container_info_benefit') || slider.classList.contains('benefit_item') || slider.classList.contains('benefit_information')){
      this.carousel.moveRight();
    }
  }
  

}
