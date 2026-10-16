import { MoonLoader } from 'react-spinners'

const PageLoader = () => {
    return (
        <div className='w-screen h-screen bg-gris-12 flex items-center justify-center'>
            <MoonLoader color='#0C7DEF' size={40} />
        </div>
    )
}

export default PageLoader
