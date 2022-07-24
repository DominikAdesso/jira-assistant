import { CHROME_WS_URL } from '../constants/urls';
import { AppVersionNo } from '../constants/common';
import BrowserBase from '../common/BrowserBase';
// ToDo: need to pull url
export default class DevBrowserService extends BrowserBase {
    constructor() {
        super();
        /* Commented as no reference found
        this.notSetting = {
            init: () => {
                if (this.notSetting.curShowing) {
                    return;
                }
                this.chrome.notifications.onButtonClicked.addListener(this.notSetting.buttonClicked);
                this.chrome.notifications.onClicked.addListener(this.notSetting.onClicked);
                this.chrome.notifications.onClosed.addListener(this.notSetting.onClosed);
                this.notSetting.curShowing = {};
            },
            buttonClicked: (id, index) => {
                const noti = this.notSetting.curShowing[id];
                if (noti) {
                    const btn = noti.buttons[index];
                    if (btn && btn.onClick) {
                        btn.onClick();
                    }
                    else {
                        // eslint-disable-next-line no-alert
                        alert("This functionality is not yet implemented!");
                    }
                    this.chrome.notifications.clear(id);
                }
            },
            onClicked: (id, byUser) => {
                const noti = this.notSetting.curShowing[id];
                if (noti) {
                    if (noti.onClicked) {
                        noti.onClicked(byUser);
                    }
                }
            },
            onClosed: (id, byUser) => {
                const noti = this.notSetting.curShowing[id];
                if (noti) {
                    delete this.notSetting.curShowing[id];
                    if (noti.onClosed) {
                        noti.onClosed(byUser);
                    }
                }
            },
            show: (id, title, message, ctxMsg, opts) => {
                const msgObj = {
                    type: "basic",
                    iconUrl: "/img/icon_48.png",
                    title: title,
                    message: message,
                    contextMessage: ctxMsg,
                    //eventTime
                    //buttons: btns,
                    //progress: 60,
                    isClickable: true,
                    requireInteraction: true,
                    buttons: []
                };
                if (opts.buttons) {
                    msgObj.buttons = opts.buttons.map((b) => ({ title: b.title }));
                }
                this.chrome.notifications.create(id, msgObj, (notId) => {
                    this.notSetting.curShowing[id] = opts;
                });
            }
        };*/
        this.chrome = window['chrome'];
    }

    getCurrentUrl() {
        return new Promise((resolve, reject) => {
            resolve("https://jira-ja.atlassian.net");
        });
    }

    getCurrentTab() {
        return new Promise((resolve, reject) => {
            // This function is for private use
        });
    }

    replaceTabUrl(url) {
        return this.getCurrentTab().then((tab) => {
            // This function is for private use
        });
    }

    openTab(url) {
        window.open(url);
    }

    getAppInfo() { // This function is for private use
        return Promise.resolve({ isDevelopment: true, version: AppVersionNo.toString() });
    }

    getAppVersion() {
        return this.getAppInfo().then(info => info.version);
    }

    getAuthToken(options) {
        const REDIRECT_URL = window['browser'].identity.getRedirectURL();
        const CLIENT_ID = "692513716183-jm587gc534dvsere4qhnk5bj68pql3p9.apps.googleusercontent.com";
        const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
        const AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URL)
            }&scope=${encodeURIComponent(SCOPES.join(" "))}`;
        //REVISIT: const VALIDATION_BASE_URL = "https://www.googleapis.com/oauth2/v3/tokeninfo"; // ToDo: Check why this URL is used
        return window['browser'].identity.launchWebAuthFlow({
            interactive: options.interactive,
            url: AUTH_URL
        }).then((tokken) => this.extractAccessToken(tokken));
    }

    getRedirectUrl(endpoint) { //ToDo: need to implement
        return this.chrome.identity.getRedirectURL(endpoint);
    }

    launchWebAuthFlow(options) {
        return new Promise((resolve) => {
            this.chrome.identity.launchWebAuthFlow(options, resolve);
        });
    }

    removeAuthTokken(authToken) {
        window['browser'].identity.removeCachedAuthToken({ 'token': authToken }, () => { /* Nothing to implement */ });
    }

    getStoreUrl(forRating) {
        return CHROME_WS_URL;
    }

    extractAccessToken(redirectUri) { // This function is for private use
        const m = redirectUri.match(/[#?](.*)/);
        if (!m || m.length < 1) { return null; }
        const params = new URLSearchParams(m[1].split("#")[0]);
        return params.get("access_token");
    }

    /* // This function is not used anywhere currently
    getStorageInfo() {
        return navigator.storage.estimate().then((estimate) => {
            const usedSpace = estimate.usage;
            const totalSpace = estimate.quota;
            return {
                totalSpace: totalSpace,
                usedSpace: usedSpace,
                freeSpace: totalSpace - usedSpace,
                usedSpacePerc: Math.round(usedSpace * 100 / totalSpace)
            };
        });
    }

    getAppLongName() {
        return "Jira Assistant";
    }

    notify(id, title, message, ctxMsg, opts) {
        this.notSetting.init();
        this.notSetting.show(id, title, message, ctxMsg, opts);
    }

    addCmdListener(callback) { this.chrome.commands.onCommand.addListener(callback); }
    */
}
