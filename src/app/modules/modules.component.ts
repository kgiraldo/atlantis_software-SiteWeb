import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit {

  p:number =1;
  imageRoute:string;

  constructor() {
    this.imageRoute = "../../assets/img/SVG/";
  }

  ngOnInit(): void {
  }

  getModules(){
    return[
      {
        name: "Gestion de ventes",
        image : this.imageRoute+"gestion_ventes.svg",
        characteristics :
        [
          "Saisie de prise de commande, d’offre ou de devis.",
          "Édition des documents commerciaux, de  préparation de commande et bon de livraison.",
          "Génération des factures manuelles ou groupées, ou au comptoir.",
          "Génération des écritures comptables.",
          "Édition de documents de suivis et de portefeuille de commande ou d’offre."
        ]
      },

      {
        name: "Gestion des achats",
        image : this.imageRoute+"gestion_achats.svg",
        characteristics :
        [
          "Génération de commande de réapprovisionnement.",
          "Saisie assistée de commande de contre marque.",
          "Édition des documents de réception.",
          "Contrôle des factures fournisseurs.",
          "Génération des écritures comptables."
        ]
      },

      {
        name: "Gestion des stocks",
        image : this.imageRoute+"gestion_stocks.svg",
        characteristics :
        [
          "Définition des lieux et emplacements de stockage.",
          "Gestion automatique du stock.",
          "Saisie manuelle de mouvements de stock.",
          "Gestion des inventaires tournants ou en fin d’exercice.",
          "Valorisation du stock."
        ]
      },

      {
        name: "Gestion catalogue fournisseurs",
        image : this.imageRoute+"gestion_catalogues.svg",
        characteristics :
        [
          "Gestion automatique des ventes et achats.",
          "Intégration des catalogues fournisseurs sans rajout d’article dans la base.",
          "Lien automatique lors de la saisie de l’offre ou commande vers le catalogue fournisseur.",
          "Suivi du lien catalogue jusqu'à la commande d’achat.",
          "Mise à jour simplifiée des tarifs d’achat."
        ]
      },

      {
        name: "Fiche paramétrage",
        image : this.imageRoute+"parametrage.svg",
        characteristics :
        [
          "Intégration des processus métiers et des flux de gestion du Négoce.",
          "Couverture fonctionnelle Optimale."
        ]
      },

      {
        name: "Statistiques",
        image : this.imageRoute+"stadistiques.svg",
        characteristics :
        [
          "Éditions chiffre d’affaires global ou détaillé.",
          "Éditions palmarès article, commercial et fiche commerciale.",
          "Éditions portefeuilles divers.",
          "Éditions statistiques d’achats."
        ]
      },

      {
        name: "Réservations de stock",
        image : this.imageRoute+"reservation_stock.svg",
        characteristics :
        [
          "Disponibilité par agence et par lieu de stockage.",
          "Autorise le masquage d’un lieu de stockage dédié (libre service).",
          "Réservation dans l'ordre de saisie.",
          "Automatisation des échanges entre agences."
        ]
      },

      {
        name: "SAV",
        image : this.imageRoute+"sav.svg",
        characteristics :
        [
          "Estimation du prix de revient de la réparation.",
          "Suivi des temps passés par collaborateurs et par clients.",
          "Transformation en offre client."
        ]
      },

      {
        name: "Traitement différés",
        image : this.imageRoute+"traitement_differe.svg",
        characteristics :
        [
          "Lancement en arrière plan à des heures prédéfinies des traitements longs sans intervention humaine.",
          "Génération des statistiques, factures, etc..."
        ]
      },

      {
        name: "Gestion de la Relation Client",
        image : this.imageRoute+"relation_client.svg",
        characteristics :
        [
          "Gestion des informations clients (Email, adresses,...).",
          "Automatisation de l’activité commerciale (tâches, activités, commandes, documentations...).",
          "Campagne Emailing.",
          "Gestion des points cadeaux (fidélisations)."
        ]
      },

      {
        name: "Inter Agences / Inter Sociétés",
        image : this.imageRoute+"inter_agences.svg",
        characteristics :
        [
          "Gestion centralisée des tarifs de ventes et d'achat avec transfert sur les différentes sociétés partageant les mêmes prix.",
          "Échange entre sociétés du groupe facilités en évitant la ressaisie commande.",
          "Notion de groupe avec possibilité de CA consolidé."
        ]
      },

      {
        name: "Technique industrie",
        image : this.imageRoute+"technique_industrie.svg",
        characteristics :
        [
          "Attachement des options avec affichage en saisie de commande.",
          "Gestion des différentes nomenclatures.",
          "Saisie des temps passés avec suivi du prix de revient.",
          "Gestion des découpes et des montages.",
          "Édition des documents correspondants."
        ]
      },

      {
        name: "Gestion des lots / nuances",
        image : this.imageRoute+"gestion_lots.svg",
        characteristics :
        [
          "Comptabilisation du stock par lot (nuance, bain, lot, numéros de série, bobine, taille...).",
          "Attribution du lot en saisie de commande ou à la préparation ou la réception (contre marque).",
          "Inventaire détaillé par lot."
        ]
      },

      {
        name: "Remises en Banque",
        image : this.imageRoute+"remises_banque.svg",
        characteristics :
        [
          "Gérez vos différentes banques.",
          "Choisissez les modes de règlements pour vos remises et éditez vos bordereaux.",
          "Envoie des documents par EDI.",
          "Génération des écritures en comptabilité."
        ]
      },

      {
        name: "Enlèvements",
        image : this.imageRoute+"enlevements.svg",
        characteristics :
        [
          "Planifiez vos livraisons et contrôlez vos coûts de transports.",
          "Organisation des tournées et du chargement des camions.",
          "Regroupement et suivi des colis.",
          "Gestion des tarifs et édition des étiquettes transporteurs."
        ]
      },
      {
        name: "Appels d'Offres",
        image : this.imageRoute+"appels_offres.svg",
        characteristics :
        [
          "Interrogez vos fournisseurs sur des délais et des prix pour une affaire.",
          "Saisissez les réponses et trier les.",
          "Transformer partiellement ou totalement les réponses en commandes."
        ]
      },

      {
        name: "Royalties",
        image : this.imageRoute+"royalties.svg",
        characteristics :
        [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
      },

      {
        name: "Scannette",
        image : this.imageRoute+"scannette.svg",
        characteristics :
        [
          "Préparez vos livraisons, comptez votre inventaire en bipant les codes barres.",
          "Retrouver l’emplacement d’un produit en le scannant ou en saisissant son code article.",
          "Signalez qu’un produit est en rupture de stock au moment de votre passage devant le rayon."
        ]
      },

      {
        name: "Intranet Dynamique",
        image : this.imageRoute+"intranet.svg",
        characteristics :
        [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
      },


    ];
  }

}
