import React, {Component} from 'react';
import styles from './CreateEvent.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Form, Field} from 'react-final-form';
import {
  composeValidators,
  maxLengthDescription,
  maxLengthText,
  minLengthText,
  required,
} from '../../utils/validation.utils';
import {IEvent} from '../../pages/Events/types';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {connect} from 'react-redux';
import {createEvent} from '../../redux/actions/eventActions/eventActions';
import Loader from '../Loader/Loader';
import Alert from '../Alert/Alert';

interface ConnectedProps {
  isLoad: boolean;
  alert: string;
}
type Props = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

class CreateEvent extends Component<any> {
  state = {
    open: false,
  };

  private handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  private handleClose = () => {
    this.setState({
      open: false,
    });
  };

  private handleFormSubmit = (data: IEvent) => {
    this.props.createEvent(data);
    //dialog should be disappear after clicking "Create" and event has been created
  };

  render() {
    return (
      <div className={styles.create_event}>
        {this.props.alert ? (
          <Alert message={this.props.alert} type="error" />
        ) : null}
        <div className={styles.fab}>
          <Fab color="primary" aria-label="add" onClick={this.handleClickOpen}>
            <AddIcon />
          </Fab>
        </div>
        <Dialog
          maxWidth="sm"
          fullWidth
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Event</DialogTitle>
          {this.props.isLoad ? <Loader /> : null}
          <DialogContent>
            <Form
              onSubmit={this.handleFormSubmit}
              render={({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <Field
                      name="title"
                      validate={composeValidators(
                        required,
                        minLengthText,
                        maxLengthText,
                      )}
                    >
                      {({input, meta}) => (
                        <div className={styles.input}>
                          <TextField
                            fullWidth
                            label="Title"
                            variant="filled"
                            type="text"
                            {...input}
                            error={meta.error && meta.touched}
                            helperText={
                              meta.error && meta.touched ? meta.error : null
                            }
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className="row">
                    <Field name="description" validate={maxLengthDescription}>
                      {({input, meta}) => {
                        return (
                          <div className={styles.input}>
                            <TextField
                              fullWidth
                              label="Description"
                              variant="filled"
                              type="text"
                              multiline
                              rowsMax="5"
                              {...input}
                              error={meta.error && meta.touched}
                              helperText={
                                meta.error && meta.touched ? meta.error : null
                              }
                            />
                          </div>
                        );
                      }}
                    </Field>
                  </div>
                  <div className="row row__half">
                    <Field name="startDate" validate={required}>
                      {({input, meta}) => {
                        return (
                          <div className={styles.input}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <KeyboardDateTimePicker
                                fullWidth
                                inputVariant="filled"
                                variant="inline"
                                ampm={false}
                                label="Start Date"
                                value={input.value}
                                onChange={input.onChange}
                                name={input.name}
                                disablePast
                                invalidDateMessage={
                                  meta.error && meta.touched
                                    ? 'Invalid Date'
                                    : null
                                }
                              />
                            </MuiPickersUtilsProvider>
                          </div>
                        );
                      }}
                    </Field>
                    <Field name="endDate" validate={required}>
                      {({input, meta}) => (
                        <div className={styles.input}>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDateTimePicker
                              fullWidth
                              inputVariant="filled"
                              variant="inline"
                              ampm={false}
                              label="End Date"
                              value={input.value}
                              onChange={input.onChange}
                              name={input.name}
                              disablePast
                              invalidDateMessage={
                                meta.error && meta.touched
                                  ? 'Invalid Date'
                                  : null
                              }
                            />
                          </MuiPickersUtilsProvider>
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className="row">
                    <Field name="costEstimation" validate={required}>
                      {({input, meta}) => (
                        <div className={styles.input}>
                          <TextField
                            fullWidth
                            label="Cost Estimation, UAH"
                            variant="filled"
                            type="number"
                            {...input}
                            error={meta.error && meta.touched}
                            helperText={
                              meta.error && meta.touched ? meta.error : null
                            }
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className="row row__half">
                    <Field name="meetupLocation">
                      {({input, meta}) => (
                        <div className={styles.input}>
                          <TextField
                            fullWidth
                            label="Meetup Location"
                            variant="filled"
                            type="text"
                            {...input}
                            error={meta.error && meta.touched}
                            helperText={
                              meta.error && meta.touched ? meta.error : null
                            }
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="eventLocation">
                      {({input, meta}) => (
                        <div className={styles.input}>
                          <TextField
                            fullWidth
                            label="Event Location"
                            variant="filled"
                            type="text"
                            {...input}
                            error={meta.error && meta.touched}
                            helperText={
                              meta.error && meta.touched ? meta.error : null
                            }
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      Create
                    </Button>
                  </DialogActions>
                </form>
              )}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoad: state.loaderReducer.isLoad,
    alert: state.alertReducer.alert,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  createEvent: (data: IEvent) => {
    return dispatch(createEvent(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
