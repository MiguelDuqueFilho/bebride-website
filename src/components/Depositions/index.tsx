import Image from 'next/image';
import styles from './styles.module.scss';

export type DepositionItem = {
  id: number;
  eventId: number;
  depositionTitle: string;
  depositionDescription: string;
  depositionFilename: string;
  uploadId: number;
  depositionShow: boolean;
  updatedAt: string;
  Events: [
    {
      eventName: string;
    }
  ];
};

type Props = {
  depositionItens: DepositionItem[];
};

function Depositions({ depositionItens }: Props) {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerContent}>
        <div className={styles.ContainerTitle}>
          <h2>
            <p>Depoimentos</p>
          </h2>
        </div>
        <div className={styles.ContainerItens}>
          {depositionItens.map((list) => {
            return (
              <div key={list.id} className={styles.ContainerItem}>
                <div className={styles.ContainerCard}>
                  <Image
                    className={styles.StyledImage}
                    src={`/images/deposition_${list.id}.jpeg`}
                    alt='depositions'
                    width={600}
                    height={400}
                  />
                  <div className={styles.CardBody}>
                    <h4>{list.Events[0].eventName}</h4>
                    <p>{list.depositionDescription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Depositions;
