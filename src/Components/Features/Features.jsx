import React from 'react'
import devimage from "../../assets/img/undraw_scrum_board_cesn.svg";
import { bounceInUp } from "react-animations";
import { StyleSheet, css } from 'aphrodite';
import pulse from 'react-animations/lib/pulse';
import './Features.css'
const Features = () => {
    const backimage={backgroundColor : "#fff"};
  return (
    <div>
        <div className="full-width">
            <div className="jumbotron jumbotron-fluid" >
                <div className="container">
                    <div className="row">    
                        <div className="col-md-6">
                            <img className="img-thumbnail monimage" src={devimage} alt="imgdev"></img>
                        </div>
                        <div className="col-md-6 my-auto">
                            <div className={css(styles.pulse)}>
                                <h1 className="display-2 text-white">Allez y !</h1> 
                            </div>
                            <p className="maclassNamee-txt text-white mt-3">Qu'attendez-vous, nous sommes ici à votre service ,et vous pouvez compter sur nous, votre satisfaction est notre priorité</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
const styles = StyleSheet.create({
    bounceInUp: {
      animationName: bounceInUp,
      animationDuration: '1s' 
    },
    pulse: {
        animationName: pulse,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
  })
export default Features