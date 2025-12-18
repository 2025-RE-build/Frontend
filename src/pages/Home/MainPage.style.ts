import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffc4d1;
`;

export const TopSection = styled.section`
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding-bottom: 120px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const WaveDivider = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  padding-top: 50px;
  margin-bottom: 6px;
  overflow: hidden;

  img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const TopMessage = styled.p`
  margin-top: -17px;
  text-align: center;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 13px;
  color: #000;
  z-index: 7;
  white-space: nowrap;

  .white {
    color: #fff;
  }
`;

export const StickerLayer = styled.div`
  position: relative;
  width: 100%;
  height: 0;

  .flower,
  .bsmile {
    position: absolute;
    object-fit: contain;
    pointer-events: none;
  }

  .bsmile {
    width: 62px;
    top: -20px;
    right: 15px;
    z-index: 3;
  }

  .bf1 {
    width: 25px;
    top: -22px;
    left: 82px;
  }

  .bf2 {
    width: 61px;
    top: 628px;
    right: 12px;
  }

  .bf3 {
    width: 96px;
    top: -30px;
    left: 1px;
  }

  .bf4 {
    width: 94px;
    top: 593px;
    left: 0px;
    z-index: 3;
  }

  .bf5 {
    width: 21px;
    top: -20px;
    right: 79px;
  }

  .bf5--bottom {
    width: 21px;
    left: 16px;
    top: 318px;
  }
`;
