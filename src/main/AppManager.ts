import { app, BrowserWindow, Tray } from 'electron';

import { VegaTray } from './view/tray/VegaTray';

export class AppManager {

    private static sInstance: AppManager | null = null;

    private mTray: Tray | null;
    private mWin: BrowserWindow | null;

    public static getInstance(): AppManager {
        if (this.sInstance === null) {
            this.sInstance = new AppManager();
        }
        return this.sInstance;
    }

    private constructor() {
        this.mWin = null;
        this.mTray = null;

        app.on('ready', () => {
            this.onReady();
            this.mTray = new VegaTray();
        });
    }

    private onReady(): void {
        this.createWindow();
    }

    private createWindow() {
        this.mWin = new BrowserWindow({
            height: 600,
            webPreferences: { nodeIntegration: true },
            width: 800,
        });
        this.mWin.loadFile('assets/vega_widget.html');
    }
}
