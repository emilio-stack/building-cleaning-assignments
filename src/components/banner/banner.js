import React from 'react';
import styles from './banner.module.css';

class Banner extends React.Component {
    render() {
        return (
            <div id={styles.outer}>
                <div id={styles.inner}>
                    <h1 className={styles.text}>Asignaciones de limpieza</h1>
                    <h2 className={styles.text}>Barrio Charlotte - Estaca Central</h2>
                </div>
            </div>
        )
    }
}

export default Banner;