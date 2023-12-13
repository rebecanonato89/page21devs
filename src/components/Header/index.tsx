import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="h-[4rem] bg-black w-screen text-white flex items-center " > 
         <div className="w-full xl:max-w-[1250px] mx-auto px-6" >
            <ul className="hidden w-full lg:flex items-center justify-start space-x-4" >
                <li className="cursor-pointer font-medium hover:text-gray-300">HOME</li>
                <li className="cursor-pointer font-medium hover:text-gray-300">ABOIUT US</li>
                <li className="cursor-pointer font-medium hover:text-gray-300">CONTACT US</li>
            </ul>

            <AiOutlineMenu size={28} className='lg:hidden' />
         </div>
    </div>
  )
}

export default Header