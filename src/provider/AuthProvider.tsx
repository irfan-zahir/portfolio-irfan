import React from 'react'

interface IAuthProviderType {
    user?: unknown;
    login?: () => void;
    logout?: () => void;
}

export const AuthContext = React.createContext<IAuthProviderType>({})

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {


    const modalRef = React.createRef<HTMLDivElement>()
    const formRef = React.createRef<HTMLFormElement>()

    const [user, setUser] = React.useState()
    const login = () => { }
    const logout = () => { }
    const value: IAuthProviderType = { user, login, logout }


    const isLoggingIn = window.location.search && window.location.search.split("?")[1].split("=")[1] === "true"
    const loginToEdit = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.altKey && event.key === "Enter" && isLoggingIn) {
            modalRef.current?.classList.toggle("modal-open")
        }
    }

    const onVerify: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const form = e.currentTarget.parentElement?.parentElement as HTMLFormElement
        const inputPassword: string = form.password.value
        if (inputPassword === "password") {
        }
    }

    React.useEffect(() => {
        document.addEventListener("keydown", loginToEdit)
        return () => {
            document.removeEventListener("keydown", loginToEdit)
        }
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
            {
                isLoggingIn &&
                <div ref={modalRef} className="modal" id="login-modal">
                    <form className="modal-box w-80">
                        <h3 className="font-bold text-lg mb-3">Login to edit</h3>
                        <input name='password' type="password" placeholder="Password" className="input input-bordered  w-full" />
                        <div className="modal-action">
                            <div id="recaptcha-container"></div>
                            <button id='sign-in-button' type='button' onClick={onVerify} className="btn btn-success w-full">Verify</button>
                        </div>
                    </form>
                </div>
            }
        </AuthContext.Provider>
    )
}
