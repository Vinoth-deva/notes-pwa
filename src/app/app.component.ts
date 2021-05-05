import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mycustomNotespwa';
  private _router: Router;
  private _home = ['home'];

  constructor(private injector: Injector) {
    this._router = this.injector.get(Router);
  }

  ngOnInit(): void {
    this._router.navigate(this._home);
  }
}
