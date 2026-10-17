import { Component,signal } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public router: Router) {}
  menuOpen= signal(false)
  closeMenu(){
    this.menuOpen.set(false);
  }
  toggleMenu(){
    this.menuOpen.update(open=>!open)
  }

}
