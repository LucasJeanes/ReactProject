import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <div className="card">
      <img src={props.image || "/placeholder.png"} alt={props.title || "No Image"} />
      <h3>{props.title}</h3>
      <p>{props.address}</p>
      <button onClick={showDetailsHandler}>Show Details</button>
    </div>
  );
}

export default MeetupItem;
