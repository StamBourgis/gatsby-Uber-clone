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
               
               Order a gardener

            </Typography>

            <Typography gutterBottom variant="h6" component="div">
               
               Get help from local gardeners and help improve the environment too!

            </Typography>
            </CardContent>

             <PostCodeSearchBox/>

        
        </Card>
    )
}
