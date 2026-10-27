import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
