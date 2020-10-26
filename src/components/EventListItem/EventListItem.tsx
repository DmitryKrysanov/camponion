import React from 'react';
import styles from './EventListItem.module.scss';

const EventListItem = (props: any) => {
  const onClick = () => {
    props.getEvent(props.event._id);
  };

  return (
    <div className={styles.event_list_item} onClick={onClick}>
      <h3>{props.event.title}</h3>
      <h4>{props.event.startDate}</h4>
    </div>
  );
};

export default EventListItem;
