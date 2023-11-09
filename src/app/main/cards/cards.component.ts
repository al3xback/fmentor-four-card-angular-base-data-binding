import { Component, Input } from '@angular/core';

import { Summary } from '../../shared/summary';
import { Card } from '../../shared/card';

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
	@Input() summary: Summary;
	@Input() cards: {
		supervisor: Card;
		teamBuilder: Card;
		karma: Card;
		calculator: Card;
	};
}
