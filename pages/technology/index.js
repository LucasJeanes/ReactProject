// pages/technology/index.js
import { useContext } from 'react';
import MeetupList from '../../components/meetups/MeetupList';
import GlobalContext from '../store/globalContext';

function TechnologyPage() {
    const globalCtx = useContext(GlobalContext);
    const technologyMeetups = globalCtx.theGlobalObject.meetings.filter(
        (meetup) => meetup.category === 'Technology'
    );

    return (
        <section>
            <h1>Technology Meetups</h1>
            {technologyMeetups.length > 0 ? (
                <MeetupList meetups={technologyMeetups} />
            ) : (
                <p>No technology meetups available.</p>
            )}
        </section>
    );
}

export default TechnologyPage;
