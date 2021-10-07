import React from 'react'
import Social from "./Social"
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles((theme) => ({
    footer: {
 
      position: "absolute",
    }
}
)
)

export default function FooterComp() {
    const styles = useStyles()
    return (
        <div>
           <Social className = {styles.footer}/>
        </div>
    )
}
