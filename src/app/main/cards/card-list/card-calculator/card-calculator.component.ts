import { Component, Input } from '@angular/core';

import { Card } from '../../../../shared/card';

@Component({
	selector: 'app-card-calculator',
	templateUrl: './card-calculator.component.html',
	styleUrls: ['./card-calculator.component.scss']
})
export class CardCalculatorComponent {
	@Input() card: Card;
}
