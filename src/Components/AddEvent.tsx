import * as React from 'react'
import useAddEvent from '../Hooks/AddEventHook'
import DateFnsUtils from '@date-io/date-fns'
import { Modal, Paper, makeStyles, createStyles, TextField, Typography, Button } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers'

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      maxWidth: 500,
      margin: "auto",
      marginTop: 100
    },
    field: {
      marginLeft: 30,
      marginRight: 30,
      minWidth: 440
    },
    button: {
      margin: 10,
    }
  }),
)

const AddEventComponent: React.FC = () => {
  const classes = useStyles()
  const { addModal, handleClose, clickAdd, eventForm, setEventForm } = useAddEvent()

  const handleDateChange = React.useCallback((date: Date | null) => {
    setEventForm({ ...eventForm, date: date ?? eventForm.date })
  }, [eventForm, setEventForm])

  return (
    <>
      <Modal
        open={addModal}
        onClose={handleClose}
      >
        <>
          <Paper className={classes.paper}>
            <Typography variant={"h6"}>
              イベント追加
            </Typography>
            <TextField
              className={classes.field}
              required
              label={"タイトル"}
              value={eventForm.title}
              onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
            />
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <KeyboardDateTimePicker
                className={classes.field}
                required
                variant="inline"
                format="yyyy年MM月dd日 HH:mm"
                margin="normal"
                value={eventForm.date}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
            <br />
            <TextField
              className={classes.field}
              required
              label={"場所"}
              value={eventForm.place}
              onChange={(e) => setEventForm({ ...eventForm, place: e.target.value })}
            />
            <br />
            <TextField
              className={classes.field}
              label={"最大参加可能人数"}
              type={"number"}
              value={eventForm.max_people}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEventForm({ ...eventForm, max_people: isNaN(e.target.valueAsNumber) ? null : e.target.valueAsNumber })}
            />
            <br />
            <TextField
              className={classes.field}
              label={"備考"}
              value={eventForm.remark}
              multiline
              rows={4}
              onChange={(e) => setEventForm({ ...eventForm, remark: e.target.value })}
            />
            <br />
            <Button className={classes.button} variant={"contained"} color={"primary"} onClick={clickAdd}>追加</Button>
            <Button className={classes.button} onClick={handleClose}>キャンセル</Button>
          </Paper>
        </>
      </Modal>
    </>
  )
}

export default AddEventComponent
