import { app, BrowserWindow, Notification, Tray } from 'electron';

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

        const lock = app.requestSingleInstanceLock();
        if (!lock) {
            app.quit();
            return;
        }
        app.on('second-instance', (event, cmdLine, workingDir) => {
            if (this.mWin) {
                if (this.mWin.isMinimized()) {
                    this.mWin.restore();
                }
                this.mWin.focus();
            }
        });
        app.on('ready', () => {
            this.onReady();
            this.mTray = new VegaTray();

            let noti = new Notification({
                title: '알림 테스트',
                body: '알려라!!'
            });
            noti.on('click', () => {
                console.log(111);
            });
            noti.show();
        });
    }

    private onReady(): void {
        this.createWindow();
    }

    private createWindow() {
        const win = new BrowserWindow({
            center: false,
            height: 600,
            webPreferences: { nodeIntegration: true },
            width: 800,
        });
        win.webContents.openDevTools();
        //win.loadFile('assets/vega_widget.html');
        win.loadURL('http://mycast.xyz/');
        this.mWin = win;
    }
}
