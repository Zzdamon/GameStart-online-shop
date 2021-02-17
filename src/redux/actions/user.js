import { signIn, signOut } from '../../apis/firebase/firebase';

function startLoading() {
    return {
        type: 'START_LOADING'
    }
}
function updateUserData(payload) {
    return {
        type: 'UPDATE_USER_DATA',
        payload
    }
}
function updateUserError(payload) {
    return {
        type: 'UPDATE_USER_ERROR',
        payload
    }
}



export function loginUser(provider) { 
    return (dispatch) => {
        dispatch(startLoading());
        // if(provider==="google"){

            signIn(provider).then(userData => {
                dispatch(updateUserData(userData.user));
            }).catch(error => {
                dispatch(updateUserError(error));
            });
        }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}