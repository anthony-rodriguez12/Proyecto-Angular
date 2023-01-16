import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource ,NgbCarousel, NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 1000;
		config.wrap = true;
		config.keyboard = false;
	}

  colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

  ngOnInit() {

  }

}
