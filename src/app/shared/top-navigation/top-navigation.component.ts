import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  @ViewChild('topnav') topnav: ElementRef;

  constructor() { }

  ngOnInit() {}

  toggle() {
    this.topnav.nativeElement.classList.toggle(['responsive']);
  }

}
