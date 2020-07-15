import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent{
  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe(({titulo})  => {
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
    }

   getArgumentosRuta(){
    this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data )
     )
     
   }
}
