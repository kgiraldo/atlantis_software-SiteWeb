import { Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog } from '@angular/material/dialog';
import {ContactModalComponent} from './contact-modal/contact-modal.component';

declare type ItemMenu = {
  name: string,
  linked: string,
  active: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atlantis-web';

  menuItems: ItemMenu[] = [
    {name: "Atlantis Business", linked: "/atlantis/packages", active: false},
    {name: "Commercialisation", linked: "/commersialisation/mode-saas", active: false},
    {name: "Nous Recrutons", linked: "/recrutement", active: false},
    {name: "Contact", linked: "/contact", active: false}
  ];

  showMenu:boolean;
  isHome:boolean;
  colorLogo:string;
  @ViewChild('sc_content_menu', {static:true}) menu: ElementRef;

  constructor(private router:Router, public dialog: MatDialog){

    //Init show Menu variable
    if(window.innerWidth <=800){
      this.showMenu=false;
    }else{
      this.showMenu =true;
    }

    if(this.router.url === "/"){
      this.isHome = true;
    }else{
      this.isHome =false;
    }
  }

  ngOnInit(): void {
     //Color
     if(window.innerWidth <=800 && this.isHome===true  ){
      this.colorLogo = 'white_logo';
    }else if(window.innerWidth <=800 && this.isHome===false ){
      this.colorLogo = 'blue_logo';
    } else{
      this.colorLogo = 'blue_logo';
    }
  }

  ngDoCheck(){
    if(window.innerWidth <=800){
      this.showMenu=false;
    }else{
      this.showMenu =true;
    }

    if(this.router.url === "/"){
      this.isHome = true;
    }else{
      this.isHome =false;
    }

    // Active class item_active
    this.menuItems.forEach(menu => {
      if (menu.linked === this.router.url) {
        menu.active = true;
      }else {
        menu.active = false;
      }
    });

    if(this.router.url === '/atlantis/modules' || this.router.url === '/atlantis/extensions'){
      this.menuItems[0].active = true;
    }

    //Color
    if(window.innerWidth <=800 && this.isHome  ){
      this.colorLogo = 'white_logo';
    }else if(window.innerWidth <=800 && !this.isHome ){
      this.colorLogo = 'blue_logo';
    } else{
      this.colorLogo = 'blue_logo';
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ContactModalComponent, {
      width: 'fit-content',
      panelClass: 'custom-modalbox'
    });
  }

  //Call to actions information
  getCtaInfo(){
    return {value: "L'aide d'un expert ?"}
  }

  // Mobile version
  @HostListener('window:resize', ['$event'])
  hideMenuMobile(event:any){
    if(event.target.innerWidth <=800){
      this.showMenu=false;
    } else{
      this.showMenu =true;
    }
  }

  openMenuMobile(){
    (this.menu.nativeElement as HTMLElement).style.right = "0";
    (this.menu.nativeElement as HTMLElement).style.opacity = "1";

  }

  closeMenuMobile(){
    (this.menu.nativeElement as HTMLElement).style.right = "-100%";
    (this.menu.nativeElement as HTMLElement).style.opacity = "0";
  }

  onClickMenu(url:string){
    this.router.navigate([url]);
    if(this.showMenu === false){
      this.closeMenuMobile();
    }
  }


}
