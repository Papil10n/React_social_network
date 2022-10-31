import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "84c7f04c-a075-4a9c-a48a-55616b0af6bc"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 9) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data );
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    },
    follow(id) {
        return instance.post(`follow/${id}`,);
    },
    authorize() {
        return instance.get('auth/me');
    },
    getProfile(userId = 1 ) {
        return instance.get(`profile/${userId}`);
    },
}
