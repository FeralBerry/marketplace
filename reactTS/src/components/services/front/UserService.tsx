import axios from "axios";


class UserService{
    static BASE_URL = "http://localhost:4710";
    static async login(email: string, password: string){
        try{
            const res = await axios.post(`${UserService.BASE_URL}/auth/login`, {email, password});
            return res.data;
        } catch (err){
            throw err;
        }
    }
    static async register(userData: { name: string; email: string; password: string }, token: string | null){
        try{
            const res = await axios.post(`${UserService.BASE_URL}/auth/register`, userData,
                {
                    headers: {Authorization:`Bearer ${token}`}
                });
            return res.data;
        } catch (err){
            throw err;
        }
    }
    static async getAllUsers(token: string){
        try{
            const res = await axios.get(`${UserService.BASE_URL}/admin/users`,
                {
                    headers: {Authorization:`Bearer ${token}`}
                });
            return res.data;
        } catch (err){
            throw err;
        }
    }
    static async getProfile(token: string){
        try{
            const res = await axios.get(`${UserService.BASE_URL}/adminuser/get/profile`,
                {
                    headers: {Authorization:`Bearer ${token}`}
                });
            return res.data;
        } catch (err){
            throw err;
        }
    }
    static async getUserById(userId: bigint, token: string){
        try{
            const res = await axios.get(`${UserService.BASE_URL}/admin/user/${userId}`,
                {
                    headers: {Authorization:`Bearer ${token}`}
                });
            return res.data;
        } catch (err){
            throw err;
        }
    }
    static async deleteUser(userId: bigint, token: string) {
        try {
            const res = await axios.delete(`${UserService.BASE_URL}/admin/delete/user/${userId}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                });
            return res.data;
        } catch (err) {
            throw err;
        }
    }
    static async updateUser(userId: bigint, userData: { name: string; email: string; password: string; role: string}, token: string){
            try{
                const res = await axios.put(`${UserService.BASE_URL}/admin/update/user/${userId}`,userData,
                    {
                        headers: {Authorization:`Bearer ${token}`}
                    });
                return res.data;
            } catch (err){
                throw err;
            }
    }
    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }
    static isAuthenticated(){
        const token = localStorage.getItem('token');
        return !!token;
    }
    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === "ADMIN";
    }
    static isUser() {
        const role = localStorage.getItem('role')
        return role === "USER";
    }
    static adminOnly() {
        return this.isAuthenticated() && this.isAdmin();
    }
}
export default UserService;