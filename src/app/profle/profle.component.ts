import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profle',
  templateUrl: './profle.component.html',
  styleUrls: ['./profle.component.css']
})
export class ProfleComponent implements OnInit {
   name = new FormControl();
   email = new FormControl();


  constructor() { }

  ngOnInit(): void {
  }
  save(){
    alert(this.name.value);
  }

}
