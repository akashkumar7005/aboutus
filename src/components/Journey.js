import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 1551,
    height:'200px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
 
}));

export default function Journey() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Our Journey
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Back in 2019, all it took was an idea to enable digital access to hundreds of restaurant menus. Six passionate foodies who hated waiting in lines, drove around Pune to collect menus from restaurants, scan them and put them online. Their idea has now grown into the vision that drives our team of 500+ people everyday.
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="./images/Journey.png"
        title="Journeyr"
      />
    </Card>
  );
}
