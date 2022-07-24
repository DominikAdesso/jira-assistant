export const defaultSettings = {
    openTicketsJQL: "assignee=currentUser() AND resolution=Unresolved and status != Closed",
    jiraUpdatesJQL: `(comment ~ currentUser() or summary ~ currentUser() or description ~ currentUser() or assignee = currentUser() `
        + `or reporter = currentUser()) and updatedDate >= $date$ and (lastViewed is null or lastViewed <= $date$) order by lastViewed`
};

export const EventCategory = {
    Temporary: "Temporary actions",
    Instance: "Instance actions",
    DbOperations: "Db operations",
    GadgetActions: "Gadget actions",
    UserActions: "User actions",
    HeaderActions: "Header actions",
    ClickEvents: "Click events",
    DialogEvents: "Popup events",
    DataFetch: "Data fetch operations"
};

export const SettingsCategory = {
    System: 'SYST',
    General: 'GNRL',
    Advanced: 'ADVN',
    Dashboard: 'DBORD',
    PageSettings: 'PSET',
};

export const dateFormats = [
    "dd-MMM-yyyy", "dd/MMM/yyyy",
    "dd-MM-yyyy", "dd/MM/yyyy",
    "MM-dd-yyyy", "MM/dd/yyyy",
    "yyyy-MM-dd", "yyyy/MM/dd",
    "MMM dd, yyyy", "ddd, MMM dd, yyyy"
];
export const timeFormats = [" HH:mm:ss", " hh:mm:ss tt", " HH.mm.ss", " hh.mm.ss tt"];

export const DefaultWorkingDays = [1, 2, 3, 4, 5];
export const DefaultStartOfDay = '10:00';
export const DefaultEndOfDay = '19:00';

export const TINY_DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const SHORT_DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const FULL_DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const defaultJiraFields = ["issuetype", "summary", "reporter", "priority", "status", "resolution", "created", "updated"];

export const SHORT_MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const FULL_MONTH_NAMES = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
