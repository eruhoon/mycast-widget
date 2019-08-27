import { app, Menu, Tray } from 'electron';

export class VegaTray extends Tray {

    public constructor() {
        super('assets/img/app-icon.png');

        this.setToolTip('MyCast');

        const contextMenu = Menu.buildFromTemplate([
            /*{ label: 'Item1', type: 'radio' },
            { label: 'Item2', type: 'radio' },
            { label: 'Item3', type: 'radio', checked: true },
            { label: 'Item4', type: 'radio' },*/
            { label: 'separator', type: 'separator' },
            { label: 'Exit', role: 'quit' },
        ]);
        this.setContextMenu(contextMenu);
    }

}
