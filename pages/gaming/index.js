// pages/gaming/index.js

import MeetupList from '../../components/meetups/MeetupList';
import { useContext } from 'react';
import GlobalContext from '../store/globalContext';

function GamingPage() {
    const globalCtx = useContext(GlobalContext);

    const gamingMeetups = globalCtx.theGlobalObject.meetings.filter(
        (meeting) => meeting.category === 'Gaming'
    );

    if (!globalCtx.theGlobalObject.dataLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <h1>Gaming</h1>
            <MeetupList meetups={gamingMeetups} />
        </section>
    );
}

export default GamingPage;















/*import { useContext } from 'react';
import MeetupList from '../../components/meetups/MeetupList';
import GlobalContext from '../store/globalContext';

function GamingPage() {
  const globalCtx = useContext(GlobalContext);
  const gamingMeetups = globalCtx.theGlobalObject.meetings.filter(
    (meetup) => meetup.category === 'Gaming'
  );

  return (
    <section>
      <h1>Gaming Meetups</h1>
      {gamingMeetups.length > 0 ? (
        <MeetupList meetups={gamingMeetups} />
      ) : (
        <p>No gaming meetups available.</p>
      )}
    </section>
  );
}

export default GamingPage;
*/