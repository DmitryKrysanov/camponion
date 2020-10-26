import React, {Fragment} from 'react';
import styles from './EventList.module.scss';
import {IEvent} from './../../pages/Events/types';
import EventListItem from '../EventListItem/EventListItem';
import Loader from '../Loader/Loader';

interface Props {
  isLoad: boolean;
  events: IEvent[];
  getEvent: (eventId: string) => void;
}

const EventList = (props: Props) => {
  const list = props.events.map((event: IEvent, index: number) => (
    <Fragment key={index}>
      <EventListItem event={event} getEvent={props.getEvent} />
    </Fragment>
  ));

  return (
    <div className={styles.event_list}>
      <div className={styles.list_loader}>
        {props.isLoad ? <Loader /> : null}
      </div>
      <div className={styles.list}>
        {props.events.length || props.isLoad ? (
          list
        ) : (
          <div className={styles.list_empty_state}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
            >
              <polygon
                points="43 26.714 26.714 26.714 26.714 43 21.286 43 21.286 26.714 5 26.714 5 21.286 21.286 21.286 21.286 5 26.714 5 26.714 21.286 43 21.286"
                transform="translate(-5 -5)"
              />
            </svg>
            <h3>Add new event</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;
