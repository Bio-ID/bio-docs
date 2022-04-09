import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
	<section className="">
		<br /><br /><br />
		<center>
			<a href="https://npmjs.com/package/bioid.id" target="_blank">
				<img src="https://bioid.id/img/meta.png" className={styles.logo} />
			</a>
			<br /><br />
			<a href="https://npmjs.com/package/bioid.id" target="_blank">
				<img src="https://nodei.co/npm/bioid.id.png" />
				<br />
				<img src="https://img.shields.io/npm/v/bioid.id.svg?maxAge=3600" />
				&nbsp;
				<img src="https://img.shields.io/npm/dt/bioid.id.svg?maxAge=3600" />
			</a>
		</center>
		<br /><br />
	</section>
  );
}
