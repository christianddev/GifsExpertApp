export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=esni5sGWXdIrldNyN0GvLFTa3AJr26sS&q=${encodeURI(category)}&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gif = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gif;
}