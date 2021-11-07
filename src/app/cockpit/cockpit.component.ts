import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  newServerContent = '';

  @ViewChild('serverContent') serverContent : ElementRef;
  
  @Output() serverAdded = new EventEmitter<{name: string, content: string}>();
  @Output() bluePrintAdded = new EventEmitter<{name: string, content: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(servereName : HTMLInputElement) {
      this.serverAdded.emit({
      name: servereName.value,
      content: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(servereName : HTMLInputElement) {
      this.bluePrintAdded.emit({
      name: servereName.value,
      content: this.serverContent.nativeElement.value
    });
  }
}
