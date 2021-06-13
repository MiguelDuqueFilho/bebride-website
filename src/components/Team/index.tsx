import React from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

import styles from './styles.module.scss';

const Team: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ContainerContent}>
        <div className={styles.ContainerText}>
          <h1>
            Nós gostamos de pessoas e gostamos de histórias de amor...
            <FaHeart size={28} />
          </h1>
        </div>
        <div className={styles.ContainerTeam}>
          <div className={styles.ContainerTeamImag}>
            <Image
              width={450}
              height={300}
              className={styles.ImageTeam}
              src='/images/team-bebride.png'
              alt='team'
              objectFit='cover'
            />
          </div>
          <div className={styles.ContainerTeamText}>
            <p className={styles.TeamDescr}>
              Olá, somos Bruna e Tamires, unimos essa paixão e nossa amizade aos
              nossos ideais, trazendo à tona uma empresa que se posiciona e
              levanta bandeiras. E é nisso que ganhamos reconhecimento e valor.
            </p>
            <p className={styles.TeamDescr}>
              Cada casal é mais do que um cliente, levamos como amigos para
              vida, quem nos segue nas redes sociais já sabe, não é difícil ver
              nossos noivos em nossos próprios lares. Gostamos de criar laços,
              proporcionar uma experiência única a quem nos escolhe para
              organizar e assessorar um dos dias mais importantes de sua vida.
            </p>
            <p className={styles.TeamDescr}>
              Gratidão e amor é o que nos move. Nossa missão é fazer a diferença
              na vida das pessoas, seja as ajudando a realizar seus sonhos,
              planejando e organizando seus casamentos ou incentivando seus
              negócios, dando prioridade em indicar mulheres como fornecedoras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
