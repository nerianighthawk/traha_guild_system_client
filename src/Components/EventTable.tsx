import * as React from 'react'
import { List } from '@material-ui/core'

import EventItemComponent from './EventItem'
import useEventTableHook from '../Hooks/EventTableHook'

const EventTableCompoent: React.FC = () => {

  const { events, clickItem } = useEventTableHook()

  return (
    <>
      <List>
        {events.map((item) => (
          <div key={item.id} onClick={() => clickItem(item)}>
            <EventItemComponent {...item} />
          </div>
        ))}
      </List>
    </>
  )
}

export default EventTableCompoent
