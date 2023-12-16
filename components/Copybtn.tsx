import React, { useRef, useState } from 'react';
import '../app/globals.css';

const Copybtn = () => {
    const [isCopied, setCopied] = useState(false);

    const stll =
        'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 hidden';

        let text = "0000 0000 0000 000" ;

        function copyToClipboard() {
        // alert(text);

        navigator.clipboard.writeText(text) ;

        setCopied(true);
    };

    const handleButtonClick = () => {
        copyToClipboard();
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <div className="w-fit rounded-md mt-3  flex flex-col">
          
            <input type="text" value={text} className="mb-4 p-3 rounded-lg h-fit bg-[#f1f1f1] text-center" disabled />
            <button
                onClick={handleButtonClick}
                onTouchStart={handleButtonClick}
                className={stll}
            >
                {!isCopied ? 'Copy' : 'Copied!'}
            </button>
        </div>
    );
};

export default Copybtn;
