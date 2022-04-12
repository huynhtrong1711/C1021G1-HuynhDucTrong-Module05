import {Component, Input, OnInit} from '@angular/core';
import {Dictionary} from '../../model/dictionary';
import {DictionaryService} from '../../service/dictionary.service';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {


  dictionary : Dictionary[] = [];

  constructor(private dictionaryService : DictionaryService) {
    this.dictionary =this.dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

}
