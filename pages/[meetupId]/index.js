import MeetupDetail from '../../components/meetups/MeetupDetail';
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext";
import { useContext } from 'react';

export default function MeetupDetailsPage() {
  const globalCtx = useContext(GlobalContext);
  const router = useRouter();

  console.log("Meetup ID from query:", router.query.meetupId);

  if (!globalCtx.theGlobalObject || !globalCtx.theGlobalObject.meetings || !Array.isArray(globalCtx.theGlobalObject.meetings)) {
    console.error("Meetings data is not available or invalid.");
    return <p>Unable to load meetup details. Please try again later.</p>;
  }

  let returnVal = null;
  for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
    let temp = globalCtx.theGlobalObject.meetings[ii];
    if (temp && temp.meetingId && router.query.meetupId) {
      if (temp.meetingId.trim() === router.query.meetupId.trim()) {
        returnVal = (
          <MeetupDetail
            image={temp.image}
            title={temp.title}
            description={temp.description}
          />
        );
        break;
      }
    }
  }

  if (!returnVal) {
    return <p>Meetup not found. Please check the URL or try again.</p>;
  }

  return returnVal;
}
