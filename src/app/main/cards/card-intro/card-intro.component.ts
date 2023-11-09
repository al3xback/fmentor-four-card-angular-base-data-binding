import { Component, Input } from '@angular/core';

import { Summary } from '../../../shared/summary';

@Component({
	selector: 'app-card-intro',
	templateUrl: './card-intro.component.html',
	styleUrls: ['./card-intro.component.scss']
})
export class CardIntroComponent {
	@Input() summary: Summary;
}
