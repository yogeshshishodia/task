import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  @Output() btnClickHere = new EventEmitter();

  @Input() text: string= '';

  @Input() color: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Add button");
    this.btnClick.emit();
    this.btnClickHere.emit();
  }


}
