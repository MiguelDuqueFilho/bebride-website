import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

const BannerBody: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/images/image1.jpg'
        width={2048}
        height={1363}
        objectFit='cover'
      />
      {/* <div className={styles.bottom_left}>Bottom Left</div>
      <div className={styles.top_left}>Top Left</div>
      <div className={styles.top_right}>Top Right</div>
      <div className={styles.bottom_right}>Bottom Right</div> */}
      <div className={styles.centered}>Vamos Juntas?</div>

      {/* <div className={styles.titleBanner}>
        <p>#Vamos Juntas?</p>
      </div> */}
    </div>
  );
};

export default BannerBody;
