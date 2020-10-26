import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './Accordion.module.scss';
import TextItem from '../TextItem/TextItem';
import {IParticipant} from '../../pages/Events/types';

interface Props {
  participants: IParticipant[];
}

const SimpleAccordion = (props: Props) => {
  return (
    <div className={styles.accordion}>
      {props.participants.map((participant, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>{`${participant.firstName} ${participant.lastName}`}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.accordion_details}>
              {participant.info.map((infoItem, index) => (
                <div className={styles.row} key={index}>
                  <TextItem title={infoItem.label} text={infoItem.value} />
                </div>
              ))}
              <div className={styles.row}>
                <p>Payment confirmed</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default SimpleAccordion;
