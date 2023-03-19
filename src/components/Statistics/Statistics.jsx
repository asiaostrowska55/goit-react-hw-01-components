import css from '../components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats = [] }) => {
  return (
    <section className={css.stats}>
      {title ? <h2 className={css.title}>{title}</h2> : null}

      <ul className={css.list}>
        {stats.map(data => (
          <li
            key={data.id}
            className={css.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
