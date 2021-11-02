import PropTypes from 'prop-types';
export default function MovieReviws({ reviews }) {
  return (
    <div>
      <ul>
        {reviews.results.map(review => (
          <li key={review.id}>
            {review.created_at}
            {review.author}
            {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieReviws.propTypes = {
  reviews: PropTypes.shape({}),
};
