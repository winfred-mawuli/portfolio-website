export const Footer = () => {
    const currentYear:number = new Date().getFullYear();
    return (
        <div className="bg-gray-900 h-10">
            <p className="text-center px-2 py-2">Copyright © {currentYear} <span style={{fontFamily: 'Dancing Script'}}>MawuliDev</span>, All Rights Reserved.</p>
        </div>
    );
};
