import React from 'react'
import logoreact from "../../assets/img/skills/reactlogo.png";
import logohtml from "../../assets/img/skills/HTML5logo.png";
import logocss from "../../assets/img/skills/css3logo.png";
import logojs from "../../assets/img/skills/jslogo.png";
import logolaravel from "../../assets/img/skills/logolaravel.png";
import logophp from "../../assets/img/skills/phplogo.jpg";
import logonodejs from "../../assets/img/skills/logonodejs.jpg";
import { Animator, batch, MoveIn, ScrollContainer, ScrollPage, Sticky, StickyIn } from 'react-scroll-motion';

const Skills = () => {
  return (
    <div id="skills">

        <div className="bg-transparent">
        <h3 className='display-6 text-white my-4'>Nos compétences</h3>
        </div>
        <div className="row">
               
        <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="row">
                
                    <div id="ele" className="col-md-3">
                    <Animator animation={MoveIn(-1000, 0)}>
                        <img className="mx-auto d-block img-thumbnail m-4" src={logohtml} alt=""/>
                    </Animator>
                    </div>
                    
                    <div id="ele" className="col-md-3">
                    <Animator animation={MoveIn(1000, 0)}>
                        <img className="mx-auto d-block img-thumbnail m-4" src={logocss} alt=""/>
                    </Animator>
                    </div>
                    <div id="ele" className="col-md-3">
                    <Animator animation={MoveIn(-1000, 0)}>
                        <img className="mx-auto d-block img-thumbnail m-4" src={logojs} alt=""/>
                    </Animator>
                    </div>
                    <div id="ele" className="col-md-3">
                    <Animator animation={batch(MoveIn(1000, 0))}>
                        <img className="mx-auto d-block img-thumbnail m-4" src={logophp} alt=""/>
                    </Animator>
                    </div>
                    </div>
                    <div className="row">
                   
                    <div id="ele" className="col-md-4">
                    <Animator animation={batch(MoveIn(1000, 0))}>
                        <img className="mx-auto d-block img-thumbnail m-4" src={logolaravel} alt=""/>
                    </Animator>
                    </div>
                    <div id="ele" className="col-md-4">
                    <Animator animation={batch(MoveIn(-1000, 0))}>
                        <img className="mx-auto d-block img-thumbnail m-4" src={logoreact} alt=""/>
                    </Animator>
                    </div>
                    <div id="ele" className="col-md-4">
                    <Animator animation={batch(MoveIn(1000, 0))}>
                        <img className="mx-auto d-block img-thumbnail m-4" src={logonodejs} alt=""/>
                    </Animator>
                    </div>
                    </div>
                </div>
            </div>
        <div className="col-md-2"></div>


        </div>  
  )
}

export default Skills