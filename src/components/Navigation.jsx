import React from 'react'
import {Link} from 'react-router-dom'
import Italia1 from './Italia1'
import Italia2 from './Italia2'
import Italia3 from './Italia3'
import Italia4 from './Italia4'
import Italia5 from './Italia5'
import Italia6 from './Italia6'
import Italia7 from './Italia7'
import Italia8 from './Italia8'
import Italia9 from './Italia9'
import Italia10 from './Italia10'

const Navigation = () => {
  return (
    <div>
        <Link to="/italia1">
            <figure>
                <Italia1/>
                <figcaption>Bellagio</figcaption>
            </figure>
        </Link>
        <Link to="/italia2">
            <figure>
                <Italia2/>
                <figcaption>clinqueterre</figcaption>
            </figure>
        </Link>
        <Link to="/italia3">
            <figure>
                <Italia3/>
                <figcaption>Giardino Bardini</figcaption>
            </figure>
        </Link>
        <Link to="/italia4">
            <figure>
                <Italia4/>
                <figcaption>Manarola</figcaption>
            </figure>
        </Link>
        <Link to="/italia5">
            <figure>
                <Italia5/>
                <figcaption>Metropolitan City of Venice</figcaption>
            </figure>
        </Link>
        <Link to="/italia6">
            <figure>
                <Italia6/>
                <figcaption>Metropolitan City of Venice</figcaption>
            </figure>
        </Link>
        <Link to="/italia7">
            <figure>
                <Italia7/>
                <figcaption>Portofino</figcaption>
            </figure>
        </Link>
        <Link to="/italia8">
            <figure>
                <Italia8/>
                <figcaption>Rialto Bridge</figcaption>
            </figure>
        </Link>
        <Link to="/italia9">
            <figure>
                <Italia9/>
                <figcaption>Sanquirico</figcaption>
            </figure>
        </Link>
        <Link to="/italia10">
            <figure>
                <Italia10/>
                <figcaption>Trevi Fountain</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation