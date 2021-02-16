import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import {ExtensionModalComponent} from '../extension-modal/extension-modal.component';

@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.scss']
})
export class ExtensionsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  getExtensionInfo(){
    return [
      {
        name: "B2B",
        types: [
          {
            name: "Web Client",
            description: "Proposez à vos clients de rejoindre votre extranet pour suivre leurs devis et commandes, réimprimer leurs bons de livraisons et leurs factures, consulter vos disponibilités et/ou vos tarifs, monter des paniers que vous transformerez en devis ou en commande suivant l’indication qu’ils vous auront donnée."
          }
        ],
        image :
        {
          img: "../../assets/img/extension_b2b.png",
          alt: "Woman hand's writing"
        }
      },

      {
        name: "B2C",
        types: [
          {
            name: "E-Négoce",
            description: "Extension du Webclient pour les clients qui n’ont pas de compte. Demande de référencement, achats avec paiements en ligne, consultation de vos tarifs publics, demande de valorisation."
          },
          {
            name: "Caisse",
            description: "Caisse comptoir délivrant des tickets ou des BL comme dans un supermarché. Recherche intuitive des articles par proposition de catégories de produits de plus en plus fines. Scan des produits avec codes à barre. Possibilité de mise en attente d’un client puis reprise. Calcul automatique du rendu de monnaie."
          }
        ],
        image:
        {
          img: "../../assets/img/extension_b2c.png",
          alt: "Men working on computers"
        }
      },

      {
        name: "Nomade",
        types: [
          {
            name: "Touch",
            description: "Donnez les moyens à vos représentants externes de préparer leurs visites. Visibilités des informations clients, de son encours, des incidents le concernant, de son chiffre d’affaire détaillé ou non."
          }
        ],
        image: {
          img:"",
          alt:""
        }
      },

      {
        name: "Contact",
        types: [
          {
            name: "Webmail",
            description: "Accédez à vos emails de partout et de différents systèmes en toute sécurité depuis un navigateur. Organiser vos emails par répertoires. Sauvegardez des brouillons pour retravaillez vos textes avant envoi."
          }
        ],
        image: {
          img:"",
          alt:""
        }
      },
    ];
  }

  showInfo(extension:any): void {
    const dialogRef = this.dialog.open(ExtensionModalComponent, {
      width: 'fit-content',
      panelClass: 'custom-modalbox',
      data: {extension: extension}
    });
  }

}
