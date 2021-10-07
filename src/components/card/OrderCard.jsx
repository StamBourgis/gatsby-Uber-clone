import { Box, Card, InputAdornment, TextField, Typography } from '@material-ui/core'
import React from 'react'
import {CardActions} from '@material-ui/core'
import {CardContent} from '@material-ui/core'
import PostCodeSearchBox from './SearchBox';


export default function CardComp() {
    return (
        <Card variant= "outlined">
            <CardContent>
            <Typography gutterBottom variant="h4" component="div">
               
               Order a driver

            </Typography>

            <Typography gutterBottom variant="h6" component="div">
               
               Get a lift

            </Typography>
            </CardContent>

             <PostCodeSearchBox/>

        
        </Card>
    )
}
