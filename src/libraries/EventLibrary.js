// import crypto from 'crypto';
import EventApiLibrary from '@/libraries/EventApiLibrary';
import { v4 as uuidv4 } from 'uuid';


function createSession() {
    const timestamp = Math.round(+new Date() / 1000);
    
    const local = {
        // id:crypto.randomUUID(),
        id: uuidv4(),
        timestamp: timestamp
    }

    const session = {
        id: uuidv4(),
        timestamp: timestamp
    }

    // if local id exists, use its id and timestamp
    if (localStorage && localStorage.id) {
        local.id = localStorage.id;
        local.timestamp = localStorage.timestamp;
    }

    // if previous session id exists, use its id
    if (sessionStorage && sessionStorage.id) {
        session.id = sessionStorage.id;
    }


    storeLocalInLocalStorage(local);
    storeSessionInSessionStorage(session);
    return session;
}

function storeLocalInLocalStorage(local) {
    localStorage.id = local.id;
    localStorage.timestamp = local.timestamp;
}

function storeSessionInSessionStorage(session) {
    sessionStorage.id = session.id;
    sessionStorage.timestamp = session.timestamp;
}

function postEvent(category, action, label, value) {
    const session = createSession();
    const event = {
        timestamp: session.timestamp,
        category: category,
        action: action,
        label: label,
        value: value
    }
    EventApiLibrary.postEvent(event);
}

const EventLibrary = {
    postSession: (duration, width, height) => {
        EventApiLibrary.postSession(duration, width, height);
    },
    postEventSessionNew: (referrer, url) => {
        const category = 'session';
        const action = 'new-visit';
        const label = referrer;
        const value = url;
        postEvent(category, action, label, value);
    },
    postEventSessionReturning: (referrer, url) => {
        const category = 'session';
        const action = 'returning-visit';
        const label = referrer;
        const value = url;
        postEvent(category, action, label, value);
    },
    postEventNavigationClick: (url) => {
        const category = 'navigation';
        const action = 'click';
        const label = url;
        const value = undefined;
        postEvent(category, action, label, value);
    },
    postEventNavigationScroll: (scrollPercentage) => {
        const category = 'navigation';
        const action = 'scroll';
        const label = scrollPercentage;
        const value = undefined;
        postEvent(category, action, label, value);
    },
    postEventLinkClick: (url) => {
        const category = 'link';
        const action = 'click';
        const label = url;
        const value = undefined;
        postEvent(category, action, label, value);
    },
    postEventVideoUnmute: (videoName) => {
        const category = 'video';
        const action = 'unmute';
        const label = videoName;
        const value = undefined;
        postEvent(category, action, label, value);
    },
    postEventImageFullscreen: (imageName) => {
        const category = 'image';
        const action = 'fullscreen';
        const label = imageName;
        const value = undefined;
        postEvent(category, action, label, value);
    },
    postEventMenuOpen: () => {
        const category = 'menu';
        const action = 'open';
        const label = undefined;
        const value = undefined;
        postEvent(category, action, label, value);
    },
    postEventMenuClose: () => {
        const category = 'menu';
        const action = 'close';
        const label = undefined;
        const value = undefined;
        postEvent(category, action, label, value);
    },
};

export default EventLibrary;