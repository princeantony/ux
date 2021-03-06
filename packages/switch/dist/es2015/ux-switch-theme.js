import { swatches } from '@aurelia-ux/core';
export class UxSwitchTheme {
    constructor() {
        this.themeKey = 'switch';
        this.track = swatches.grey.p300;
        this.indicator = swatches.white;
        this.trackActive = 'var(--ux-design--accent-light, #FF80AB)';
        this.indicatorActive = 'var(--ux-design--accent, #F48FB1)';
        this.trackDisabled = swatches.grey.p500;
        this.indicatorDisabled = swatches.grey.p300;
    }
}
