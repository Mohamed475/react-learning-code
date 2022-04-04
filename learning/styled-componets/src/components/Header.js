import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.header};
  padding: 40px 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
      <div>
        <span>test</span>
      </div>
    </StyledHeader>
  );
};

export default Header;
