import React, {useState} from 'react';
// import { IEvent } from '../../pages/Events/Events';
import TextItem from '../TextItem/TextItem';
import styles from './EventDetails.module.scss';
import {Button} from '@material-ui/core';
import Accordion from './../Accordion/Accordion';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteEvent} from '../../redux/actions/eventActions/eventActions';
import EditEvent from '../EditEvent/EditEvent';

// interface Props {
//   event: IEvent;
// }

const EventDetails = (props: any) => {
  // const getDate = (date: Date) => {
  //   const hours = date.getHours();
  //   const minutes = date.getMinutes();
  //   const resDate = date.toDateString();
  //   return `${resDate}, ${hours}:${minutes}`;
  // };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    props.deleteEvent(props.event._id);
  };

  return (
    <div className={styles.event_details}>
      <EditEvent open={open} handleEdit={handleEdit} event={props.event} />
      <div className={styles.event_details_header}>
        <h1>{props.event.title}</h1>
        <IconButton aria-label="options" onClick={handleClick}>
          <MoreVertTwoToneIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Import CSV</MenuItem>
          <MenuItem onClick={handleEdit}>Edit Event</MenuItem>
          <MenuItem onClick={handleClose}>Event Summary</MenuItem>
          <MenuItem onClick={handleClose}>Add Event to Calendar</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </div>
      {props.event.description ? (
        <div className={styles.row}>
          <TextItem title={'Decription'} text={props.event.description} />
        </div>
      ) : null}
      <div className={`${styles.row} ${styles.row__half}`}>
        <div className={styles.half_item}>
          {/* <TextItem
            title={'from'}
            text={getDate(props.event.startDate.toDate())}
          /> */}
        </div>
        <div className={styles.half_item}>
          {/* <TextItem title={'to'} text={getDate(props.event.endDate.toDate())} /> */}
        </div>
      </div>
      <div className={styles.row}>
        <TextItem
          title={'Cost estimation'}
          text={String(props.event.costEstimation)}
        />
      </div>
      <div className={`${styles.row} ${styles.row__half}`}>
        <div className={styles.half_item}>
          <TextItem
            title={'Meetup location'}
            text={props.event.meetupLocation}
          />
        </div>
        <div className={styles.half_item}>
          <TextItem title={'Event location'} text={props.event.eventLocation} />
        </div>
      </div>
      <div className={`${styles.row} ${styles.row__half}`}>
        <p>Participants</p>
        <Button variant="contained" color="primary">
          Update CSV
        </Button>
      </div>
      {/* {props.event.participants ? (
        <Accordion participants={props.event.participants} />
      ) : null} */}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  deleteEvent: (eventId: string) => {
    return dispatch(deleteEvent(eventId));
  },
});

const EventDetailsWithRouter = withRouter(EventDetails);

export default connect(null, mapDispatchToProps)(EventDetailsWithRouter);
