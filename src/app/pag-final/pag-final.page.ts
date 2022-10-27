import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-pag-final',
  templateUrl: './pag-final.page.html',
  styleUrls: ['./pag-final.page.scss'],
})

export class PagFinalPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }
  scanResult:any;
  ngOnInit() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scanResult = barcodeData.text;
      console.log('Barcode data', this.scanResult);
      
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
