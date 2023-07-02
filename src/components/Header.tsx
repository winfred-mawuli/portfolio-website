import {navList} from "../constants/app_constanst";
import {FcDownload} from "react-icons/fc"

export const Header = () => {
    console.log(navList);
    return (
        <div className="flex justify-evenly mt-5 items-center">
            <h1 className="text-blue-900  font-extrabold text-4xl">MawuliDev</h1>
            <nav className="ml-96">
                <ul className="flex justify-evenly gap-10 items-center">
                    {navList.map((item, index) => (
                        <li key={index} className="hover:text-blue-900 hover:underline text-xl">{item}</li>
                    ))}
                </ul>
            </nav>
            <button className="active:bg-amber-500 flex gap-3 items-center py-2 px-4 rounded cursor-pointer">Download CV<FcDownload/>
            </button>

        </div>
    );
};
