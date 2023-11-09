import { Component, Input } from '@angular/core';

import { Card } from '../../../../shared/card';

@Component({
	selector: 'app-card-karma',
	templateUrl: './card-karma.component.html',
	styleUrls: ['./card-karma.component.scss']
})
export class CardKarmaComponent {
	@Input() card: Card;
}
