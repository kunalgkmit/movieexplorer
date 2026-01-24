interface LoginProps{
    userName: string;
    password: string
}

interface UserSession{
    sessionId: string;
    isLoggedIn: boolean;
}