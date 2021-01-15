import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Slider Functions
  posInitial:any;
  posX:any;
  posXMove:any;
  posFinal:any;
  slider: any;
  threshold:number;
  allowShift:boolean;
  index:number;
  slidesLength:any;
  slideSize:any;

  //Size Window
  width:boolean;


  constructor() {
    //Slider variables packs section
    this.threshold =100;
    this.index=0;
    this.allowShift =true;
    this.width =false;
  }

  ngOnInit(): void {}

  //Header Information
  getHeaderInfo(){
    return{
      importantMessage :"Full Web | Licences ou SAAS",
      title : "Atlantis Business",
      subtitle : "Automatise l'intégralité de votre activité de négoce",
      description :"Fidélisez vos clients en toute simplicité. Pour en savoir plus, demandez l'aide d'un expert :"
    };
  }

  //Society Information
  getSocietyInfor(){
    return{
      spanSectionEntreprise : "la societé",
      titleSectionEntrprise : "Atlantis Software",
      characteristics :[
        { 
          image: "../../assets/img/ProduitVedette.png", 
          title: "Produit Vedette", 
          description: "Atlantis Business un logiciel évolutif qui vous permet d'automatiser, améliorer et bénéficier votre activité de négoce. Full web - Licences ou SAAS."
        },
        {
          image: "../../assets/img/Services.png", 
          title: "Services", 
          description: "Mettre à votre disposition des experts afin de maintenir une qualité de service optimum."
        },
        {
          image: "../../assets/img/Specialite.png", 
          title: "Specialité", 
          description: "Le métier du négoce, avec une forte capacité à intégrer les besoins des clients. Spécialiste des TPE et PME."
        },
        {
          image: "../../assets/img/Societe.png", 
          title: "Societé", 
          description: "Éditeur et Intégrateur d'une solution de gestion commerciale dédiée aux métiers du Négoce."
        }
      ]
    };
  }

  //Services Information
  getServicesInfo(){
    return{
      spanSectionServices :"atlantis software c'est aussi...",
      titleSectionServices : "Autres Produits",
      descriptionServicesText : "Nous somme un seul fournisseur pour tous vos besoins.",
      otherServices :[
        {name: "Réseaux et système"}, {name: "Hébergement"}, {name: "Sauvegarde distante"}, {name: "Matériel"}, {name: "Téléphonie"}, {name:"Securité"}
      ]
    };
  }

  //Procduct Information
  getProductInfo(){
    return{
      spanSectionProduct :"notre produit",
      titleSectionProduct :"Atlantis Business votremeilleur choix aux métiers négoce...",
      descriptionProductText :"Le logiciel s'adapte à votre négoce par son approche modulaire qui vous permet d'évoluer.",
      descriptionItems : [
        {
          title: "Automatisation",
          description: "Atlantis Business traite et automatise votre activité en bénéficiant la vision globale de votre entreprise.",
          image : "../../assets/img/product_c1.png",
          alt_image: "Business People Talking"
        },
        {
          title: "Fidélisation",
          description: "Atlantis Business fidélise vos clients en accélérant vos processus de vente.",
          image : "../../assets/img/product_c2.png",
          alt_image: "Business People Shakinh Hands"
        },
        {
          title: "Modules",
          description: "Atlantis Business adopte l'option de choisir les modules plus adaptés à votre activité.",
          image : "../../assets/img/product_c3.png",
          alt_image: "Business People In A Meeting"
        }
      ]
    };
  }

  //Slider Packs
  @HostListener('document:touchstart', ['$event']) 
  startSlider(event:any){
    this.slider = document.getElementById('sc_pack_container');
    this.slidesLength = (this.slider as HTMLElement).childElementCount;
    this.slideSize = ((this.slider as HTMLElement).children[0] as HTMLElement).offsetWidth;

    event = event || window.event;
    event.preventDefault();
    this.posInitial = this.slider.offsetLeft;
    
    
    if (event.type == 'touchstart') {
      this.posX = event.touches[0].clientX;
    } 
  }

  @HostListener('document:touchmove', ['$event']) 
  moveSlider(event:any){
    event = event || window.event;
    
    if (event.type == 'touchmove') {
      this.posXMove = this.posX - event.touches[0].clientX;
      this.posX = event.touches[0].clientX;
    } else {
      this.posXMove = this.posX - event.clientX;
      this.posX = event.clientX;
    }
    this.slider.style.left = (this.slider.offsetLeft - this.posXMove) + "px";
  }

  @HostListener('document:touchend', ['$event']) 
  endSlider(){
    this.posFinal = this.slider.offsetLeft;
    
    if (this.posFinal - this.posInitial < - this.threshold) {
      this.shiftSlide(1, 'drag');
    } else if (this.posFinal - this.posInitial > this.threshold) {
      this.shiftSlide(-1, 'drag');
    } else {
      this.slider.style.left = (this.posInitial) + "px";

    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  shiftSlide(dir:number, action:string) {
    if (this.allowShift) {
      if (!action) { this.posInitial = this.slider.offsetLeft; }
      
      if (dir == 1) {
        if(this.index < this.slidesLength - 4){
          this.slider.style.left = (this.posInitial - this.slideSize) + "px";
          this.index++;  
        }else{
          this.slider.style.left = this.posInitial + "px";
        }
            
      } else if (dir == -1) {
        if(this.index > 0){
          this.slider.style.left = (this.posInitial + this.slideSize) + "px";
          this.index--;  
        }else{
          this.slider.style.left = this.posInitial + "px";
        }   
      }
    };
    
    this.allowShift = false;
  }

  //Pack Info
  getPacksInfo(){
    return {
      span : "packs",
      title: "Choisissez votre package Atlantis Business",
      packs : [
        {
          icon: "../../assets/icons/pack_evol.svg" , 
          name: "Le Pack Évolution", 
          description: "Optimise les processus avec votre problématique métier et votre exigence de qualité de service.",
          cta:"obtenir package"
        },
        {
          icon: "../../assets/icons/pack_essentiel.svg" , 
          name: "Le Pack Essentiel", 
          description: "Idéal pour débuter l'organisation commerciale et la gestion des stocks.",
          cta:"obtenir package"
        },
        {
          icon: "../../assets/icons/pack_pilot.svg" , 
          name: "Le Pack Pilotage", 
          description: "Véritable outil qui accompagne votre croissance et permet une meilleure analyse de votre valeur ajoutée.",
          cta:"obtenir package"
        }
      ]
    }
  }

  //Comercialisation Info
  getMarketingInfo(){
    return{
      span: "obtenir atlantis business",
      title: "Commercialisation",
      types: [
        {
          mode:"SAAS",
          description: "Ce service facturé sous forme d'abonnement inclut l'usage des licences, l'assistance des utilisateurs et l'évolution du logiciel."
        },
        {
          mode:"Acquisition",
          description: "Si vous possédez un capital d'investissement et souhaitez maîtriser votre environnement, vous choisirez l'acquisition du logiciel."
        }
      ]
    }
  }

  @HostListener('window:resize', ['$event']) 
  getSizeWindow(event:any){
    if(event.target.innerWidth >=800 && event.target.innerWidth <=1120 ){
      this.width =true;
    }else{
      this.width =false;
    }
  }

}
