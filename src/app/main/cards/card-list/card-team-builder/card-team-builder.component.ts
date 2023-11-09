import { Component, Input } from '@angular/core';

import { Card } from 'src/app/shared/card';

@Component({
	selector: 'app-card-team-builder',
	templateUrl: './card-team-builder.component.html',
	styleUrls: ['./card-team-builder.component.scss']
})
export class CardTeamBuilderComponent {
	@Input() card: Card;
}
