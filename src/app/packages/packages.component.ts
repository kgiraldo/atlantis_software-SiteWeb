import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog } from '@angular/material/dialog';
import {ModalPackagesComponent} from '../modal-packages/modal-packages.component';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {


  constructor(private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getPackInformation(){
    return [

      {
        name : "Pack  Évolution",
        description : "Optimise les processus avec votre problématique métier et votre exigence de qualité de service.",
        characteristic :
        [
          {title : "Pack Essentiel", explanation: "Tous les outils du package essentiel"}
        ],
        aditional : "+ 5 modules de votre choix",
      },


      {
        name : "Pack Essentiel",
        description : "Idéal pour débuter l'organisations commerciale et la gestion des stocks.",
        characteristic :
        [
          {title : "Gestion de ventes", explanation: "Plus d'efficacité dans l'enregistrement des commandes et des demandes clients."},
          {title : "Gestion des achats", explanation: "Aide à la décision à travers différentes méthodes de calcul des besoins."},
          {title : "Gestion des stocks", explanation: "Gérez votre plateforme de stockage, comptez, valorisez rapidement votre stock."},
          {title : "Fiche de paramétrage", explanation: "Personnalisez votre environnement de travail grâce à un paramétrage accessible et puissant."},
          {title : "Statistiques", explanation: "Ayez une vision globale des capacités de votre société avec des analyses complètes et élaborées, utilisez des filtres pour les affiner."}
        ],
        aditional : "",
      },

      {
        name : "Pack Intégral",
        description : "Véritable outil qui accompagne la croissance et permet une meilleure analyse de votre valeur ajoutée.",
        characteristic :
        [
          {title : "Pack Essentiel", explanation: "Tous les outils du package essentiel"}
        ],
        aditional : "+ 10 modules de votre choix",
      }


    ];
  }

  clickToContact(pack:string){
    console.log(pack)
    const dialogRef = this.dialog.open(ModalPackagesComponent, {
      width: 'fit-content',
      panelClass: 'custom-modalbox',
      data: {pack: pack}
    });
  }

}
