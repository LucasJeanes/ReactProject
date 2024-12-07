import classes from './HamMenuContent.module.css';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import GlobalContext from "../../pages/store/globalContext";

export default function HamMenuContent(props) {
    const globalCtx = useContext(GlobalContext);
    const router = useRouter();
    let [popupToggle, setPopupToggle] = useState(false);

    if (globalCtx.theGlobalObject.hideHamMenu) {
        return null;
    }

    function clicked(webAddress) {
        globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: true });
        router.push(webAddress);
    }

    function closeMe() {
        globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: true });
        if (popupToggle === true) {
            setPopupToggle(false);
        } else {
            setPopupToggle(true);
        }
    }

    // Display only main categories
    const categories = [
        { title: 'All Meetups', webAddress: '/' },
        { title: 'Technology', webAddress: '/technology' },
        { title: 'Gaming', webAddress: '/gaming' }
    ];

    let contentJsx = categories.map((item, index) => (
        <div className={classes.menuItem} key={index} onClick={() => clicked(item.webAddress)} >
            {item.title}
        </div>
    ));

    return (
        <div className={classes.background} onClick={() => closeMe()} >
            <div className={classes.mainContent}>
                {contentJsx}
            </div>
        </div>
    );
}



