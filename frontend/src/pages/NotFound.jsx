import React, { useEffect, useState } from 'react'

const NotFound = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 50);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Geist+Mono:wght@300&display=swap');
        .f-serif { font-family: 'Instrument Serif', serif; }
        .f-mono  { font-family: 'Geist Mono', monospace; }

        @keyframes up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a1 { animation: up 0.6s ease 0s both; }
        .a2 { animation: up 0.6s ease 0.15s both; }
        .a3 { animation: up 0.6s ease 0.28s both; }
        .a4 { animation: up 0.6s ease 0.4s both; }
      `}</style>

            <div className="h-screen bg-white w-screen flex flex-col items-center justify-center f-mono">

                {visible && (
                    <>
                        {/* Big number */}
                        <span className="a1 f-serif italic text-[11rem] leading-none text-neutral-900 select-none">
                            404
                        </span>

                        {/* Rule */}
                        <div className="a2 w-8 h-px bg-neutral-300 my-8" />

                        {/* Text */}
                        <p className="a3 text-[0.65rem] tracking-[0.22em] uppercase text-neutral-400">
                            Page not found
                        </p>

                        {/* Link */}
                        <a
                            href="/"
                            className="a4 mt-10 text-[0.6rem] tracking-[0.2em] uppercase text-neutral-300 hover:text-neutral-900 transition-colors duration-300"
                        >
                            ← home
                        </a>
                        <a
                            href="/login"
                            className="a4 mt-10 text-[0.6rem] tracking-[0.2em] uppercase text-neutral-300 hover:text-neutral-900 transition-colors duration-300"
                        >
                            ← LOGIN
                        </a>
                    </>
                )}
            </div>
        </>
    );

}

export default NotFound