import classes from './MainNavigation.module.css';
import Link from 'next/link';
import HamMenu from '../generic/HamMenu';
import HamMenuFAB from '../generic/HamMenuFAB';
import { useContext } from 'react';
import GlobalContext from '../../pages/store/globalContext';
import { useRouter } from 'next/router'
import HamMenuContent from "./HamMenuContent"

function MainNavigation() {
    const globalCtx = useContext(GlobalContext);
    const router = useRouter()

    function toggleMenuHide() {
        globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: false });
    }

    const contents = []
    globalCtx.theGlobalObject.meetings.forEach(element => {
      contents.push({title: element.title, webAddress: '/' + element.meetingId })
    });
  

    return (
        <header className={classes.header}>
            <HamMenuContent contents={contents} />
            <HamMenu toggleMenuHide={toggleMenuHide} />
            <HamMenuFAB toggleMenuHide={toggleMenuHide} />
            <nav>
                <ul>
                    <li>
                        <Link href="/">All Meetups</Link> ({globalCtx.theGlobalObject.meetings.length})
                    </li>
                    <li>
                        <Link href="/technology">Technology</Link>
                    </li>
                    <li>
                        <Link href="/gaming">Gaming</Link>
                    </li>
                    <li>
                        <Link href="/new-meetup">Add New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
