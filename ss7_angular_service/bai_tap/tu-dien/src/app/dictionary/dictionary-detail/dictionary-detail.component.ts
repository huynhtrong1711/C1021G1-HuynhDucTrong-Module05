import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  information : string;
id:number;
  constructor( private service: DictionaryService,
               private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((pa:ParamMap)=>{
      this.id = parseFloat(pa.get('id'));
      this.translate(this.id);
      console.log(this.information);
    })

  }

  translate(id : number) {

    this.information = this.service.translate(id)
  }
}
