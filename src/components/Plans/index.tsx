import Type from '../Type';
import styles from './styles.module.scss';
import { FaHeart, FaWhatsapp } from 'react-icons/fa';

export type PlanType = {
  id: number;
  title: string;
  resume: string;
  icon: string;
  url: string;
  show: boolean;
};

type Props = {
  items: PlanType[];
};

function Plans({ items }: Props) {
  function onWhatsapp() {
    const celular_bebride = '5511940768615';
    const urlWhatsapp = `https://wa.me/${celular_bebride}`;
    window.location.assign(urlWhatsapp);
  }

  return (
    <div className={styles.Container}>
      <div className={styles.ContainerContent}>
        <div className={styles.ContainerTitle}>
          <h2>
            <p>
              Noiva tranquila é noiva organizada.{' '}
              <FaHeart size={24} className='text-primary' />
            </p>
          </h2>
          <span>
            Cada dia da organização do seu casamento deve ser celebrado.
          </span>
        </div>
        <div className={styles.ContainerItens}>
          {items.map((item: PlanType) => (
            <Type key={item.id} item={item} />
          ))}
        </div>
        <div>
          <a
            type='button'
            onClick={onWhatsapp}
            className={styles.ButtonWhatsApp}
          >
            <FaWhatsapp size={34} />
            #vamosjuntas?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Plans;
