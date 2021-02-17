export function addToFavourites(payload) {
    return {
        type: 'ADD_TO_FAVOURITES',
        payload
    }
}

export function removeFromFavourites(payload) {
    return {
        type: 'REMOVE_FROM_FAVOURITES',
        payload
    }
}