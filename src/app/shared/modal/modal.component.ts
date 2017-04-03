import { Component, OnInit, Directive, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}

@Directive({
  selector: 'app-modal-header, app-modal-body' // tslint:disable-line
})
export class ModalDirectivesDirective {}
