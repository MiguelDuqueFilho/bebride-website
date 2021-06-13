import React from 'react';

import styles from './styles.module.scss';
import { PlanType } from '../Plans';

import * as Go from 'react-icons/go';

const Icon = (props: any) => {
  const { iconName } = props;
  let icon = null;
  icon = React.createElement(Go[iconName]);
  return icon;
};

type Props = {
  item: PlanType;
};

function Types({ item }: Props) {
  return (
    <div className={styles.ContainerItem}>
      <div className={styles.ContainerIcon}>
        <Icon iconName={item.icon} />
        <h2>{`${item.title}`}</h2>
        <p>{item.resume}</p>
      </div>
    </div>
  );
}

export default Types;
