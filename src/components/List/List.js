import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {
    state = {
        columns: this.props.columns || [],
    }
    static propTypes = {
        // title: PropTypes.node,
        // children: PropTypes.node,
        // image: PropTypes.string,
        description: PropTypes.node,
        columns: PropTypes.array,
    }
    static defaultProps = {
        // children: <p>I can do all the things!!!</p>,
        description: settings.defaultListDescription,
    }
    addColumn(title) {
        // { console.log('console.log = this = ', this) };
        this.setState(state => (
            {
                columns: [
                    ...state.columns,
                    {
                        key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
                        title,
                        icon: 'list-alt',
                        cards: []
                    }
                ]
            }
        ));
    }
    render() {
        return (
            <section className={styles.component}>
                {/* <h2 className={styles.subtitle}>dowolna tresc</h2> */}
                <Hero titleText={this.props.title} h2ImgSrc={this.props.image} />
                <div className={styles.description}>
                    {/* {this.props.children} */}
                    {ReactHtmlParser(this.props.description)}
                </div>
                <div className={styles.columns}>
                    {this.state.columns.map(({ key, ...columnProps }) => (
                        <Column key={key} {...columnProps} />
                    ))}
                    {/* <Column title='Banany' />
                    <Column title='Ananasy' />
                    <Column title='Jabłka' /> */}
                    <div className={styles.creator}>
                        <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
                        {/* action={title => this.addColumn(title)} */}
                        {/* {console.log('console.log = this = ', this)}; */}
                    </div>
                </div>
            </section>
        )
    }
}

export default List;
