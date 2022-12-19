import styled from '@emotion/styled';

export const Container = styled.div`
  width: 350px;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;

  background-color: ${props => props.theme.colors.white};
`;

export const Description = styled.div`
  padding: 15px;
  text-align: center;
`;

export const Avatar = styled.img`
  display: inline-block;
  padding: 10px;
  width: 150px;
  height: 150px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.stats};
`;

export const Name = styled.p`
  margin-top: 30px;
  font-size: 30px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-top: 15px;
  font-size: 20px;

  color: ${props => props.theme.colors.primaryText};
  opacity: 0.5;
`;

export const Location = styled.p`
  margin-top: 15px;
  font-size: 16px;

  color: ${props => props.theme.colors.primaryText};
  opacity: 0.5;
`;

export const Stats = styled.ul`
  margin-top: 30px;
  padding: 15px;
  height: 100px;

  background-color: ${props => props.theme.colors.stats};

  display: flex;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex-basis: calc(100% / 3);

    border: 1px solid transparent;
  }
`;

export const Label = styled.span`
  font-size: 20px;

  color: ${props => props.theme.colors.primaryText};
  opacity: 0.5;
`;

export const Quantity = styled.span`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
`;
