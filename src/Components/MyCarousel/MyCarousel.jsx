import React from 'react'
import bounceInUp from 'react-animations/lib/bounce-in-up';
import { css,StyleSheet } from 'aphrodite';
import { Link } from 'react-router-dom';

const MyCarousel = () => {
  return (
    <div>
        <div className={css(styles.bounceInUp)}>
            <div className="jumbotron py-5">
                <div className="row">
                    <div id="el" className="#">
                    <h2 className="text texth" >Vous avez cherché, vous nous avez trouvé</h2>
                    <h4 className="text texth2 intro-heading text-uppercase">Nous sommes votre solution</h4>
                    <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger mx-auto" to={"Contact"}>Demander</Link>
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
    }
  })

export default MyCarousel