import { customElement, bindable } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { StyleEngine, UxComponent } from '@aurelia-ux/core';
import { UxGridTheme } from './ux-grid-theme';

const gridTheme = new UxGridTheme();

@inject(Element, StyleEngine)
@customElement('ux-grid')
export class UxGrid implements UxComponent {
  @bindable public theme: UxGridTheme;
  @bindable public columns: null | number;

  constructor(
    public element: HTMLElement,
    private styleEngine: StyleEngine) {
      styleEngine.ensureDefaultTheme(gridTheme);
    }

  public bind() {
    this.themeChanged(this.theme);

    if (this.columns != null) {
      this.columnsChanged(this.columns);
    }
  }

  public themeChanged(newValue: any) {
    if (newValue != null && newValue.themeKey == null) {
      newValue.themeKey = 'grid';
    }

    this.styleEngine.applyTheme(newValue, this.element);
  }

  public columnsChanged(newValue: null | number) {
    if (newValue != null) {
      this.element.style.setProperty('grid-template-columns', `repeat(${newValue}, 1fr)`);
    }
  }
}
