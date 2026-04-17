import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  navItems: NavItem[] = [
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    { label: 'Tickets', path: '/tickets', icon: '🎫' },
    { label: 'Knowledge Base', path: '/knowledge-base', icon: '📚' },
    { label: 'SLA Management', path: '/sla', icon: '⚡' },
    { label: 'Reports', path: '/reports', icon: '📈' },
    { label: 'Admin', path: '/admin', icon: '⚙️' }
  ];
}