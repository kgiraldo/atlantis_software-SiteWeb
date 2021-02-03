import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Slider Functions
  @ViewChild('sc_pack_container', {static:true, read: DragScrollComponent}) carousel_pack: DragScrollComponent;
  defaultTouch = { x: 0, y: 0, time: 0 };

  //Size Window
  width:boolean;

  //Forms
  formData: FormGroup;

  constructor(private router:Router, private builder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formData = this.builder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  //Form Send Information
  onSubmit(data:any){
    const sujetMessage = "DEMANDE D'INFORMATION ATLANTIS BUSINESS";
    if(this.formData.valid){
      this.http.post('https://formspree.io/f/xwkwzbpj', {
        _subject: `${sujetMessage}`,
        email: data.value.email
      }).pipe(
        map(
          (response:any) => {
            if (response) {
              return response;
            }
          },
          (error:any) => {
            return error;
          }
        )
      ).subscribe(
        success => console.log('success'),
        error => console.log('error')
      );
      this.formData.reset();
    }
  }

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

  clickToContact(){
    this.router.navigate(['/contact']);
  }

  clickToPacks(){
    this.router.navigate(['/atlantis/packages']);
  }

  clickToMarketing(){
    this.router.navigate(['/commersialisation/mode-saas']);
  }


  @HostListener('window:resize', ['$event'])
  getSizeWindow(event:any){
    if(event.target.innerWidth >=800 && event.target.innerWidth <=1120 ){
      this.width =true;
    }else{
      this.width =false;
    }
  }

  //Touch Events
  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  handleTouch(event: any) {
    let touch = event.touches[0] || event.changedTouches[0];
    const slider = event.target as HTMLElement;
    if(slider.classList.contains('container_info_benefit') || slider.classList.contains('benefit_item') || slider.classList.contains('benefit_information')){
      // check the events
      if (event.type === 'touchstart') {
        this.defaultTouch.x = touch.pageX;
        this.defaultTouch.y = touch.pageY;
        this.defaultTouch.time = event.timeStamp;
      } else if (event.type === 'touchend') {
        let deltaX = touch.pageX - this.defaultTouch.x;
        let deltaTime = event.timeStamp - this.defaultTouch.time;

        // simulte a swipe -> less than 500 ms and more than 60 px
        if (deltaTime < 500) {
          // touch movement lasted less than 500 ms
          if (Math.abs(deltaX) > 60) {
            // delta x is at least 60 pixels
            if (deltaX > 0) {
              this.carousel_pack.moveLeft();
            } else {
              this.carousel_pack.moveRight();
            }
          }
        }
      }
    }
  }

}
