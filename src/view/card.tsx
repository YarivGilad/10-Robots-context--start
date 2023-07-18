import styled from "styled-components";
import { Robot } from "../types.ts";
import { ImageLoader } from "./imageLoader.tsx";

export function Card({ country, description, first_name, avatar }: Robot) {
  return (
    <WrapperDiv>
      <ImageLoader source={avatar} alt="avatar image" />
      <div className="texts-box">
        <h1>
          {first_name} from {country}
        </h1>
        <p>{description}</p>
      </div>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  padding: 2rem 2.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: paleturquoise;
    .thumb {
      box-shadow: 0 0.4rem 1.5rem DimGrey;
      margin-bottom: 3rem;
      padding-bottom: 1rem;
    }       
  }

  &:active {
    background: skyblue;
    color: white;
    div.texts-box {
      h1 {
        color: white;
      }
    }
  }
  div.texts-box {
    padding-left: 2.8rem;

    h1 {
      font-size: 3.8rem;
      font-weight: 400;
      font-family: "Yanone Kaffeesatz", sans-serif;
      color: slategray;
      transition: color 150ms;
    }
    p {
      font-family: "Raleway";
      font-size: 1.4rem;
      max-width: 35rem;
      transition: color 150ms;
    }
  }
`;
