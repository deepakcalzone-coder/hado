import React from 'react';

const SettingsPanel = () => {
  // State
  const [emailOnClientProvision, setEmailOnClientProvision] = React.useState(true);
  const [slaWarnings, setSlaWarnings] = React.useState(true);
  const [twoFAEnabled, setTwoFAEnabled] = React.useState(false);

  // Handlers (you can later connect API calls here)
  const handleEnable2FA = () => {
    setTwoFAEnabled(true);
    alert("2FA enforcement enabled (demo action)");
  };

  return (
    <div className="min-h-screen bg-[#030712] p-6 text-slate-100 font-sans">
      
      {/* Header */}
      <div className="mb-8 border-b border-slate-800 pb-5">
        <h1 className="text-2xl font-bold text-white">System Settings</h1>
        <p className="text-sm text-slate-400 mt-1">
          Configure portal behavior, preferences, and API keys.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl">

        {/* ================= Block 1 ================= */}
        <div className="rounded-xl border border-slate-800 bg-[#090d16] p-6">
          <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
            <i className="fa-solid fa-bell text-indigo-400"></i>
            Operational Notifications
          </h2>

          <div className="space-y-4 text-sm">

            {/* Setting 1 */}
            <div className="flex items-center gap-3">
              <input
                id="client-provision-email"
                type="checkbox"
                checked={emailOnClientProvision}
                onChange={(e) => setEmailOnClientProvision(e.target.checked)}
                className="accent-[#6366f1] w-4 h-4"
              />
              <label htmlFor="client-provision-email" className="cursor-pointer">
                Email me when new client records are provisioned
              </label>
            </div>

            {/* Setting 2 */}
            <div className="flex items-center gap-3">
              <input
                id="sla-warnings"
                type="checkbox"
                checked={slaWarnings}
                onChange={(e) => setSlaWarnings(e.target.checked)}
                className="accent-[#6366f1] w-4 h-4"
              />
              <label htmlFor="sla-warnings" className="cursor-pointer">
                SLA warnings for critical BPO queue overruns
              </label>
            </div>

          </div>
        </div>

        {/* ================= Block 2 ================= */}
        <div className="rounded-xl border border-slate-800 bg-[#090d16] p-6">
          <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
            <i className="fa-solid fa-lock text-indigo-400"></i>
            Platform Security
          </h2>

          <div className="flex flex-col gap-4">

            <div className="flex items-center gap-3">
              <input
                id="force-2fa"
                type="checkbox"
                checked={twoFAEnabled}
                onChange={(e) => setTwoFAEnabled(e.target.checked)}
                className="accent-[#6366f1] w-4 h-4"
              />
              <label htmlFor="force-2fa" className="cursor-pointer text-sm">
                Force Two-Factor Authentication (2FA)
              </label>
            </div>

            <button
              onClick={handleEnable2FA}
              className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 transition-colors w-fit"
            >
              Apply Security Policy
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPanel;