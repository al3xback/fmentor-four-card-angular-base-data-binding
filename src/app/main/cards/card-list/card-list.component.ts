import { Component, Input } from '@angular/core';

import { Card } from '../../../shared/card';

@Component({
	selector: 'app-card-list',
	templateUrl: './card-list.component.html',
	styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
	@Input() cards: {
		supervisor: Card;
		teamBuilder: Card;
		karma: Card;
		calculator: Card;
	};
}
