import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';

const Notice = ({ message, duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onClose) {
                onClose(); // Call the onClose function if provided
            }
        }, duration);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null; // Do not render if not visible

    return (
       
            <div className="messsage border-2 rounded-lg  top-0 right-0 absolute w-1/3 h-24  items-center flex justify-center ">
                <ChevronDownIcon className="w-10 h-full"/>
                    <span >{message}</span>
                </div>
              

    );
};

export default Notice;
