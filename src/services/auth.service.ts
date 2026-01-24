import { CLIENT_ERRORS } from "@constants/constants";
import { axiosInstance } from "@network/axiosinstance";
import { ENDPOINTS } from "@network/URLs";
import { useUserSession } from "@store/userSession";


export const userLogin = async ({ userName, password }: LoginProps) => {
    try {
        // Get Request Token
        const tokenRes = await axiosInstance.get(ENDPOINTS.AUTH.REQUEST_TOKEN);
        const requestToken = tokenRes.data.request_token;

        // Login with Credentials
        const userData = {
            username: userName,
            password: password,
            request_token: requestToken,

        }
        const loginRes = await axiosInstance.post(ENDPOINTS.AUTH.SESSION_LOGIN, userData);

        // Create session
        const loginRequestToken = {
            request_token: loginRes.data.request_token
        };
        const sessionRes = await axiosInstance.post(ENDPOINTS.AUTH.CREATE_SESSION, loginRequestToken);
        
        // Save session ID
        useUserSession.setState({
            sessionId: sessionRes.data.session_id
        })
    } catch (error: any) {
        if (error.response) {
            const { status } = error.response;
            if (status === CLIENT_ERRORS.UNAUTHORIZED) {
                throw new Error("Invalid username or password. Please try again.");
            } else if (error.request) {
                throw new Error("Server is not reachable. Please check your internet connection.");
            }
        }
    }
}