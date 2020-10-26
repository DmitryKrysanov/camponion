import React, {useState} from 'react';
import styles from './TabBar.module.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {NavLink, withRouter} from 'react-router-dom';

const TabBar: React.FC<any> = (props: any) => {
  const [value, setValue] = useState('');

  const handleChange = (event: any, value: string) => {
    setValue(value);
  };

  return (
    <div className={styles.tab_bar}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          value={'&type=all'}
          label="All"
          component={NavLink}
          to="/events/all"
        />
        <Tab
          value={'&type=new'}
          label="New"
          component={NavLink}
          to="/events/new"
        />
        <Tab
          value={'&type=completed'}
          label="Completed"
          component={NavLink}
          to="/events/completed"
        />
      </Tabs>
    </div>
  );
};
const TabBarWithRouter = withRouter(TabBar);
export default TabBarWithRouter;
