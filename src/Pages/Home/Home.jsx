import React from 'react'
import { Animator, batch, Fade, MoveOut, ScrollContainer, ScrollPage, Sticky } from 'react-scroll-motion'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Services from '../../Components/Services/Services'
import Header from '../../Components/Header/Header'
import Layout from '../../Components/Layout/Layout'
import Skills from '../../Components/Skills/Skills'
import Features from '../../Components/Features/Features'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
        <Layout>
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Fade(),MoveOut(0, -2000))}>
                <Header />
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(),MoveOut(0, -600))}>
                <AboutUs />
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(MoveOut(0, -2500))}>
                <Services />
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(MoveOut(0, -1400))}>
                <Skills />
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(MoveOut(0, -100))}>
                <Features />
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
                <Contact />
                </Animator>
            </ScrollPage>
        </ScrollContainer>
        </Layout>
    </div>
  )
}

export default Home