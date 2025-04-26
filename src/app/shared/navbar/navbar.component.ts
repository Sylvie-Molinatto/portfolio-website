import { Component, Input, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbOffcanvasModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, TranslateModule, RouterModule, NgbOffcanvasModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent{
  @Input() selectedLanguage!: 'gb' | 'it';
  @Input() selectedTheme!: 'light' | 'dark';
  @Input() languageMap!: { [key: string]: string };
  @Input() selectLanguage!: (language: 'gb' | 'it') => void;
  @Input() getLanguageName!: () => string;
  @Input() toggleTheme!: () => void;
  

  private readonly offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title', position: 'end' });
	}
}