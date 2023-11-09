import { Component, Input } from '@angular/core';

import { Card } from '../../../../shared/card';

@Component({
	selector: 'app-card-supervisor',
	templateUrl: './card-supervisor.component.html',
	styleUrls: ['./card-supervisor.component.scss']
})
export class CardSupervisorComponent {
	@Input() card: Card;
}
