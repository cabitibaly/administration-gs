
interface Props {
    isOpen?: boolean;
}

const Logo = ({isOpen}: Props) => {


    return (
        <div className=" mb-6 flex items-center justify-center gap-2">
            <div className="bg-bleu-9 size-9 aspect-square rounded-xl flex items-center justify-center text-2xl text-bleu-12 font-bold">
                L
            </div>
            <span className={`text-2xl text-gris-12 font-semibold max-lg:text-xl ${!isOpen ? "hidden" : "block"}`}>LOGO</span>
        </div>
    )
}

export default Logo
