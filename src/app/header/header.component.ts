import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedComponent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  selectComponent(component: string) {
    this.selectedComponent.emit(component);
  }
}
