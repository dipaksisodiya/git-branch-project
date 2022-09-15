import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, } from 'rxjs';
import {map, startWith} from 'rxjs/operators'





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'gitHub-project';

  options : string[]=['Angular','JavaScript','Java','TypeScript']
 
  selectedOptions = this.options;

  inputdata(value){
    this.selectedOptions = this.search(value);
   
    
   
} 
search(value:string){

  let filter = value.toLowerCase();
  return this.options.filter(option =>
   option.toLowerCase().startsWith(filter)
    );
   
}
 


}    


