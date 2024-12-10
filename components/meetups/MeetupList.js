import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <div className="container">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup._id}
          id={meetup.meetingId}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </div>
  );
}

export default MeetupList;
