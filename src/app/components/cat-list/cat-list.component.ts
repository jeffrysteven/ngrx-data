import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatService } from 'src/app/services/cat.service';
import { Cat } from 'src/app/dto/cat';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html'
})
export class CatListComponent implements OnInit {
  cats$: Observable<Cat[]>;
  loading$: Observable<boolean> = this.catService.loading$;

  constructor(private catService: CatService) {
    this.cats$ = catService.entities$;
  }

  ngOnInit() {
    this.catService.getAll();
  }
}
