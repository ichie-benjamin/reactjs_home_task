
import {SIDEBAR_BOTTOM_LINKS, SIDEBAR_LINKS} from "../navigation";
import {Link, useLocation} from "react-router-dom";
import {HiOutlineLogout} from "react-icons/all";

const linkClass = "flex items-center gap-2 font-light px-3 py-2 hover:bg-sky-700 hover:no-underline active:bg-sky-400 rounded-sm text-base, text-white"
export default function Sidebar(){

    const { pathname } = useLocation();

    return (
        <div className="bg-cyan-900 w-60 p-3 flex flex-col text-white">
            <div className="flex items-center gap-2 px-1 py-3">

                    <span className="text-neutral-100 text-lg">OC TM</span>
            </div>
            <div className="flex-1 py-5 flex flex-col gap-0.5">
                { SIDEBAR_LINKS.map((item) => (
                    <Link key={item.key} className={pathname === item.path ? 'text-white bg-sky-700 ' +linkClass : 'text-neutral-400 ' +linkClass} to={item.path}>
                        <span className="text-xl">{ item.icon }</span>
                        { item.label }
                    </Link>
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                { SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <Link key={item.key} className={pathname === item.path ? 'text-white bg-sky-700 ' +linkClass : 'text-sky-400 ' +linkClass} to={item.path}>
                        <span className="text-xl">{ item.icon }</span>
                        { item.label }
                    </Link>
                ))}
                <div  className={linkClass+ ' cursor-pointer text-red-500'}>
                    <span className="text-xl"><HiOutlineLogout /></span>
                    Sign out
                </div>
            </div>
        </div>
    )
}
