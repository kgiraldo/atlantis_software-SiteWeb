import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  getPackInformation(){
    return [
      {
        name : "Pack Pilotage",
        description : "Véritable outil qui accompagne la croissance et permet une meilleure analyse de votre ajoutée.",
        characteristic : 
        [
          {title : "Pack Essentiel", explanation: "Tous les outils du package essentiel"}
        ],
        aditional : "+ 10 modules de votre choix",
      },

      {
        name : "Pack Essentiel",
        description : "Idéal pour débuter l'organisations commerciale et la gestion des stocks.",
        characteristic : 
        [
          {title : "Gestion de ventes", explanation: "Plus d'efficacité dans l'enregistrement des commandes et des demandes clients."},
          {title : "Gestion des achats", explanation: "Aide à la décision à travers différentes méthodes de calcul des besoins."},
          {title : "Gestion des stocks", explanation: "Gérez votre plateforme de stockage, optimisez vos échanges entre agences."},
          {title : "Fiche de paramétrage", explanation: "Personnalisez votre environnement de travail grâce à un paramétrage accessible et puissant."},
          {title : "Statistiques", explanation: "Ayez une vision globale des capacités de votre société avec des analyses complètes et élaborées, utilisez des filtres pour les affiner."}
        ],
        aditional : "",
      },

      {
        name : "Pack  Évolution",
        description : "Optimise les processus avec votre problématique métier et votre exigence de qualité de service.",
        characteristic : 
        [
          {title : "Pack Essentiel", explanation: "Tous les outils du package essentiel"}
        ],
        aditional : "+ 5 modules de votre choix",
      }  
    ];
  }

  clickToContact(){
    this.router.navigate(['/contact']);
  }

}
