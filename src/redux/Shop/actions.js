import axios from "axios"
import { CREATE_BRAND_FAILED, CREATE_BRAND_SUCCESS, DELETE_BRAND_FAILED, DELETE_BRAND_SUCCESS, GET_BRAND_FAILED, GET_BRAND_REQUEST, GET_BRAND_SUCCESS } from "./actionTypes";

// Brands Actions
export const getAllBrands = () => async (dispatch) => {
    try {
        // for Loading purpose GET_BRAND_REQUEST
        dispatch({ type: GET_BRAND_REQUEST });
        await axios.get("http://localhost:5050/api/v1/product/brand").then((res) => {
            dispatch({ type: GET_BRAND_SUCCESS, payload: res.data.brands });
        }).catch((error) => {
            console.log(error.message);
            dispatch({ type: GET_BRAND_FAILED, payload: error.response.data.message });
        });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: GET_BRAND_FAILED, payload: error.response.data.message });
    }
}

// Brands Actions
export const createBrands = ({data, setModal, setInput, setLogo}) => async (dispatch) => {
    try {
        await axios.post("http://localhost:5050/api/v1/product/brand", data).then((res) => {
            dispatch({ type: CREATE_BRAND_SUCCESS, payload: res.data.brand });
            // input form reset or empty code
            setModal(false);
            setInput("");
            setLogo(null);
        }).catch((error) => {
            console.log(error.message);
            dispatch({ type: CREATE_BRAND_FAILED, payload: error.response.data.message });
        });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: CREATE_BRAND_FAILED, payload: error.response.data.message });
    }
}

// Brands Actions
export const deleteBrand = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5050/api/v1/product/brand/${id}`).then((res) => {
            dispatch({ type: DELETE_BRAND_SUCCESS, payload: id });
        }).catch((error) => {
            console.log(error.message);
            dispatch({ type: DELETE_BRAND_FAILED, payload: error.response.data.message });
        });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: CREATE_BRAND_FAILED, payload: error.response.data.message });
    }
}