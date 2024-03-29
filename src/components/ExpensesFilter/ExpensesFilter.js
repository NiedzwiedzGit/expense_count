import React from 'react';
import { useEffect, useState } from 'react'
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [dropValue, setDropValue] = useState('')
    useEffect(() => {
        // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
        if (dropValue == '') { dropDownFilter('2022') }
    });
    const dropDownFilter = (e) => {
        if (dropValue == '' || dropValue != e) {
            props.onExpenseYearFilter(e)
            setDropValue(e)
        }
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={(e) => dropDownFilter(e.target.value)}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;