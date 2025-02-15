import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  topicList = [ "Pipes", "Forms", "Routing", "Lazy Loading","ETC"]

  constructor(private router: Router) {}

  selectTopic(item: string){
    const route = item.toLowerCase().replace(/\s/g, '-'); // Convert to lowercase and replace spaces
    this.router.navigate([route]);
  }

}
