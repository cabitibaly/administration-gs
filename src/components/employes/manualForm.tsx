

const ManualForm = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start gap-6">            
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <label htmlFor="matricule" className="text-lg text-gris-8 font-medium">Matricule</label>
                <input id="matricule" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le matricule..." />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
                <label htmlFor="departement" className="text-lg text-gris-8 font-medium">Département</label>
                <input id="departement" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le département..." />
            </div>
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="nom" className="text-lg text-gris-8 font-medium">Nom</label>
                    <input id="nom" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le nom..." />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="prenom" className="text-lg text-gris-8 font-medium">Prénom</label>
                    <input id="prenom" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le prénom..." />
                </div>
            </div>    
            <div className="w-full flex items-center justify-center gap-6">
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="telephone" className="text-lg text-gris-8 font-medium">Téléphone</label>
                    <input id="telephone" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le téléphone..." />
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                    <label htmlFor="email" className="text-lg text-gris-8 font-medium">Email</label>
                    <input id="email" type="text" className="border border-transparent bg-gris-11/20 rounded-xl w-full py-3 px-2 text-base text-gris-1 outline-0 focus:border-gris-8 focus:ring-gris-8 placeholder:text-gris-10" placeholder="Saisir le mail..." />
                </div>
            </div>    
        </div>
    )
}

export default ManualForm
