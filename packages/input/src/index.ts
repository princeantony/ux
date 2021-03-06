import { FrameworkConfiguration, PLATFORM, bindingMode } from 'aurelia-framework';
import { ValueAttributeObserver, EventSubscriber } from 'aurelia-binding';
import { AureliaUX } from '@aurelia-ux/core';

export { UxInputTheme } from './ux-input-theme';
export { UxInput, UxInputElement } from './ux-input';

export function configure(config: FrameworkConfiguration) {
  config.container.get(AureliaUX).registerUxElementConfig(uxInputConfig);
  config.globalResources([
    PLATFORM.moduleName('@aurelia-ux/input/ux-input')
  ]);
}

const uxInputConfig = {
  tagName: 'ux-input',
  properties: {
    value: {
      defaultBindingMode: bindingMode.twoWay,
      getObserver(element: Element) {
        return new ValueAttributeObserver(element, 'value', new EventSubscriber(['change']));
      }
    }
  }
};
