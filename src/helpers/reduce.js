import { useReducer } from "react";
const error = 'El campo ingresado debe ser mayor a 2 digitos'
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};
const reducer = (state = [], action) => {
    return {
        ...state,
        [action.type]: action.payload
    }
}
export const reduce = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { firstName, lastName, email} = state;



    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: {
                value,
                error: null
            }
        });
    }

    const handleDispatchChange = (name, value, error) => {
        dispatch({
            type: name,
            payload: {
                value,
                error
            }
        })
    }
    const handleEmailChange = (e) => {
        let message;
        const {name, value } = e.target
        handleChange(e)
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            message = 'Correo valido'
        }else if(value === ''){
            message = 'Ingrese su correo'
        }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
            message = 'Su correo es invalido'
        }


        dispatch({
            type: name,
            payload: {
                value,
                error:message
            }
        })
    }
    const handleChangeFuction = (e) => {
        const { name, value } = e.target
        if (value === '') return handleChange(e)
        // const error = `Error ${name}`
        handleChange(e)
        switch (name) {
            case 'firstName':
                if (value.length <= 2) {
                    handleDispatchChange(name, value, error)
                }
                break;
            case 'lastName':
                if (value.length <= 2) {
                    handleDispatchChange(name, value, error)
                }
                break;
            
            default:
                break;
        }
    }


    return {
        initialState,
        firstName, lastName, email,
        reducer,
        handleChangeFuction,
        handleEmailChange
    }
}
