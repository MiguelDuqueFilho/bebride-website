import Link from 'next/link';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
  function onWhatsapp() {
    const celular_bebride = '5511940768615';
    const urlWhatsapp = `https://wa.me/${celular_bebride}`;
    window.location.assign(urlWhatsapp);
  }
  return (
    <footer>
      <div className={styles.Container}>
        <div className={styles.FooterWrap}>
          <div className={styles.WrapContainer}>
            <h3 className={styles.FooterTitle}>Conheça-nos</h3>
            <ul>
              <li>
                <p title='Informações Corporativas'>Informações Corporativas</p>
              </li>
              <li>
                <p>Razão Social</p>
              </li>
              <li>
                <p title='Be Bride Assessoria'>
                  CNPJ: <span>00.000.000/0001-00</span>
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.WrapContainer}>
            <h3 className={styles.FooterTitle}>Redes Sociais</h3>
            <ul>
              <li>
                <a
                  href='https://www.facebook.com/bebridecasamentos'
                  title='Facebook'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/bebridecasamentos'
                  title='Instagram'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://twitter.com/bebride_' title='Twitter'>
                  Twitter
                </a>
              </li>
              <li>
                <a title='Whatsapp' onClick={onWhatsapp}>
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.WrapContainer}>
            <h3 className={styles.FooterTitle}>Informações</h3>
            <ul>
              <li>
                <a href='#' title='Contato'>
                  Contato
                </a>
              </li>
              <li>
                <Link href='/about'>
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <a href='#' title='Login'>
                  Login
                </a>
              </li>
              <li>
                <a href='#' title='Recuperar a Senha'>
                  Recuperar a Senha
                </a>
              </li>
              <li>
                <a href='#' title='Área do Cliente'>
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.Clear}></div>
        </div>
      </div>
      <div className={styles.Foot}>
        <div className={styles.FootWrap}>
          MDuque &copy;2021
          {/* <a href="#">MDUQUE</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
