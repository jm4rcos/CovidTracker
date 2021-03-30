import React, { useState, useEffect } from 'react'
import styles from './Select.module.css'

import { fetchCountries } from '../../api/api'

export default function Select({handleCountryChange}){

    console.log(handleCountryChange);

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
    }, [setFetchedCountries])

    return (<div>
        <select className={styles.select} defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option className={styles.option} value="">Global</option>
            {fetchedCountries.map((country, i) => <option className={styles.option} key={i} value={country}>{country}</option>)}
        </select>
    </div>)
}