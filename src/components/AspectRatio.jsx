import {createElement, memo, useMemo} from "react"

export const AspectRatio = memo(({ ratio = 1, children, as = "div" }) => {
    const style = useMemo(() => ({ paddingTop: getPercentage(ratio) }), [ratio]);
    return createElement(as, { className: "aspect-ratio", style }, children);
});