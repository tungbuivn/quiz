import { Component } from '@angular/core';
import { SoundService } from '../sound.service';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  constructor(public soundService: SoundService, private route: ActivatedRoute,
    private router: Router) {

  }
  home() {
    this.router.navigateByUrl("/choose")
    // this.location.path("/choose")

  }
}
