import {useImages} from "../hooks/useImages"
import {AspectRatio} from "../components/AspectRatio"
import {Image} from "../components/Image"
import React from "react"

const layoutVariations = [{ ratio: 1.5 }, { ratio: 2 }, {}];

const getLayoutFromIndex = (idx) =>
    layoutVariations[idx % layoutVariations.length];

export default function Collage() {
    const { images, loadMore } = useImages();
    return (
        <div>
            {images.map(({ id, download_url, author }, idx) => {
                const { ratio = 1 } = getLayoutFromIndex(idx);
                return (
                    <article key={id}>
                        <AspectRatio as="figure" ratio={ratio}>
                            <Image fit="contain" position="left bottom" src={download_url} />
                        </AspectRatio>
                        <p style={{ display: "block" }}>By {author}</p>
                    </article>
                );
            })}
            <button onClick={loadMore}>Load More</button>
        </div>
    );
}