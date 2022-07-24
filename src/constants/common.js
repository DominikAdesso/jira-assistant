export const DummyWLId = 9999999;

export const GoogleOAuth = {
    clientId: "496652059877-4c2b965bb7i74rqfbu4khs0s5hklk9i9.apps.googleusercontent.com",
    scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    getAuthUrl: function (redirectUrl) {
        return `https://accounts.google.com/o/oauth2/auth?client_id=${GoogleOAuth.clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUrl)
            }&scope=${encodeURIComponent(GoogleOAuth.scopes.join(" "))}`;
    }
};

export const AppVersionNo = 2.38;

let AnalyticsTrackingId = "G-TWTY46J9B8"; //"UA-108841109-1"; // This is for public tracking id

if (process.env.NODE_ENV !== "production") { // While doing local development, this 
    AnalyticsTrackingId = "G-TWTY46J9B8";
}

export { AnalyticsTrackingId };

export const SystemUserId = 1;