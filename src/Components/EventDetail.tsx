import * as React from 'react'
import useEventDetail from '../Hooks/EventDetailHook'
import { Modal, Paper, makeStyles, createStyles, Typography, Chip, TextField, Button } from '@material-ui/core'
import { formatDate } from '../service'

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      maxWidth: 500,
      margin: "auto",
      marginTop: 100
    },
    prop: {
      margin: 30
    },
    field: {
      marginLeft: 30,
    },
    button: {
      margin: 10,
    }
  }),
)

const EventDetail: React.FC = () => {
  const classes = useStyles()

  const {
    detailModal,
    choosingEvent,
    name,
    setName,
    handleClose,
    clickParticipation,
  } = useEventDetail()

  const dateString = formatDate(choosingEvent.date, 'yyyy年MM月dd日 HH:mm')

  return (
    <>
      <Modal
        open={detailModal}
        onClose={handleClose}
      >
        <>
          <Paper className={classes.paper}>
            <Typography variant={"h6"}>
              {choosingEvent.title}
            </Typography>
            <div className={classes.prop}>
              日時： {dateString}
              <br />
              場所： {choosingEvent.place}
              <br />
              備考： {choosingEvent.remark}
              <br />
              参加者： {choosingEvent.participants.map(p => (
                <Chip key={p.id} label={p.name} />
              ))}
              <br />
            </div>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="名前"
              variant="filled"
              className={classes.field}
            />
            <Button onClick={clickParticipation} color={"primary"}>参加</Button>
            <br />
            <Button onClick={handleClose} className={classes.button}>閉じる</Button>
          </Paper>
        </>
      </Modal>
    </>
  )
}

export default EventDetail
