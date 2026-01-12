import React from 'react';

const CLIENT_LOGOS = [
    { name: 'Danieli Corus', image: '/assets/clients/danieli-corus.png' },
    { name: 'Hindustan Petroleum', image: '/assets/clients/hindustan-petroleum.png' },
    { name: 'Indian Oil', image: '/assets/clients/indian-oil.png' },
    { name: 'Reliance Industries', image: '/assets/clients/reliance.jpg' },
];

const PMC_LSTK_LOGOS = [
    { name: 'EHT', image: '/assets/clients/eht.png' },
    { name: 'EIL', image: '/assets/clients/eil.png' },
    { name: 'Airfins Ltd', image: '/assets/clients/airfins.png' },
    { name: 'BGR Energy', image: '/assets/clients/bgr-energy.png' },
    { name: 'Witzenmann', image: '/assets/clients/witzenmann.jpg' },
];

const Clients: React.FC = () => {
    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
                        Trusted By Industry Leaders
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Our Esteemed Clients
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center">
                    {CLIENT_LOGOS.map((client, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
                        >
                            <img
                                src={client.image}
                                alt={client.name}
                                className="w-full h-auto max-h-20 object-contain transition-all duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* PMC & LSTK Contractors Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <p className="text-xs font-black text-orange-600 uppercase tracking-[0.2em] mb-4">
                            PMC & LSTK Partners
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                            Contractor Network
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
                        {PMC_LSTK_LOGOS.map((contractor, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all group"
                            >
                                <img
                                    src={contractor.image}
                                    alt={contractor.name}
                                    className="w-full h-auto max-h-16 object-contain transition-all duration-300 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ISO Certification Badge */}
                <div className="mt-16 flex justify-center">
                    <div className="bg-white p-6 rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
                        <img
                            src="/assets/clients/iso-certification.png"
                            alt="ISO 9001:2015 Certified Company"
                            className="h-24 w-auto object-contain"
                        />
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-slate-600 font-medium">
                        ISO Certified | 24/7 Field Support | Pan-India & Global Reach
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Clients;
