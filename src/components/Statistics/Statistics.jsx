import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const colors = { 22: 'red', 4: 'blue', 17: 'green', 47: 'gray', 10: 'brown' } 

function Statistics({title, stats}) {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>{title}</h2>
            <ul className={s.statList}>
                {stats.map(({id, label, percentage}) => (
                    <li className={s.item} key={id} style={{backgroundColor: colors[percentage],}}>
                        <span className={s.label}>{label}</span>
                        <span className={s.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

export default Statistics;