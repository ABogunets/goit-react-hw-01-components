import styled from 'styled-components';

export const StatsItemWrapper = styled.li`
  outline: 1px solid tomato;
  width: 50px;
  padding: 10px 20px;
  /* &:not(:last-child) {
    border-right: 2px solid gainsboro;
    }; */
    background-color: ${p => p.itemColor};

`;

export const Label = styled.span`
display: block;
text-align: center;
margin-bottom: 10px;
color: white;
`;

export const Percentage = styled.span`
display: block;
text-align: center;
font-weight: 700;
color: white;
`;