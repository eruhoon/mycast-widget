import { Tray } from 'electron';

export class VegaTray extends Tray {

    public constructor() {
        super('assets/img/app-icon.png');

        this.setToolTip('MyCast');
    }

}
