import React, { useState } from 'react';

interface Plan {
    id: string;
    name: string;
    premium: number;
    coverage: number;
    status: 'active' | 'inactive';
}

interface ClaimData {
    id: string;
    amount: number;
    status: 'pending' | 'approved' | 'rejected';
    date: string;
}

export default function Dashboard() {
    const [plans] = useState<Plan[]>([
        { id: '1', name: 'Basic Plan', premium: 150, coverage: 80000, status: 'active' },
        { id: '2', name: 'Premium Plan', premium: 300, coverage: 150000, status: 'active' },
    ]);

    const [claims] = useState<ClaimData[]>([
        { id: 'C001', amount: 5000, status: 'approved', date: '2024-01-15' },
        { id: 'C002', amount: 3000, status: 'pending', date: '2024-01-20' },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Health Insurance Dashboard</h1>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-600 text-sm font-semibold">Active Plans</h3>
                        <p className="text-3xl font-bold text-indigo-600">{plans.length}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-600 text-sm font-semibold">Total Premium</h3>
                        <p className="text-3xl font-bold text-green-600">${plans.reduce((sum, p) => sum + p.premium, 0)}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-gray-600 text-sm font-semibold">Pending Claims</h3>
                        <p className="text-3xl font-bold text-orange-600">{claims.filter(c => c.status === 'pending').length}</p>
                    </div>
                </div>

                {/* Plans Section */}
                <div className="bg-white rounded-lg shadow mb-8">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800">Your Plans</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Plan Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Premium</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Coverage</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plans.map(plan => (
                                    <tr key={plan.id} className="border-t border-gray-200 hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-gray-800">{plan.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-800">${plan.premium}</td>
                                        <td className="px-6 py-4 text-sm text-gray-800">${plan.coverage.toLocaleString()}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                                                {plan.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Claims Section */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800">Recent Claims</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Claim ID</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {claims.map(claim => (
                                    <tr key={claim.id} className="border-t border-gray-200 hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-gray-800">{claim.id}</td>
                                        <td className="px-6 py-4 text-sm text-gray-800">${claim.amount}</td>
                                        <td className="px-6 py-4 text-sm text-gray-800">{claim.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                                claim.status === 'approved' ? 'bg-green-100 text-green-800' :
                                                claim.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                {claim.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}