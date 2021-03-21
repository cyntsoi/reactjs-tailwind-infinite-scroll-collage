import {useInView} from "react-intersection-observer"
import React, {useEffect} from "react"

export const InfiniteScrollLoader = ({loadMore}) => {
    const {ref, inView} = useInView({
        threshold: 0
    })
    useEffect(() => {
        if (inView) {
            loadMore()
        }
    }, [inView, loadMore])
    return <div ref={ref} style={{height: "1px"}} aria-hidden="true"></div>
}
