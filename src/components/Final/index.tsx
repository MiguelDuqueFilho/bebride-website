import Image from 'next/image';
import styles from './styles.module.scss';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Final: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerTitle}>
        <h2>
          <p>Seu casamento é Único e tem que ser Perfeito</p>
          <span>Vamos juntas?</span>
        </h2>
        <div className={styles.TeamSocial}>
          <a
            className={styles.SocialIcon}
            href='https://www.facebook.com/bebridecasamentos'
          >
            <FaFacebook />
          </a>
          <a
            className={styles.SocialIcon}
            href='https://www.instagram.com/bebridecasamentos'
          >
            <FaInstagram />
          </a>
          <a className={styles.SocialIcon} href='https://twitter.com/bebride_'>
            <FaTwitter />
          </a>
        </div>
        <Image
          width={600}
          height={250}
          className={styles.LogoImage}
          src='/images/LogoBeBride3hand.png'
          alt='logo BeBride'
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default Final;
