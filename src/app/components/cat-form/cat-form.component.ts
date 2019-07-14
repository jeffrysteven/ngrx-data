import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from 'src/app/dto/cat';
import { CatService } from 'src/app/services/cat.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent {
  cats$: Observable<Cat[]>;
  cat: Cat = { name: '', photo: '' };
  loading$: Observable<boolean> = this.catService.loading$;
  constructor(private catService: CatService) {
    this.cats$ = catService.entities$;
  }

  addCat(catForm: NgForm) {
    if (catForm.valid) {
      this.catService.add(this.cat).subscribe((cat) => {
        console.log('cat', cat);
        // call an action here and dispatch an effect for example
        catForm.reset();
      });
    }
  }
}
