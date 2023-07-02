import {navList} from "../constants/app_constanst";

export const Header = () => {
    console.log(navList);
    return (
        <div className="flex justify-evenly mt-5">
            <h1 className="text-blue-900  font-extrabold">MawuliDev</h1>
            <nav className="ml-96">
                <ul className="flex justify-evenly gap-10">
                    {navList.map((item, index) => (
                        <li key={index} className="hover:text-blue-900">{item}</li>
                    ))}
                </ul>
            </nav>
            <div className="active:bg-amber-500 h-auto">
                <button>Download CV</button>
            </div>
        </div>
    );
};
