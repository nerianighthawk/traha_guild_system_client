import * as React from 'react'
import { AppBar, Typography, Button, makeStyles, createStyles, Toolbar } from '@material-ui/core/'

import { APP_TITLE } from '../constant'
import useAppBar from '../Hooks/AppBarHook'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    }
  })
)

const AppBarComponent: React.FC = () => {
  const classes = useStyles()
  const {clickAdd} = useAppBar()  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {APP_TITLE}
          </Typography>
          <Button color="inherit" onClick={clickAdd}>追加</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarComponent
