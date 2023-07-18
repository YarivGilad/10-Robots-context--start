import { useRef } from "react";
import styled from "styled-components";
import { Robot } from "../types.ts";

interface FilterProps {
  listData: Robot[];
  onFilter: (filteredList: Robot[]) => void;
}

export function Filter({ listData, onFilter }: FilterProps) {
  const num = useRef(-1);
  const input = useRef<HTMLInputElement>(null);

  const updateList = () => {
    num.current = 0;
    const txt = (input.current as HTMLInputElement).value;

    const filteredList = listData.map((item) => {
      const show = item.first_name.toLowerCase().includes(txt.toLowerCase());
      if (show) num.current++;
      return { ...item, show };
    });
    onFilter(filteredList);
  };

  return (
    <Div>
      <h4 className="filter_title">
        {num.current !== -1 ? num.current : listData.length} items filtered
      </h4>
      <input ref={input} className="filter" onChange={updateList} />
    </Div>
  );
}



const Div = styled.div`
  background: lightsalmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h4.filter_title {
    font-family: "Expletus Sans";
    text-align: left;
    font-size: 2rem;
    font-weight: 400;
    color: darkred;
  }
  input{

    height: 3.5rem;
    width: 24rem;
    outline: none;
    border-radius: 0.5rem;
    border: white 2px solid;
    transition: border 0.5s;
    padding: 1rem;
    
    &:focus {
      border: tomato 2px solid;
    }
  }
`;
