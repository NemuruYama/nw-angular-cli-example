import { Component, OnInit } from '@angular/core';

interface Link {
  title: string;
  url: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'nw-angular';
  isDev = window.globalThis.nw.process.versions['nw-flavor'] === 'sdk';

  versions = '' +
    'You are running NW.js (v' + window.globalThis.nw.process.versions.nw + ' ' + window.nw.process.versions['nw-flavor'] + '), ' +
    'Node.js (v' + window.globalThis.nw.process.versions.node + '), ' +
    'Chromium (v' + window.globalThis.nw.process.versions.chromium + '), ' +
    'and Angular (v10.0.3).';

  public links: Link[];

  constructor() {
    this.links = [
      {
        title: 'Angular Tutorial',
        url: 'https://angular.io/tutorial'
      },
      {
        title: 'Angular CLI Documentation',
        url: 'https://angular.io/cli'
      },
      {
        title: 'NW.js Documentation',
        url: 'https://nwjs.io'
      }
    ];
  }

  public open(evt: Event, link: Link) {
    evt.preventDefault();
    window.globalThis.nw.Shell.openExternal(link.url);
  }

  public openDevTools(evt: Event) {
    evt.preventDefault();
    window.globalThis.nw.Window.get().showDevTools();
  }

  ngOnInit(): void {
  }

}
