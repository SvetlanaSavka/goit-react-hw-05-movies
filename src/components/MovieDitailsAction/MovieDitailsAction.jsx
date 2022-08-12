import { LinkStyled } from './MovieDitailsAction.styled';

export const MovieDitailsAction = ({ backLinkHref, movieId }) => {
  return (
    <>
      <h2>Additional information</h2>
      <LinkStyled
        to="cast"
        state={{
          from: backLinkHref,
          id: movieId,
        }}
      >
        Go to cast
      </LinkStyled>

      <LinkStyled
        to="reviews"
        state={{
          from: backLinkHref,
          id: movieId,
        }}
      >
        Go to reviews
      </LinkStyled>
    </>
  );
};
