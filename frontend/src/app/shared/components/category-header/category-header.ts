import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-header',
  imports: [],
  templateUrl: './category-header.html',
  styleUrl: './category-header.css'
})
export class CategoryHeader {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
