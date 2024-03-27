import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jrr-app-rueda-jrr',
  templateUrl: './rueda-jrr.component.html',
  styleUrls: ['./rueda-jrr.component.css']
})
export class RuedaJrrComponent implements OnInit {
  ruletaRotation = 'rotate(0deg)';
  
  constructor() { }

  ngOnInit(): void {
  }

  girarRuleta() {
    // Generar un número aleatorio de vueltas completas entre 5 y 10
    const randomTurns = Math.floor(Math.random() * 6) + 5;
    // Calcular el ángulo total para completar esas vueltas
    const totalAngle = randomTurns * 360;
    // Generar un ángulo aleatorio adicional para el giro final
    const finalAngle = totalAngle + Math.floor(Math.random() * 360);
    // Aplicar la rotación final a la imagen de la ruleta
    this.ruletaRotation = `rotate(${finalAngle}deg)`;
  }
  
}
