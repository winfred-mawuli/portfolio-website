import React, { useEffect, useState } from 'react';

export const ComingSoonCounter = () => {
    const targetDate = new Date('2023-08-31'); // Replace with your target date
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const intervalId: NodeJS.Timer = setInterval(() => {
            const currentDate:Date = new Date();
            const differenceInTime:number = targetDate.getTime() - currentDate.getTime();

            const days:number = Math.floor(differenceInTime / (1000 * 3600 * 24));
            const hours:number = Math.floor((differenceInTime / (1000 * 3600)) % 24);
            const minutes:number = Math.floor((differenceInTime / (1000 * 60)) % 60);
            const seconds:number = Math.floor((differenceInTime / 1000) % 60);

            setCountdown({ days, hours, minutes, seconds });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [targetDate]);

    return (
        <div className="mt-40 flex flex-col gap-10 items-center">
            <h2 className="text-8xl font-extrabold text-red-500">Coming Soon</h2>
            <div className="flex gap-5 bg-gradient-to-r from-red-500 to-blue-500 py-5 px-5">
                <p className="text-white text-2xl">{countdown.days} days</p>
                <p className="text-white text-2xl">{countdown.hours} hours</p>
                <p className="text-white text-2xl">{countdown.minutes} minutes</p>
                <p className="text-white text-2xl">{countdown.seconds} seconds Left</p>
            </div>
        </div>
    );
};
