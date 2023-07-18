import styled from "styled-components";
import { Robot } from "../types.ts";
import { ImageLoader } from "./imageLoader.tsx";

export const Profile = ({
    id,
    first_name,
    last_name,
    email,
    country,
    description,
    avatar
}: Partial<Robot>) => {

    avatar = avatar?.replace("100x100", "300x300");

    return (
        <Div>
            <div className="image-box">
                {/* <img src={avatar} alt="avatar" /> */}
                <ImageLoader source={avatar as string} alt="avatar image" />
            </div>
            <div className="details-box">
                <h2>
                    {first_name} {last_name}
                </h2>
                <span className="line" />
                <h5 className="detail">id: {id}</h5>
                <h5 className="detail">country: {country}</h5>
                <h5 className="detail">email: {email}</h5>
                <p>{description}</p>
            </div>
        </Div>
    );
};

const Div = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    padding-right: 15px;
    align-items: center;
  
    div.image-box{
        background: peachpuff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 30rem;
        height: 30rem;

        img {
            border-radius: 50%;
            width: 30rem;
            height: 30rem;
        }
    }
    div.details-box{
      padding: 10px;
      font-family: "Expletus Sans";
      text-align: left;
      color: slategray;
      font-weight: 400;

      h2{
          font-size: 3.5rem;
          font-weight: inherit;
          text-align: center;
          font-family: "Griffy", cursive;
      }
      span.line{
        margin: 2rem 0;
        display: block;
        width: 100%;
        border: none;
        height: 1px;
        background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 200, from(midnightblue), to(Cornsilk));
        background: -moz-radial-gradient(50% 50%, circle, midnightblue 0, Cornsilk 200px);
        background: gradient( radial, 50% 50%, 0, 50% 50%, 200, from(midnightblue), to(Cornsilk));
      }
      h5.detail{
        font-size: 1.8rem;
        font-weight: inherit;
        color: darkslateblue;
      }
      p{
        margin-top: 2rem;
        font-family: "Raleway";
        font-size: 1.8rem;
        max-width: 40rem;
      }
    }
`;
