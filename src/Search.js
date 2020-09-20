import React, { useState } from 'react'
import './Search.css'
import { DateRangePicker } from 'react-date-range'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

export const Search = () => {

    const [startDate ,setStartDate]=useState(new Date())
    const [endDate,setEndDate] =useState(new Date())
    const history = useHistory()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

      //responsible for selecting date
      function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]}
            onChange={handleSelect}
            />
            <h2>Number of guests
                <PersonOutlineIcon />
            </h2>
            <input min={0}
            defaultValue={2}
            type='number'
            />
            <Button onClick={ ()=> history.push('/search')} >Search airbnb</Button>
        </div>
    )
}
