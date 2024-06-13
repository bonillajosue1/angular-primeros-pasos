import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  // template: `<p>list works!</p>`,
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number):void {
  //   // Emitir el ID del personaje
  //   console.log({index});
  //   this.onDelete.emit(index);
  //   //this.characterList.splice(index, 1);
  // }


  onDeleteCharacter(id: string):void {
    if( id ){
      // Emitir el ID del personaje
      console.log({id});
      this.onDelete.emit(id);
      //this.characterList.splice(index, 1);
    }
  }

}
