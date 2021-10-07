import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root: {
    zIndex: 1
  },
});

export default function Layout({ children }) {
  const styles = useStyles()
  return (
    <div className="layout">
      <Navbar className= {styles.root}/>
      <div className="content">{children}</div>
      <footer>
       <Footer className= {styles.root}/>
      </footer>
    </div>
  )
}
