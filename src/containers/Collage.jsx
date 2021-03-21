import {useImages} from "../hooks/useImages"
import {AspectRatio} from "../components/AspectRatio"
import {Image} from "../components/Image"
import React, {memo} from "react"


const layoutVariations = [
    {colClasses: `md:col-span-8 md:col-start-14`, ratio: 1.57},
    {colClasses: `md:col-span-10 md:col-start-2`, ratio: 1.4522},
    {colClasses: `md:col-span-10 md:col-start-12`, ratio: 1.0836},
    {colClasses: `md:col-span-7 md:col-start-1`, ratio: 2.2177},
    {colClasses: `md:col-span-10 md:col-start-15`, ratio: 0.7808},
    {colClasses: `md:col-span-10 md:col-start-3`, ratio: 1.6334},
    {colClasses: `md:col-span-7 md:col-start-18`, ratio: 2.0916},
    {colClasses: `md:col-span-7 md:col-start-1`, ratio: 2.128}
]

const getLayoutFromIndex = (idx) =>
    layoutVariations[idx % layoutVariations.length]

const CollageBlock = memo(({src, author, ratio, colClasses}) => {
    return (
        <div className={`col-span-full ${colClasses}`}>
            <AspectRatio as="figure" ratio={ratio}>
                <Image fit="contain" position="left bottom" src={src}/>
            </AspectRatio>
            <p className="md:h-0">By {author}</p>
        </div>
    )
})

export default function Collage() {
    const {images, loadMore} = useImages()
    return (
        <>
            <div className="grid grid-cols-24 gap-10-24 gap-y-0 grid-flow-row-dense pb-32">
                {images.map(({id, download_url, author}, idx) => {
                        const {ratio = 1, colClasses = ""} = getLayoutFromIndex(idx)
                        return <CollageBlock key={id} src={download_url} author={author} ratio={ratio}
                                             colClasses={colClasses}/>
                    }
                )}
            </div>
            <button onClick={loadMore}>Load More</button>
        </>
    )
}