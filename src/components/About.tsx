import {description, name, profession} from "../constants/app_constanst";
import picture from "./mypicture.png"

export const About = () => {

    return (
<div className="flex ">
    <div className="flex flex-col lg:flex-row  justify-between gap-10 w-auto align-middle  items-center">
        <div className="w-full md:w-1/2 ">
            <h1 className="bg-red-500 py-2 px-0 w-36 text-center rounded opacity-80 hover:scale-110 transition-all cursor-pointer hover:-rotate-45">Welcome! I'M</h1>
            <h1 className="font-semibold text-5xl">{name}</h1>
            <h4 className="mt-5 font-medium text-2xl">{profession}</h4>
            <p className="mt-5">{description}</p>
        </div>

        <div className="hidden md:block md:w-1/2 h-auto">
            <div className="text-4xl flex items-center justify-end">
                <img className="h-1/2 md:h-[400px] lg:h-[600px] hover:scale-110 transition-all" src={picture} alt="profile-image"/>
            </div>
        </div>

    </div>
</div>
    );
};
