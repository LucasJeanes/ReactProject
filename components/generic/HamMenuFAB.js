import classes from "./HamMenuFAB.module.css"
import { IoIosMenu } from 'react-icons/io';

export default function HamMenuFAB(props) {
  return (
    <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}>
      <span className={classes.mainSpan}><IoIosMenu /></span>
    </div>
  )
}
