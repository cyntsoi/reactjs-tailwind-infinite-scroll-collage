export const fetchImages = (page = 1) =>
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=8`).then((res) =>
        res.json()
    );