import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext";
import { useContext } from 'react';

function NewMeetupPage() {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext);

  async function addMeetupHandler(enteredMeetupData) {
    await globalCtx.updateGlobals({ cmd: 'addMeeting', newVal: enteredMeetupData });
    router.push('/');
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
