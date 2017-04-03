import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-air-quality',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirQualityComponent {
  @Input() number: number;
}
