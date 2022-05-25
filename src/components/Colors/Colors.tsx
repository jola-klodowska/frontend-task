import React from 'react';
import shortid from 'shortid';
import ColorInformation from '../../types/color-information';
import { SearchFilter } from '../../types/search-filter';
import Color from '../Color/Color';
import styles from './Colors.module.scss';

interface IColorsProps {
    colors: ColorInformation[];
    filters: SearchFilter[];
    onColorRemove: (colorId: string) => void;
}

const Colors = (props: IColorsProps) => {
    /* TODO: filters logic
    const operations = {
        (FilterOperator.Equals as string): (colorValue: number, filterValue: number): boolean => colorValue === filterValue,
        "!=": (colorValue: number, filterValue: number): boolean => colorValue !== filterValue,
        ">=": (colorValue: number, filterValue: number): boolean => colorValue >= filterValue,
        ">": (colorValue: number, filterValue: number): boolean => colorValue > filterValue,
        "<=": (colorValue: number, filterValue: number): boolean => colorValue <= filterValue,
        "<": (colorValue: number, filterValue: number): boolean => colorValue < filterValue,
    }*/

    let colors = props.colors;

    for (let filter of props.filters) {
        colors = colors.filter(x => {
            const colorValue = x.components[filter.field];
            const filterValue = filter.value;
            let operation = colorValue === filterValue;

            return operation;
        });
    }

    colors.sort(
        (colorA, colorB) => colorB.components[0] - colorA.components[0] ||
            colorB.components[1] - colorA.components[1] ||
            colorB.components[2] - colorA.components[2]
    )

    return (
        <article>
            <h2 className={styles.title}>Yours colors</h2>
            <div className={styles.colorContainer}>
                {colors.map(color =>
                    <Color
                        onColorRemove={props.onColorRemove}
                        key={shortid()}
                        color={color.name}
                        isDefault={color.isDefault} />
                )}
            </div>
        </article>
    );
};

export default Colors;


