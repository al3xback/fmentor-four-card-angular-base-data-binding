import { Component, Input } from '@angular/core';

import { Summary } from '../shared/summary';
import { Card } from '../shared/card';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent{
	@Input() summary: Summary;
	@Input() cards: {
		supervisor: string;
		teamBuilder: Card;
		karma: Card;
		calculator: Card;
	};
}
