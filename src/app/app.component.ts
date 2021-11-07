import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server", name: "Element name", content: "this is a content"}];
 
  onAddServer(serverEvent: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverEvent.name,
      content: serverEvent.content
    });
  }

  onAddBlueprint(bluePrintEvent: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintEvent.name,
      content: bluePrintEvent.content
    });
  }
}
