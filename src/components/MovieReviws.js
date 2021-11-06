import PropTypes from 'prop-types';
import './MovieReviws.css';

export default function MovieReviws({ reviews }) {
  return (
    <div className="movieReviws">
      <ul className="movieReviws-list">
        {reviews.results.map(review => (
          <li className="movieReviws-list_item" key={review.id}>
            <p className="movieReviws-name">
              {review.author}
              {review.created_at}
            </p>
            <p className="movieReviws-content">{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieReviws.propTypes = {
  reviews: PropTypes.shape({}),
};
