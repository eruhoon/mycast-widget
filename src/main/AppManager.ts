import { app, BrowserWindow } from "electron";

export class AppManager {

    private static sInstance: AppManager | null = null;

    private mWin: BrowserWindow | null;

    public static getInstance(): AppManager {
        if (this.sInstance === null) {
            this.sInstance = new AppManager();
        }
        return this.sInstance;
    }

    private constructor() {
        this.mWin = null;

        app.on('ready', () => {
            this.onReady();
        });
    }

    private onReady(): void {
        this.createWindow();
    }

    private createWindow() {
        this.mWin = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: { nodeIntegration: true }
        });
        this.mWin.loadFile('assets/vega_widget.html');
    }
}
