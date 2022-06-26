import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iconsdemo',
  templateUrl: './icons.component.html'
})
export class IconsComponent implements OnInit {

  icons: any[];

  filteredIcons: any[];

  selectedIcon: any;

  constructor() { }

  ngOnInit() {
      }

  onFilter(event: KeyboardEvent): void {
    const searchText = (event.target as HTMLInputElement).value;

    if (!searchText) {
        this.filteredIcons = this.icons;
    }
    else {
        this.filteredIcons = this.icons.filter( it => {
            return it.icon.tags[0].includes(searchText);
        });
    }
  }

}
