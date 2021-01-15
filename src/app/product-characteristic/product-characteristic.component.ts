import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-characteristic',
  templateUrl: './product-characteristic.component.html',
  styleUrls: ['./product-characteristic.component.scss']
})
export class ProductCharacteristicComponent implements OnInit {

  @Input() descriptionItems: any;

  constructor() { }

  ngOnInit(): void {
  }

}
