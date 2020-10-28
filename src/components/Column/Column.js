import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import Creator from '../Creator/Creator';

class Column extends React.Component {
    state = {
        key: this.props.key,
        title: this.props.title,
        icon: this.props.icon,
        cards: this.props.cards || [],
    }
    static propTypes = {
        title: PropTypes.node
    }
    addCard(title) {
        // { console.log('console.log = this = ', this) };
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
                        title
                    }
                ]
            }
        ));
    }
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    {this.props.title}
                    <span className={styles.icon}>
                        <Icon name={this.props.icon} />
                    </span>
                </h3>

                <div className={styles.component}>
                    {this.state.cards.map(({ key, ...cardProps }) => (
                        <Card key={key} {...cardProps} />
                    ))}
                    <div className={styles.creator}>
                        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
                    </div>
                </div>
            </section>
        )
    }
}

export default Column;
