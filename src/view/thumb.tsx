import { styled } from "styled-components";

interface ThumbProps {
  image_url: string;
}
export function Thumb({ image_url }: ThumbProps) {
  return (
    <Div>
      <img className="thumb" src={image_url} alt="profile visual" />
    </Div>
  );
}

const Div = styled.div`

  .thumb {
    height: 10rem;
    width: 10rem;

    border-radius: 50%;
    background-color: darksalmon;
    transition: box-shadow 150ms, margin 150ms, padding 150ms;
  }
`;
