import axios from "axios";
import { BASE_URL } from "../components/utils/baseUrl";

export const useFetchApi = () => {
    const base = axios.create({
        baseURL: BASE_URL + 'hackathon/',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    return {
        GET_CATEGORY_LIST: () => base.get('categories-list'),
        CREATE_REGISTRATION_APPLICATION: (body) => base.post('registration', body),
        CREATE_CONTACT_APPLICATION: (body) => base.post('contact-form', body),
    };
}