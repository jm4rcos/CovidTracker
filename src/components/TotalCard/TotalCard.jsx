import React from 'react'
import styles from './TotalCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import Countup from 'react-countup'

const TotalCard = ({data: {confirmed, recovered, deaths, lastUpdate}}, {country}) => {

    if(!confirmed){
        return ''
    }

    return<div>
            <FontAwesomeIcon icon={faVirus} className={styles.virus}/>
            <FontAwesomeIcon icon={faVirus} className={styles.virus2}/>
            <FontAwesomeIcon icon={faVirus} className={styles.virus3}/>
            <a href='https://github.com/jm4rcos' className={styles.contact}>Portfolio</a>
            <FontAwesomeIcon icon={faGlobeAmericas} className={styles.globe}/>
            <div className={styles.info}>
                <div className={styles.card}>
                    <h4>Confirmed</h4>
                    <h2><Countup start={0} end={confirmed.value} duration={.5} separator={','}/></h2>
                </div>
                <div className={styles.card}>
                    <h4>Recovered</h4>
                    <h2><Countup start={0} end={recovered.value} duration={.5} separator={','}/></h2>
                </div>
                <div className={styles.card}>
                    <h4>Deaths</h4>
                    <h2><Countup start={0} end={deaths.value} duration={.5} separator={','}/></h2>
                </div>
            </div>
        </div>
}

export default TotalCard