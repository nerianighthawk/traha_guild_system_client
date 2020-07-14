import * as React from 'react'
import { ListItem, ListItemText, Typography, Divider } from '@material-ui/core'

import { formatDate } from '../service'
import { EventItem } from '../type'

const EventItemComponent: React.FC<EventItem> = (props) => {
  const dateString = formatDate(props.date, 'yyyy年MM月dd日 HH:mm')

  return (
    <>
      <ListItem>
        <ListItemText
          primary={props.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {dateString + " " + props.place}
              </Typography>
              <br />
              現在参加人数 {props.participants.length} 人
              <br />
              {props.maxPeople ? "最大参加可能人数：" + props.maxPeople : ""}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
    </>
  )
}

export default EventItemComponent
