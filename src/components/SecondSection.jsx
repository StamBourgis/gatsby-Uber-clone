import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({

section: {
    height: "90vh", 
    zindex: 4
}
}
)

export default function SecondSection() {
    const styles = useStyles()
    return (
        <Paper className = {styles.section}>
            Second Section
        </Paper>
    )
}
