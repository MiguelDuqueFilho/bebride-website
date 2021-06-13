import { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export function Header() {
  const [toggle, setToggle] = useState(false);
  const [offset, setOffset] = useState(0);

  function handleToggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <header className={styles.headerContainer}>
      <nav
        id='nav'
        className={offset < 80 && toggle === false ? styles.navInitial : ''}
      >
        <div className={styles.logo}>
          <p>
            be bride
            <span>Assessoria e Cerimonial</span>
          </p>
        </div>
        <ul className={cn(styles.navlinks, toggle && styles.navactive)}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Sobre</a>
          </li>
          <li>
            <a href='#'>Área cliente</a>
          </li>
          <li>
            <a href='#'>Contato</a>
          </li>
        </ul>
        <div className={styles.burger} onClick={handleToggle}>
          <div className={toggle ? styles.line1 : ''}></div>
          <div className={toggle ? styles.line2 : ''}></div>
          <div className={toggle ? styles.line3 : ''}></div>
        </div>
      </nav>
    </header>
  );
}
