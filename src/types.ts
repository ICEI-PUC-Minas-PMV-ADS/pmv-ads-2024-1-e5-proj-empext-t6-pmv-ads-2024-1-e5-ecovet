
export interface DialogState {
    isOpen: boolean,
    title: string,
    message: string,
    action?: string,
    messageArray?: any[]
    redirect?: ''
}

export interface LoadingState {
    isLoading: boolean
}

export interface UserState {
    name?: string,
    userName?: string,
    email?: string,
    isAuthorized: boolean,
    userRegistrationId?: number,
    userType?: string,
    role?: string,
    id?: number, 
    token?: string
}
