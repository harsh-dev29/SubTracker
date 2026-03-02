import React from 'react'
import { motion } from "framer-motion";

const NotLogin = () => {
    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
    });

    function LockIcon() {
        return (
            <motion.div
                whileHover={{ rotate: [0, -8, 8, -4, 4, 0] }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="cursor-default select-none"
            >
                <svg width="34" height="38" viewBox="0 0 36 40" fill="none">
                    <motion.path
                        d="M9 18V13C9 7.477 13.477 3 19 3C24.523 3 29 7.477 29 13V18"
                        stroke="#d4d4d4"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    />
                    <motion.rect
                        x="4" y="18" width="30" height="20" rx="3" fill="#e5e5e5"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        style={{ transformOrigin: "bottom center" }}
                    />
                    <motion.circle
                        cx="19" cy="27" r="3" fill="#a3a3a3"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.75 }}
                    />
                    <motion.rect
                        x="18" y="27" width="2" height="5" rx="1" fill="#a3a3a3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.85 }}
                    />
                </svg>
            </motion.div>
        );
    }
    return (
        <div
            className="min-h-screen bg-[#fafaf9] flex items-center justify-center px-6"
            style={{ fontFamily: "'Geist Mono', monospace" }}
        >
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Geist+Mono:wght@300;400&display=swap');`}</style>

            <div className="flex flex-col items-center text-center w-full max-w-[320px]">

                <motion.div {...fadeUp(0)} className="mb-8">
                    <LockIcon />
                </motion.div>

                <motion.h1
                    {...fadeUp(0.15)}
                    className="text-neutral-900 text-[2.5rem] leading-tight mb-3"
                    style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
                >
                    Login required
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                    className="w-6 h-px bg-neutral-200 my-5 origin-center"
                />

                <motion.p
                    {...fadeUp(0.32)}
                    className="text-[0.63rem] text-neutral-400 tracking-[0.12em] leading-relaxed mb-8"
                >
                    You need to be signed in<br />to access this page.
                </motion.p>

                <motion.a
                    {...fadeUp(0.42)}
                    href="/login"
                    whileHover={{ backgroundColor: "#111111", color: "#ffffff" }}
                    transition={{ duration: 0.25 }}
                    className="w-full border border-neutral-900 text-neutral-900 text-[0.63rem] tracking-[0.2em] uppercase py-3.5 text-center block"
                >
                    Sign in
                </motion.a>

                <motion.div {...fadeUp(0.5)} className="flex items-center gap-3 w-full my-5">
                    <div className="flex-1 h-px bg-neutral-100" />
                    <span className="text-[0.53rem] tracking-[0.15em] text-neutral-300 uppercase">or</span>
                    <div className="flex-1 h-px bg-neutral-100" />
                </motion.div>

                <motion.a
                    {...fadeUp(0.56)}
                    href="/register"
                    whileHover={{ color: "#171717" }}
                    className="text-[0.6rem] tracking-[0.18em] uppercase text-neutral-300"
                    transition={{ duration: 0.2 }}
                >
                    Create an account
                </motion.a>

            </div>
        </div>
    )
}

export default NotLogin