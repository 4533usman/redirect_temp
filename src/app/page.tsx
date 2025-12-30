import React from 'react';

export default function VerifiedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] text-[#e5e7eb] font-sans">
      <div className="bg-[#111827] p-8 rounded-xl text-center max-w-[420px] w-full mx-4 space-y-4">
        <h1 className="text-[#38bdf8] text-3xl font-bold">Account Verified ✅</h1>
        <p>Your Mirror-Atlas account has been successfully confirmed.</p>
        <p>Please return to the app and log in.</p>
      </div>
    </div>
  );
}
