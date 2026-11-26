import React, { useState } from 'react'
import { ToastContainer } from "react-toastify"
import { useAuth } from '../hooks/auth/useAuth'
import { MoonLoader } from "react-spinners";

const Connexion = () => {
    const [identifiant, setIdentifiant] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { login, isLoggingIn } = useAuth()    

    const connexion = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        login({ identifiant, password })
    }

    return (
        <div className='p-4 bg-image w-screen h-screen flex items-center justify-center'>
            <ToastContainer />
            <div className='p-6 w-1/3 bg-bleu-12/80 rounded-3xl flex items-center justify-center gap-4'>                
                <form onSubmit={connexion} className='w-full flex flex-col items-start justify-start gap-8'>
                    <h1 className='text-3xl text-left text-bleu-9 font-bold'>Bienvenue, Admin</h1>
                    <div className='w-full flex flex-col items-start justify-start gap-4'>
                        <div className="w-full flex flex-col items-start justify-start gap-2.5">
                            <label htmlFor="email-telephone" className="text-xl text-bleu-8 font-medium">Email ou téléphone</label>
                            <input
                                onChange={(e) => setIdentifiant(e.target.value)}
                                value={identifiant}
                                id="email-telephone" 
                                type="text"
                                required 
                                className="border border-bleu-7 rounded-xl w-full py-2.5 px-2.5 text-base text-gris-1 outline-0 focus:border-bleu-9 focus:ring-bleu-9 placeholder:text-bleu-7" placeholder="ex: example@mail.com ou 12345678" 
                            />
                        </div>
                        <div className="w-full flex flex-col items-start justify-start gap-2.5">
                            <label htmlFor="mdp" className="text-xl text-bleu-8 font-medium">Mot de passe</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                id="mdp" 
                                type="password" 
                                required
                                className="border border-bleu-7 rounded-xl w-full py-2.5 px-2.5 text-base text-gris-1 outline-0 focus:border-bleu-9 focus:ring-bleu-9 placeholder:text-bleu-7" placeholder="ex: 12345678@Abc" 
                            />
                        </div>
                        <button
                            disabled={isLoggingIn}
                            type='submit' 
                            className="border border-transparent cursor-pointer mt-4 px-4 py-2 bg-bleu-9 rounded-2xl w-full text-lg text-gris-12 font-medium flex items-center justify-center transition duration-200 hover:border-bleu-9 hover:bg-transparent hover:text-bleu-9"
                        >
                            {
                                isLoggingIn 
                                ? (
                                    <MoonLoader color="#EEEEF0" size={24} />
                                ) : "Se connecter"
                            }                            
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Connexion
