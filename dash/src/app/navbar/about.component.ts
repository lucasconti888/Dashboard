import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'about';
  userType: string | null;

  constructor(private router: Router, private authService: AuthService) {
    this.userType = this.authService.userType;
  }

  setActiveNavItem(event: Event) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.classList.remove('active');
    });
    (event.currentTarget as HTMLElement).classList.add('active');
  }

  navigateTo(path: string, event: MouseEvent) {
    this.router.navigate(['about', path]);
    this.setActiveNavItem(event);
  }
  
  handleClick3(event: MouseEvent) {
    if (this.userType === "user") {
      this.navigateTo('config', event);
    }
    else if (this.userType === "admin") {
      this.navigateTo('adm-config', event);
    }
    
  }
  
  handleClick2(event: MouseEvent) {
    if (this.userType === "user") {
      this.navigateTo('vision', event);
    }
    else if (this.userType === "admin") {
      this.navigateTo('adm-vision', event);
    }
  }
  
  handleClick(event: MouseEvent) {
    if (this.userType === "user") {
      this.navigateTo('dash', event);
    }
    else if (this.userType === "admin") {
      this.navigateTo('adm-dash', event);
    }
  }
  
}
