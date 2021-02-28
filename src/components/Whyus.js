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

export default function WhoWeAre() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Who are we?
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Launched in Pune 2 years ago, Our application has grown from a home project to one of the largest food aggregators in the world.
           We are present in 2 cities Pune and Ghandhinagar, enabling our vision of better food for more people.
            We not only connect people to food in every context but work closely with restaurants to enable a sustainable ecosystem.
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="./images/We.jpg"
        title="Who are We?"
      />
    </Card>
  );
}
