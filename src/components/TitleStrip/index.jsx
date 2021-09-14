import React from 'react';
import styles from './index.module.css';

export default function TitleStrip({title = "Título", position = "left"}) {

	return (
		<div className={position === "left" ? styles.container_left : position === "center" ? styles.container_center : styles.container_right}>
			{
				position === "center" ?
					<div className={position === "left" ? styles.triangle_after : styles.triangle_before} />	
				:
					null
			}
			<div className={styles.retangle}>
				<h1 className={position === "left" ? styles.title_left : position === "center" ? styles.title_center : styles.title_rigth }>{ title }</h1>
			</div>
			<div className={position === "left" || position === "center" ? styles.triangle_after : styles.triangle_before} />
		</div>
	);	
}