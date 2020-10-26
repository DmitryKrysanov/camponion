import React, {useEffect, useState} from 'react';
import EventDetails from '../../components/EventDetails/EventDetails';
import EventList from '../../components/EventList/EventList';
import Search from '../../components/Search/Search';
import styles from './Events.module.scss';
import CreateEvent from '../../components/CreateEvent/CreateEvent';
import {connect} from 'react-redux';
import {getAllEvents} from '../../redux/actions/eventActions/eventActions';
import {IEvent} from './types';

interface ConnectedProps {
  isLoad: boolean;
  events: IEvent[];
  eventsUpdated: boolean;
}

type Props = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

const Events = (props: any) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    props.getAllEvents();
  }, [props.eventsUpdated]);

  const getEvent = (eventId: string) => {
    const selectedEvent: any = props.events.find(
      (event) => event._id === eventId,
    );
    setSelectedEvent(selectedEvent);
  };

  return (
    <div className={styles.events}>
      <CreateEvent />
      <div className={styles.events_container}>
        <div className={styles.events_header}>
          <h1>Events</h1>
          <Search />
        </div>
        <div className={styles.events_content}>
          <div className={styles.content__left}>
            <EventList
              events={props.events}
              isLoad={props.isLoad}
              getEvent={getEvent}
            />
          </div>
          <div className={styles.content__right}>
            {selectedEvent ? <EventDetails event={selectedEvent} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoad: state.loaderReducer.isLoad,
    events: state.eventReducer.events,
    eventsUpdated: state.eventReducer.eventsUpdated,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getAllEvents: () => {
    return dispatch(getAllEvents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
