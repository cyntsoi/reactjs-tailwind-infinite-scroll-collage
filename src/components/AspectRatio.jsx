import {createElement, memo, useMemo} from "react"
import {getPercentage} from "../utils/getPercentage"

export const AspectRatio = memo(({ ratio = 1, children, as = "div" }) => {
    const style = useMemo(() => ({ paddingTop: getPercentage(ratio) }), [ratio]);
    return createElement(as, { className: "aspect-ratio", style }, children);
});