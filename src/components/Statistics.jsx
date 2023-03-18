const Statistics = ({ title, id, label, percentage }) => {
  //   const { id, label, percentage } = stats;
  return (
    <section className="statistics">
      <h2 className="title">{title == !'' && 'Upload Stats'}</h2>

      <ul className="stat-list">
        <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
