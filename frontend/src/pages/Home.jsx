import React, { useContext } from 'react';
import dashboardImg from '.././assets/png/dashboard.png'
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/Wrapper';
const Home = () => {
    const { user } = useContext(AuthContext)
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate()

    // Custom SVG Icon Components (No library needed)
    const Icons = {
        Analytics: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
        ),
        Shield: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        ),
        Zap: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
        ),
        Bell: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
        ),
        Mobile: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
        ),
        Dashboard: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
        ),
        ArrowRight: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        )
    };

    const featureList = [
        {
            icon: <Icons.Analytics />,
            title: "Interactive Analytics",
            description: "Visualize spending trends with dynamic Recharts. Filter by category to see exactly where your money goes each month."
        },
        {
            icon: <Icons.Shield />,
            title: "Secure JWT Auth",
            description: "Rest easy with industrial-grade authentication. We use httpOnly cookies and cross-site protection to keep your data private."
        },
        {
            icon: <Icons.Zap />,
            title: "Instant CRUD",
            description: "Add, update, or cancel subscriptions in seconds. Our optimized MERN backend ensures zero-lag data persistence."
        },
        {
            icon: <Icons.Bell />,
            title: "Renewal Intelligence",
            description: "Automatic countdowns for upcoming bills. Never get hit with a surprise 'auto-renew' charge ever again."
        },
        {
            icon: <Icons.Mobile />,
            title: "Mobile Optimized",
            description: "Access your dashboard on the go. Designed with a mobile-first approach to ensure a seamless experience on any device."
        },
        {
            icon: <Icons.Dashboard />,
            title: "Clean UI/UX",
            description: "Built with Tailwind CSS for a modern, clutter-free experience. Focus on your finances, not on figuring out the app."
        }
    ];

    return (
        <div className="bg-slate-950 text-slate-100 w-screen  selection:bg-slate-800 selection:text-slate-200">
            {/* --- HERO SECTION --- */}
            <div className='h-22 justify-between flex items-center px-4 lg:px-8 py-12'>
                <div className='flex gap-2 items-center justify-center'>
                    <h1 className='bg-white text-2xl font-bold items-center justify-center h-14 w-14 rounded-xl flex text-black'>S</h1>
                    <h1 className='lg:text-5xl text-4xl font-extrabold '>SubTracker</h1>
                </div>
                {!user ? <div className='p-3 lg:flex hidden  gap-3 font-bold text-lg'>
                    <button onClick={() => {
                        navigate('/login')
                    }} className='border cursor-pointer hover:bg-slate-800 px-3 py-1 rounded'>Login</button>
                    <button onClick={() => {
                        navigate('/register')
                    }} className='border px-3 py-1 cursor-pointer hover:bg-slate-800 rounded'>Sign-up</button>
                </div> : <div>
                    <button onClick={() => {
                        navigate('/dashbaord')
                    }} className='border px-3 py-1 cursor-pointer hover:bg-slate-800 rounded'>Dashboard</button>
                </div>}



            </div>
            <section className="relative overflow-hidden border-b  border-slate-900 bg-slate-950 px-6 ">


                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="relative bg-red max-w-5xl mx-auto text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm mb-8">
                        <span className="text-slate-500">◈</span>
                        <span>MERN Stack Security Verified</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-100 mb-6 leading-tight">
                        Master Your Monthly Spending.<br />
                        <span className="text-slate-600">Zero Surprises.</span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        The all-in-one dashboard to visualize subscriptions, eliminate hidden costs, and track every renewal date in real-time.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                        <button onClick={() => {
                            navigate('/register')
                        }} className="flex items-center justify-center gap-2 bg-slate-100 text-slate-950 hover:bg-slate-300 px-10 py-4 rounded-xl font-semibold transition-all shadow-sm">
                            Get Started Free <Icons.ArrowRight />
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-slate-800 hover:bg-slate-900 text-slate-300 px-10 py-4 rounded-xl font-semibold transition-all">
                            Watch Demo
                        </button>
                    </div>

                    <div className="mt-20 w-full max-w-6xl rounded-3xl border border-slate-900 bg-slate-900/40 p-2 shadow-2xl backdrop-blur-sm">
                        <div className="rounded-2xl overflow-hidden bg-slate-950 aspect-[16/8] flex items-center justify-center border border-slate-800 relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                            <span className="text-slate-700 italic group-hover:text-slate-500 transition-colors px-4 text-center">
                                <img src={dashboardImg} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </section >

            {/* --- FEATURES SECTION --- */}
            <section section className="py-24 md:py-32 bg-slate-950 px-6" id="features" >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
                        <div className="lg:col-span-1 lg:sticky lg:top-24">
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-100 mb-5 leading-tight">
                                Everything you need to master your bills.
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                SubTracker combines a robust Node.js backend with a high-performance React frontend for total clarity.
                            </p>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featureList.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700 transition-all group"
                                >
                                    <div className="mb-6 p-4 bg-slate-950 rounded-2xl w-fit border border-slate-800 group-hover:border-slate-700 transition-colors text-slate-400">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-slate-100 mb-3">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* --- FOOTER SECTION --- */}
            <footer footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6" >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                        <div className="md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-950">
                                    S
                                </div>
                                <span className="text-xl font-bold tracking-tighter text-slate-100">SubTracker</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                A professional MERN-stack dashboard designed for financial clarity and subscription tracking.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-widest">Navigation</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><a href="#features" className="hover:text-slate-300 transition-colors">Features</a></li>
                                <li><a href="/login" className="hover:text-slate-300 transition-colors">Login</a></li>
                                <li><a href="/signup" className="hover:text-slate-300 transition-colors text-slate-100">Get Started</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-widest">Connect</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><a href="https://github.com" className="hover:text-slate-300 transition-colors">GitHub</a></li>
                                <li><a href="https://linkedin.com" className="hover:text-slate-300 transition-colors">LinkedIn</a></li>
                                <li><a href="mailto:harsh@example.com" className="hover:text-slate-300 transition-colors">Email Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-600 text-xs">
                            © {currentYear} SubTracker. Built with MERN by Harsh Vishnoi.
                        </p>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Home;