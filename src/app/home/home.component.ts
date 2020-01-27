import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  filings = [
    {
      'user_name': 'Hugo Sanchez',
      'selected': false,
      'name': 'Plantilla PQR',
      'filing_cod': '1231231231-123123',
      'subject': 'Queja',
      'type': 'Servicio al cliente',
      'state': 'Por vencer',
      'state_code': 3,
      'date': new Date(),
      'history': [{
        'state_name': 'Creación',
        'history_state_code': 1,
        'date': new Date(),
        'description': 'Creación de radicado'
      },
      {
        'state_name': 'En proceso',
        'history_state_code': 2,
        'date': new Date(),
        'description': 'Se encuentra en proceso'
      },
      {
        'state_name': 'Finalizada',
        'history_state_code': 3,
        'date': new Date(),
        'description': 'Se finaliza el rádicado'
      },
      {
        'state_name': 'Creación',
        'history_state_code': 2,
        'date': new Date(),
        'description': 'Creación de radicado'
      },
      {
        'state_name': 'Creación',
        'history_state_code': 1,
        'date': new Date(),
        'description': 'Creación de radicado'
      }]
    },
    {
      'user_name': 'Hugo Sanchez',
      'selected': false,
      'name': 'Rádicado 2',
      'filing_cod': '1231231231-123123',
      'subject': 'Queja',
      'type': 'Servicio al cliente',
      'state': 'Por vencer',
      'state_code': 3,
      'date': new Date(),
      'history': [{
        'state_name': 'Creación',
        'history_state_code': 3,
        'date': new Date(),
        'description': 'Creación de radicado'
      }]
    },
    {
      'user_name': 'Hugo Sanchez',
      'selected': false,
      'name': 'Rádicado 3',
      'filing_cod': '1231231231-123123',
      'subject': 'Queja',
      'type': 'Servicio al cliente',
      'state': 'Por vencer',
      'state_code': 3,
      'date': new Date(),
      'history': [{
        'state_name': 'Creación',
        'history_state_code': 3,
        'date': new Date(),
        'description': 'Creación de radicado'
      }]
    },
    {
      'user_name': 'Hugo Sanchez',
      'selected': false,
      'name': 'Rádicado 4',
      'filing_cod': '1231231231-123123',
      'subject': 'Queja',
      'type': 'Servicio al cliente',
      'state': 'A tiempo',
      'state_code': 1,
      'date': new Date(),
      'history': [{
        'state_name': 'Creación',
        'history_state_code': 1,
        'date': new Date(),
        'description': 'Creación de radicado'
      }]
    },
    {
      'user_name': 'Hugo Sanchez',
      'selected': false,
      'name': 'Contrato evaluación candidatos para otras',
      'filing_cod': '1231231231-123123',
      'subject': 'Pregunta',
      'type': 'Servicio al cliente',
      'state': 'Vencida',
      'state_code': 2,
      'date': new Date(),
      'history': [{
        'state_name': 'Creación',
        'history_state_code': 2,
        'date': new Date(),
        'description': 'Creación de radicado'
      }]
    }];
  filing_selected = undefined;

  ngOnInit() {
  }

  selectFiling(filing){

    for (let i = 0; i < this.filings.length; i++) {
      this.filings[i].selected = false;
    }

    this.filing_selected = filing;
  }

}
