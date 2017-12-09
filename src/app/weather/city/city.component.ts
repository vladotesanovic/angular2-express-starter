import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  @Input() name: string;
  @Input() image: string;
  @Input() longitude: number;
  @Input() latitude: number;
  @Output('select') select: EventEmitter<{}> = new EventEmitter<{}>();
}
