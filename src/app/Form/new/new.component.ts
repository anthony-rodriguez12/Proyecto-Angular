import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit{
  
  constructor(){}
  
  ngOnInit(): void {    
  }
  
  SaveData(form:NgForm){
    console.log("enviando datos");
    console.log(form);
    console.log(form.value);
  }
}
