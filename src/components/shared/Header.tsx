import {HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch} from "react-icons/hi";

export default function Header(){
    return (
        <div className="bg-white h-16 p-4 flex justify-between items-center border-b border-gray-200">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
                <input type="text" placeholder="search ....."  className="text-sm pl-11 pr-4 px-4 border border-gray-300 focus:outline-none active:outline-none h-10 w-[24rem]"/>
            </div>
            <div className="flex items-center- gap-2 mr-2">
                <HiOutlineChatAlt fontSize={23} />
                <HiOutlineChatAlt fontSize={23} />

                <div>
                    {/*<HiOutlineBell fontSize={23} />*/}
                </div>
            </div>
        </div>
    )
}
