import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-saller',
  templateUrl: './saller.component.html',
  styleUrls: ['./saller.component.css']
})
export class SallerComponent implements OnInit {

  @Input()
  private sallerId: number = 0;

  constructor(private routerInfo: ActivatedRoute) {
    this.routerInfo.params.subscribe((params: Params) => {
      this.sallerId = params['sallerId'];
    });
  }

  ngOnInit() {
  }

}
