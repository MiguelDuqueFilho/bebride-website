import Image from 'next/image';
import styles from './styles.module.scss';

import {
  FaHeart,
  FaProjectDiagram,
  FaTasks,
  FaVenus,
  FaMoneyBill,
} from 'react-icons/fa';

const Why: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerWhyTitle}>
        <h2>
          <p>
            Por que nos contratar? <FaHeart size={28} />
          </p>
        </h2>

        <span>
          (MOTIVOS PARA TER A GENTE COMO MELHORES AMIGAS, OPS... ASSESSORAS!)
        </span>
      </div>
      <div className={styles.ContainerContent}>
        <div className={styles.ContainerWhyText}>
          <p className={styles.ContainerWhyDescr}>
            <FaTasks />
            Nós cuidamos de cada detalhe do seu Grande Dia como se fosse o
            nosso, com muito amor e respeito pela história do casal. Ouvimos
            cada ideia e trazemos juntas o seu sonho para a realidade.
          </p>
          <p className={styles.ContainerWhyDescr}>
            <FaProjectDiagram />
            Casamento é toda a trajetória, não somente um único dia e queremos
            que vocês aproveitem cada etapa dos preparativos. Por isso,
            orientamos passo a passo para que o casal se sinta amparado e
            seguro.
          </p>

          <p className={styles.ContainerWhyDescr}>
            <FaHeart />
            Amamos o que fazemos, por isso sempre estamos disponíveis para
            atender e ouvir nosso casal, inclusive papear sobre os detalhes é
            uma das coisas que mais gostamos de fazer!
          </p>
          <p className={styles.ContainerWhyDescr}>
            <FaVenus />É importante dizer que damos prioridade à indicação de
            mulheres como fornecedores do seu Grande Dia. Uma das nossas missões
            é fortalecer o empreendedorismo feminino.
          </p>
          <p className={styles.ContainerWhyDescr}>
            <FaMoneyBill />
            Conseguimos melhores preços junto aos fornecedores.
          </p>
        </div>
        <div className={styles.ContainerTeam2Imag}>
          <Image
            width={350}
            height={500}
            className={styles.ImageTeam2}
            src='/images/team-adesivo.png'
            alt='team'
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
