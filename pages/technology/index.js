// pages/technology/index.js

import MeetupList from '../../components/meetups/MeetupList';
import { useContext } from 'react';
import GlobalContext from '../store/globalContext';

function TechnologyPage() {
    const globalCtx = useContext(GlobalContext);

    const techMeetups = globalCtx.theGlobalObject.meetings.filter(
        (meeting) => meeting.category === 'Technology'
    );

    if (!globalCtx.theGlobalObject.dataLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <h1>Technology</h1>
            <MeetupList meetups={techMeetups} />
        </section>
    );
}

export default TechnologyPage;






/*import { useContext } from 'react';
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
*/