import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 40px 0;

  h1 {
    color: red;
  }

  span {
    color: blue;
  }

  &.invalid {
    color: green;
  }
`;

export default StyledHeader;
