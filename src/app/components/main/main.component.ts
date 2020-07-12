import { Component, OnInit } from '@angular/core';
import { NWService } from '../../nw.service';

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
  isDev = this.nw.isNW() && window.globalThis.nw.process.versions['nw-flavor'] === 'sdk';

  public get versions(): string {
    const versions: string[] = [];
    if (this.nw.isNW()) {
      versions.push(`NW.js (v${window.globalThis.nw.process.versions.nw} ${window.nw.process.versions['nw-flavor']})`);
      versions.push(`Node.js (v${window.globalThis.nw.process.versions.node})`);
      versions.push(`Chromium (v${window.globalThis.nw.process.versions.chromium})`);
    }
    versions.push('Angular (v10.0.3)');

    versions[0] = `You are running ${versions[0]}`;
    if (versions.length > 1) {
      versions[versions.length - 1] = `and ${versions[versions.length - 1]}.`;
    }
    return versions.join(',\n');
  }

  public links: Link[];

  constructor(private nw: NWService) {
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
