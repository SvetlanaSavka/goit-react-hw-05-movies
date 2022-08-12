import { LinkStyled } from './BackLink.styled';

export const BackLink = ({ backLinkHref }) => {
  return (
    <>
      <LinkStyled to={backLinkHref}>Back to movies</LinkStyled>
    </>
  );
};
