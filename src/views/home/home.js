import React, {Component} from "react";
import Card from "../../components/Card";
import {    Box,
            Paper,
            Grid,
            styled} from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

class Home extends Component {        
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    componentDidMount() {
        fetch("https://api.nasa.gov/planetary/apod?api_key=GWjtMZWnt0Xhh5TWKiwcNoN7oDfzAlnWOlcYMPPS&count=12&concept_tags=True")
          .then((res) => res.json())
          .then((json) => { 
                this.setState({items: json});
                console.log(this.state.items);
            }).catch((err)=>{console.log(err);
        });
    }  
    

    render() {
        return (
            <div>
            <h1>Spacestagram</h1>
            <h3>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</h3>
                        
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {this.state.items.map((item, index) => (
                        <Grid item key={index} xs={12} md={4} >
                            <Item >    
                                <Card title={item.title} url={item.url} explanation={item.explanation} date={item.date} />
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            
            </div>
        );
    } 
}

export default Home;
