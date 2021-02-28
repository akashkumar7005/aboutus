import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
   display:"inline-block",
   padding:2,
   margin:20,
   height: 240,
  
  }

  
});


export default function Feedback(props) {
    const [value] = React.useState(5);  
    
    const classes = useStyles();
  return (
      

  <div>
     <h1>User Feedbacks</h1>
      {
          
        
          props.feedback.map((feed)=>{
              
            return<div className={classes.root}>         
    <Card className={classes.root} >
    <CardActionArea>
   
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         {feed.name}
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
      </Box>
          <Typography variant="body2" color="textSecondary" component="p">
          {feed.feedback}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </div>

   })
  
}    </div>
     );
   }
