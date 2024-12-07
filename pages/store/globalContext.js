// Lets do all database stuff here and just share this global context with the rest of the App
// - so no database code anywhere else in our App
// - every CRUD function the App needs to do is in here, in one place
// - makes debugging etc so much easier
// - all external connections still have to go through /api routes 


// globalContext.js

import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider(props) {
    const [globals, setGlobals] = useState({
        aString: 'init val',
        count: 0,
        hideHamMenu: true,
        meetings: [], // Contains all meetups
        dataLoaded: false,
    });

    useEffect(() => {
        getAllMeetings();
    }, []);

    async function getAllMeetings() {
        const response = await fetch('/api/get-meetings', {
            method: 'POST',
            body: JSON.stringify({ meetups: 'all' }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setGlobals((previousGlobals) => {
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
            newGlobals.meetings = data.meetings;
            newGlobals.dataLoaded = true;
            return newGlobals;
        });
    }

    async function editGlobalData(command) {
        if (command.cmd === 'hideHamMenu') {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.hideHamMenu = command.newVal;
                return newGlobals;
            });
        }

        if (command.cmd === 'addMeeting') {
            const response = await fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(command.newVal),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.meetings.push(command.newVal);
                return newGlobals;
            });
        }
    }

    const context = {
        updateGlobals: editGlobalData,
        theGlobalObject: globals,
    };

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;





/*import { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider(props) {
    const [globals, setGlobals] = useState({
        aString: 'init val',
        count: 0,
        hideHamMenu: true,
        meetings: [], // Contains all meetups
        dataLoaded: false,
    });

    useEffect(() => {
        getAllMeetings();
    }, []);

    async function getAllMeetings() {
        const response = await fetch('/api/get-meetings', {
            method: 'POST',
            body: JSON.stringify({ meetups: 'all' }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setGlobals((previousGlobals) => {
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
            newGlobals.meetings = data.meetings;
            newGlobals.dataLoaded = true;
            return newGlobals;
        });
    }

    async function editGlobalData(command) {
        if (command.cmd === 'hideHamMenu') {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.hideHamMenu = command.newVal;
                return newGlobals;
            });
        }

        if (command.cmd === 'addMeeting') {
            const response = await fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(command.newVal),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json(); // Verify success
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.meetings.push(command.newVal); // Add the new meeting
                return newGlobals;
            });
        }
        if (command.cmd == 'deleteMeeting') {
            console.log("Sending delete request for meetingId:", command.meetingId);
            const response = await fetch('/api/delete-meetup', {
                method: 'POST',
                body: JSON.stringify({ meetingId: command.meetingId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log("Received response:", data);
            if (data.success) {
                setGlobals((previousGlobals) => {
                    const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                    newGlobals.meetings = newGlobals.meetings.filter(meeting => meeting.meetingId !== command.meetingId);
                    return newGlobals;
                });
                console.log("Meeting deleted successfully");
            } else {
                alert('Failed to delete meeting');
                console.log("Failed to delete meeting. Server response:", data);
            }
        }
    }

    const context = {
        updateGlobals: editGlobalData,
        theGlobalObject: globals, // Access meetings here
    };

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;

*/







