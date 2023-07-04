import {navList} from "../constants/app_constanst";
import {FcDownload} from "react-icons/fc"

export const Header = () => {

    return (
        <div className="flex justify-center lg:justify-evenly mt-5 items-center">
            <h1 className="text-blue-900  font-extrabold text-5xl cursor-pointer"
                style={{fontFamily: 'Dancing Script'}}>MawuliDev</h1>
            <nav className="">
                <ul className="flex justify-evenly gap-10 items-center">
                    {navList.map((item: string, index: number) => (
                        <li key={index}
                            className="hover:text-blue-900 hover:underline text-xl hover:scale-110 transition-all cursor-pointer">{item}</li>
                    ))}
                </ul>
            </nav>
            <button
                className="active:bg-amber-500 flex gap-3 items-center py-2 px-4 rounded cursor-pointer hover:bg-green-600 hover:scale-110 transition-all">Download
                CV<FcDownload/>
            </button>
        </div>
    );
};
