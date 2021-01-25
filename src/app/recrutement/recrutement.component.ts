import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.scss']
})
export class RecrutementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getJobOffert(){
    return [
      {
        charge: "DEVELOPPEUR FULLSTACK (H/F)",
        description: "Vous êtes Geek ? Nous adorons ça. <br/>Rejoignez-nous et exprimez vos talents au sein de notre équipe en améliorant notre logiciel.<br/>Apportez également votre contribution en participant à nos projets Open Source.Passionné(e) par votre métier, curieux(se) vous maîtrisez les langages JAVASCRIPT (NODE JS), ANGULAR 2, JAVA et plus généralement l’OBJET. La connaissance d’ORACLE DB est un plus.",
        important: "2 postes sont à pourvoir : 1 junior (possibilité d’alternance) et 1 sénior expérimenté (expérience de 2 ans requise)",
        date: "25.06.18"
      },
      {
        charge: "DEVELOPPEUR FRONT (H/F)",
        description: "Vous aurez en charge la mise en forme et l’interface graphique du logiciel : votre travail est la vitrine d’Atlantis Software chez nos clients.<br/> <br/> Vous assurerez le développement de nos nouveaux objets graphiques.Passionné(e) et créatif(ve), vous maîtrisez ANGULAR 2, CSS/LESS, la programmation OBJET.<br/> Une expérience UI est appréciée.",
        important: "Ce poste est ouvert aux jeunes diplômés(es) et débutant(e)s avec une expérience en entreprise.",
        date: "25.06.18"
      },

    ];
  }

}
