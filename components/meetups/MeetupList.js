import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  // Props contain an array of meetups
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.meetingId} // Changed from `_id` to `meetingId`
          id={meetup.meetingId}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          category={meetup.category} // Added category
        />
      ))}
    </ul>
  );
}

export default MeetupList;
