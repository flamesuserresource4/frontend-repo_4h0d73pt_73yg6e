import React, { useState } from 'react';
import { User, HelpCircle } from 'lucide-react';

const roles = [
  { label: 'Super Admin', value: 'superadmin' },
  { label: 'Admin', value: 'admin' },
  { label: 'User (Staff / Community)', value: 'user' },
];

const LoginCard = () => {
  const [role, setRole] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // For now we just show an alert; in a full app, call backend API here.
    alert(`Logged in as ${username || 'guest'} [${role}]`);
  };

  return (
    <div className="w-full max-w-md">
      <div className="backdrop-blur-2xl bg-[rgba(255,255,255,0.08)] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7DE2D1] to-[#1B1A55] flex items-center justify-center text-[#070F2B] shadow-lg">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#EDEDED]">Welcome back</h2>
            <p className="text-xs text-white/70">Sign in to access the Venyo control center</p>
          </div>
        </div>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="role" className="block text-sm text-white/80 mb-1">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/10 text-[#EDEDED] px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#7DE2D1] transition"
            >
              {roles.map((r) => (
                <option key={r.value} value={r.value} className="bg-[#070F2B] text-[#EDEDED]">
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm text-white/80 mb-1">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full rounded-xl bg-white/10 border border-white/10 text-[#EDEDED] placeholder-white/50 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#7DE2D1]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-white/80 mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl bg-white/10 border border-white/10 text-[#EDEDED] placeholder-white/50 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#7DE2D1]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-[#1B1A55] text-[#EDEDED] px-4 py-3 font-medium border border-white/10 shadow-lg transition transform hover:-translate-y-0.5 hover:shadow-[#7DE2D1]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#070F2B] focus:ring-[#7DE2D1]"
            style={{ boxShadow: '0 0 20px rgba(125,226,209,0.2)' }}
          >
            Login
          </button>

          <div className="flex items-center justify-between text-sm mt-2">
            <button type="button" className="text-[#7DE2D1] hover:underline">Forgot Password</button>
            <button type="button" className="inline-flex items-center gap-1 text-white/80 hover:text-[#F5B841] transition">
              <HelpCircle className="h-4 w-4" /> Help
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
