import styled from 'styled-components';
import { shade } from 'polished';
import { palette } from '../../styles/global';

interface CardProps {
  borderReady?: boolean;
}

interface VoteProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  color: #010101;

  #logo {
    align-items: center;
    display: flex;
    flex-direction: row;
    color: #010101;
    justify-content: center;

    h1 {
      font-size: 45px;
    }

    img {
      width: 15px;
      margin-right: 12px;
    }
  }
  @media (max-width: 600px) {
    padding: 12px;
  }
  > div {
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 80px;
    flex: 1;

    header {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 80px;

      > img {
        width: 210px;
      }

      > svg {
        position: absolute;
        left: 0;
        top: auto;
      }
    }
  }
`;

export const CardSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  flex: 1;
`;

export const CardSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  flex: 1;
`;

export const VoteSection = styled.div<VoteProps>`
  display: grid;
  grid: repeat(2, 80px) / repeat(4, 80px);
  justify-items: center;
  align-items: center;
`;

export const ButtonVote = styled.div<VoteProps>`
  background: ${(props) => (props.selected ? '#010101' : '#ffe133')};
  color: ${(props) => (props.selected ? '#fff' : '#010101')};
  cursor: pointer;
  border: 1px solid #010101;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${shade(0.4, palette.primary)};
  }
`;

export const Card = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 5px solid ${(props) => (props.borderReady ? 'green' : '#010101')};
  img {
    width: 60px;
  }
  h1 {
    font-size: 60px;
  }
  height: 270px;
  width: 100%;
  border-radius: 10px;
  width: 180px;
  margin: 30px;

  ::-webkit-scrollbar {
    display: none;
  }

  header {
    height: 32px;
    background: #fff;
    color: ${palette.primary};
    width: 100%;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
  }
  main {
    width: 100%;
    flex: 1;
    border: 1px solid #010101;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border: 1px solid #010101;
      padding: 8px 12px;
      :hover {
        background: ${shade(0.4, palette.primary)};
        cursor: pointer;
      }

      span {
        display: flex;
        align-items: center;
        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;
