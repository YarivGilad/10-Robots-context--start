import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
    source: string;
    alt?: string;
}
export function ImageLoader({ source: src , alt}: Props) {

    const [isLoading, setIsLoading] = useState(true);
    const [source, setSource] = useState(src);
    const [count, setCount] = useState(0);

    useEffect(() => setSource(src), [src]);

    const onImageLoad = () => {
        setIsLoading(false);
    };
    const onImageError = () => {
        if (count <= 5) {
            console.log("reloading ,", count);
            setCount(count + 1);
            setSource(`${src}?r=${Math.random()}`);
        }
    };

    return (
        <WrapperDiv $showicon={isLoading}
                    $showimage={!isLoading}>
            <span className="icon" role="img" aria-label="robot emoji">
                🤖
            </span>
            <img src={source}
                alt={alt}
                className="thumb"
                onLoad={onImageLoad}
                onError={onImageError} />
        </WrapperDiv>
    );
}
interface WrapperDivProps {
    $showicon: boolean;
    $showimage: boolean;
}

const WrapperDiv = styled.div<WrapperDivProps>`

    --showIcon: ${({ $showicon }) => ($showicon ? 1 : 0)};
    --showImage: ${({ $showimage }) => ($showimage ? 1 : 0)};

    position: relative;

    span.icon {
        opacity: var( --showIcon);
        font-size: 4rem;
        position: absolute;
        height: 10rem;
        width: 10rem;
        border: lightgrey 1px solid;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img.thumb {
        opacity: var(--showImage);
        height: 10rem;
        width: 10rem;
        border-radius: 50%;
        background-color: darksalmon;
        transition: box-shadow 150ms, margin 150ms, padding 150ms;
    }
`;

