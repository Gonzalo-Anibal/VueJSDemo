import { Component } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent {
  // Puedes definir propiedades relacionadas con la información de pago aquí

  onSubmit() {
    // Agrega la lógica para procesar el pago aquí
    console.log('Pago procesado');
  }
}
