import { IoTrashBinOutline } from "react-icons/io5";
import classes from './MeetupDetail.module.css'
import GlobalContext from "../../pages/store/globalContext";
import { useContext } from 'react'
import { useRouter } from "next/router";

function MeetupDetail(props) {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    function deleteMeeting() {
        globalCtx.updateGlobals({ cmd: 'deleteMeeting', meetingId: props.title })
        router.push('/');
    }

    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
            <IoTrashBinOutline 
                className={classes.deleteBin} 
                onClick={() => deleteMeeting()}/>
        </section>
    )
}

export default MeetupDetail