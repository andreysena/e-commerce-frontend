import React, { useRef, cloneElement } from 'react';
import 'rbx/index.css';
import styles from './index.module.css';
import { Button, Icon } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SliderSection(props) {

	const cards_container_slider = useRef();

	function slideToLeft() {
		cards_container_slider.current.scrollLeft += 100;
	}

	function slideToRigth() {
		cards_container_slider.current.scrollLeft -= 100;
	}

	return (
		<div className={styles.cards_container} >
			<Button.Group className={styles.button_group}>
				<Button id={styles.button} onClick={slideToRigth}>
					<Icon size="small" className={styles.icon}>
						<FontAwesomeIcon icon={faChevronLeft} />
					</Icon>
				</Button>	
				<Button id={styles.button} onClick={slideToLeft}>
					<Icon size="small" className={styles.icon}>
						<FontAwesomeIcon icon={faChevronRight} />
					</Icon>
				</Button>
			</Button.Group>
			<div className={styles.cards_container_slider} ref={cards_container_slider}>
				{ 	
					props.children ?
						props.children.map((child, i) => {
							return cloneElement(child, {...props, key: i})
						})
					:
						null
				}
			</div>
		</div>
	);
}