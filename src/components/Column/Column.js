import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
// import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';
class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    columns: PropTypes.array,
    icon: PropTypes.string.isRequired,
    cards: PropTypes.array,
  };

  render() {
    const{title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={icon} /></span>
          {title}</h3>

        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/* <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;