import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <button
      (click)="to()"
      class="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
    >
      {{ label }} {{ counter }}
    </button>
  `,
})
export class MenuComponent {
  @Input()
  label: string = 'default label';

  @Input()
  counter: number | null = null;

  @Output()
  handleClick = new EventEmitter<void>();

  to() {
    this.handleClick.emit();
  }
}
