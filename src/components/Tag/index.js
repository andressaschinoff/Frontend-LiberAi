import React from "react";

import TagStyle from "./styles";

export default function Tag({ children, style }) {
    return (
        <TagStyle style={style}>
            <p>{children}</p>
        </TagStyle>
    );
}

export function TagDone({ children, style  }) {
    return (
        <TagStyle style={{...style, ...{ backgroundColor: 'var(--green-color)' }}}>
            <p>{children}</p>
        </TagStyle>
    );
}
export function TagInactive({ children, style  }) {
    return (
        <TagStyle style={{ ...style, ...{backgroundColor: 'var(--inactive-color)' }}}>
            <p>{children}</p>
        </TagStyle>
    );
}