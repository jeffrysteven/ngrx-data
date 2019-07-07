import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from './dto/cat';
import { CatService } from './services/cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'ngrx-data';
  cats$: Observable<Cat[]>;
  loading$: Observable<boolean> = this.catService.loading$;
  constructor(private catService: CatService) {
    this.cats$ = catService.entities$;
  }

  ngOnInit() {
    this.catService.getAll();
  }
}
