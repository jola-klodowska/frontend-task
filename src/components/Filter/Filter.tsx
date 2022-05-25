import React, { useState } from 'react';
import shortid from 'shortid';
import { FilterField } from '../../enum/filter-field-enum';
import { FilterOperator } from '../../enum/filter-operator-enum';
import { SearchFilter } from '../../types/search-filter';
import Button from '../Button/Button';
import styles from './Filter.module.scss';

export interface IFilterProps {
    onFilterAdd: (newFilter: SearchFilter) => void;
}

const Filter = (props: IFilterProps) => {

    const [filterField, setFilterField] = useState<FilterField>(FilterField.red);
    const [filterOperator, setFilterOperator] = useState<FilterOperator>(FilterOperator.NotEquals);
    const [filterValue, setFilterValue] = useState(0);



    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newFilter: SearchFilter = {
            id: shortid(),
            field: filterField,
            operator: filterOperator,
            value: Math.floor(255 * (filterValue / 100.0))
        }

        props.onFilterAdd(newFilter);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <select className={styles.input} onChange={e => setFilterField(FilterField[e.target.value as keyof typeof FilterField])}>
                <option value={FilterField.red}>Red</option>
                <option value={FilterField.green}>Green</option>
                <option value={FilterField.blue}>Blue</option>
            </select>
            <select className={styles.input} onChange={e => setFilterOperator(FilterOperator[e.target.value as keyof typeof FilterOperator])}>
                <option value={FilterOperator.Equals}>equal to</option>
                <option value={FilterOperator.NotEquals}>not equal to</option>
                <option value={FilterOperator.GreaterThan}>greater than</option>
                <option value={FilterOperator.GreaterThanOrEqual}>greater than or equal to</option>
                <option value={FilterOperator.LessThan}>less than</option>
                <option value={FilterOperator.LessThanOrEqual}>less than or equal to</option>
            </select>
            <input className={styles.input} type="number" min="1" max="100" step="1" value={filterValue} onChange={e => setFilterValue(parseInt(e.target.value))} /><br />
            <Button>SEARCH</Button>
        </form>
    );
};

export default Filter;
