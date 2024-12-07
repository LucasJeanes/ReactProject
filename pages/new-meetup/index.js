// our-dimain.com/new-meetup
import NewItemForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext";
import { useContext } from 'react';

function NewItemPage() {
    const router = useRouter();
    const globalCtx = useContext(GlobalContext);

    async function addItemHandler(enteredItemData) {
        // Use the global context to add a new item
        await globalCtx.updateGlobals({ cmd: 'addMeeting', newVal: enteredItemData });

        // Redirect to the homepage after adding the item
        router.push('/');
    }

    return (
        <section>
            <h1>Add New Item</h1>
            <NewItemForm onAddMeetup={addItemHandler} />
        </section>
    );
}

export default NewItemPage;
