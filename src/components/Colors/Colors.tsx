import React from 'react';
import Color from '../Color/Color';


interface Test {

}

const Colors = (props: Test) => {
    return (
        <article>
            <h2>Yours colors</h2>
            <div>
                <Color/>
            </div>
        </article>
    );
};

export default Colors;
