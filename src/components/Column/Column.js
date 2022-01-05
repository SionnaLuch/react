import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss'
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
class Column extends React.Component {
    state = {
       cards: this.props.columns || [],
      }
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  addCard(title){
    this.setState(state => (
        {
            cards:[
                ...state.cards,
                {
                    key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                    title,
                }
            ]
        }
    ));
}
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
            <span className={styles.icon}><Icon name={this.props.icon} /></span>
            {this.props.title}</h3>

        <div className={styles.cards}>
            {this.state.cards.map(({key, ...cardsProps}) => (
                <Card key={key} {...cardsProps} />
            ))}
        </div>
        <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    );
  }
}

export default Column;