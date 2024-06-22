import React from "react";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 h-16 flex items-center justify-center shadow-sm border-b bg-white z-50">
      <div className="flex w-full max-w-[1600px] items-center justify-between px-4 md:px-6">
        <p className="font-omnes text-3xl font-semibold font-wolt">
          <span className="inline text-wolt-blue">Wolt</span> Picker
        </p>
      </div>
    </div>
  );
}
