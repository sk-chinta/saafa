
export const searchByName = (name: string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name})
    };
    return fetch('/artists/search', requestOptions)
    .then(res => res.json())
}

export const getArtistById = (id: number) => {
    return fetch(`/artists/${id}`)
    .then(res => res.json())
}