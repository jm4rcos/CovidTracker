import React from 'react'
import TotalCard from './components/TotalCard/TotalCard'
import Select from './components/Select/Select'
import Chart from './components/Chart/Chart'

import styles from './App.module.css'
import { fetchData } from './api/api.js'

class App extends React.Component {

    state = {
        data:  {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData()

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)

        this.setState({data: fetchedData, country: country})
    }
    
    render(){

        const { data, country } = this.state

        return (
            <div className={styles.App}>
                <Select handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <TotalCard data={data} country country/>
            </div>
        )
    }
}

export default App