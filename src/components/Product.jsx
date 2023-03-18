import PropTypes from 'prop-types';
// import { Style } from './Style';

const Product = props => {
  const { price, descr, name } = props;

  return (
    <div
      style={{
        marginLeft: 50,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: getColor(variant),
      }}
    >
      <h2> Product info:</h2>
      <p>Name: {name}</p>
      <p>Price: {price} zł</p>
      <p>Description: {descr}</p>
    </div>
  );
};

Product.propTypes = {
  price: PropTypes.number,
  descr: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Product;
