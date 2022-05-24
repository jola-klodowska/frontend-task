import styles from './Color.module.scss';

interface Test {
    color: string;
}

const Color = (props:Test) => {
    return (
        <div>
            <div  style={{ backgroundColor: props.color }} className={styles.rectangle}></div>
            <p>{props.color}</p>
        </div>
    );
};

export default Color;
