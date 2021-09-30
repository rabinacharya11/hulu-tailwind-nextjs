import request from '../utils/request';
import {useRouter} from 'next/router'
function Nav() {
    const route = useRouter()
    return (
        <nav className='relative' >
            <div className="flex px-10 sm:px-20 3xl:px-40 3xl:text-2xl  space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide whitespace-nowrap">

            {
                Object.entries(request).map(([key, { title, url }]) => {
                    return <h1
                        key={key}
                        onClick={ ()=>route.push(`/?genres=${key}`)}
                        className="hover:scale-125
                         hover:text-white
                          last:pr-24
                          sm:pr-10
                          cursor-pointer
                          transition duration-100 transform
                          ">{title}</h1>
                })
            }
            </div>
            <div className='absolute right-0 top-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12'></div>
            
        </nav>
    )
}

export default Nav
