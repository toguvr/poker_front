import styled from 'styled-components';
import { shade } from 'polished';
import { palette } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  color: #010101;

  #logo {
    margin-bottom: 32px;
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

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      margin-top: 16px;
      > span {
        display: flex;
        align-items: center;
        label {
          margin: 8px;
        }
      }
    }

    > img {
      width: 210px;
      margin-bottom: 80px;
    }
  }
`;

export const Rooms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #fff;
  flex: 1;
  max-height: 40vh;
  width: 100%;
  border-radius: 10px;
  max-width: 400px;
  margin: 30px;
  overflow-y: scroll;

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
    border: 1px solid #fff;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border: 1px solid #fff;
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
