import classes from './MainNavigation.module.css';
import Link from 'next/link';
import HamMenu from "../generic/HamMenu";
import HamMenuFAB from "../generic/HamMenuFAB";
import { useContext } from 'react';
import GlobalContext from "../../pages/store/globalContext";
import HamMenuContent from "./HamMenuContent";

function MainNavigation() {
    const globalCtx = useContext(GlobalContext);

    function toggleMenuHide() {
        globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: false });
    }

    return (
        <header className={classes.header}>
            <HamMenuContent contents={[]} />
            <HamMenu toggleMenuHide={() => toggleMenuHide()} />
            <HamMenuFAB toggleMenuHide={() => toggleMenuHide()} />
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Meetups</Link> ({globalCtx.theGlobalObject.meetings.length})
                    </li>
                    <li>
                        <Link href='/technology'>Technology</Link>
                    </li>
                    <li>
                        <Link href='/gaming'>Gaming</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup'>Add New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
