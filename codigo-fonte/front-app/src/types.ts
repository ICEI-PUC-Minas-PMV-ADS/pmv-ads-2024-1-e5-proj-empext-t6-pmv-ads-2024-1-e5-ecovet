
export interface DialogState {
    isOpen: boolean,
    title: string,
    message: string
    messageArray?: any[]
    redirect?: ''
}

export interface LoadingState {
    isLoading: boolean
}

export interface UserState {
    name?: string,
    userName?: string,
    isAuthorized: boolean,
    userRegistrationId?: number,
    role?: string,
    token?: string
}
