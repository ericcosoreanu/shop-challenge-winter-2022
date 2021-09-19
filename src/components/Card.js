import * as React from 'react';
import {useState} from 'react';
import {    Card,
            Button,
            CardActions,
            CardContent,
            CardMedia,
            Typography } from '@material-ui/core';


export default function MediaCard(props) {
      
    const [liked, setLiked] = useState(false);
    const [buttonColor, setButtonColor] = useState("default");

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="340"
            image={props.url}
            alt={props.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
                Captured: {props.date}
            </Typography>
            <hr/>
            <Typography variant="body2" color="textSecondary">
                {props.explanation}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained" onClick={()=> liked === false ? setLiked(true) + setButtonColor("primary") + console.log("liked") : 
                    setLiked(false) + setButtonColor("default") + console.log("unliked")}
                    color={buttonColor}>Like</Button>
        </CardActions>
        </Card>
    );
}
