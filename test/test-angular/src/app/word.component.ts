import {Component} from "@angular/core";

@Component({
  template: '<h1>test bài tập {{title}}</h1>',
  selector: 'app-word'
})

export class WordComponent {
  title='hello';
}
