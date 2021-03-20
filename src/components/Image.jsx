import React, {memo, useMemo} from "react"

export const Image = memo(
    ({ src = "", alt = "", fit = "cover", position = "center" }) => {
        const style = useMemo(
            () => ({ objectFit: fit, objectPosition: position }),
            [fit, position]
        );
        return <img className="image" src={src} style={style} alt={alt} />;
    }
);