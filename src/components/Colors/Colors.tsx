import React from 'react';
import { MyColor } from '../../App';
import Color from '../Color/Color';

interface Test {
    colors: MyColor[]
}



const Colors = (props: Test) => {
    const colors = props.colors;

    return (
        <article>
            <h2>Yours colors</h2>
            <div>
                {colors.map(color =>
                    <Color
                        color={Object.values(color).toString()} />
                )}
            </div>
        </article>
    );
};

export default Colors;


