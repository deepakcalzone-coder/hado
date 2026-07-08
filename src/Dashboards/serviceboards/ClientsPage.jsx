import React, { useState, useEffect, useRef } from 'react';
import { Search, UserPlus, Building2, Mail, ExternalLink, Filter, MoreVertical, X, Pencil, Trash2 } from 'lucide-react';

const ClientsPage = () => {
  // Sample enterprise client profiles matching platform scope
  const [clients, setClients] = useState([
    {
      id: 1,
      company: 'Nimble Acuity Management',
      contactPerson: 'Arun Kumar',
      email: 'operations@nimbleacuity.com',
      status: 'Active',
      services: ['Bespoke Software', 'Medical Transcription'],
      billing: 'Monthly Retainer',
      joinedDate: 'Jan 2026',
    },
    {
      id: 2,
      company: 'Madras Auction Properties',
      contactPerson: 'S. Srinivasan',
      email: 'admin@madrasauction.com',
      status: 'Active',
      services: ['Digital Portal Dev', 'Data Extraction'],
      billing: 'Project-Based',
      joinedDate: 'Mar 2026',
    },
    {
      id: 3,
      company: 'Vanguard Compliance Corp',
      contactPerson: 'Deepa Rajan',
      email: 'compliance@vanguard.in',
      status: 'Pending Review',
      services: ['Corporate Law Audit'],
      billing: 'Hourly Advisory',
      joinedDate: 'May 2026',
    },
    {
      id: 4,
      company: 'Beacon Logistics Group',
      contactPerson: 'K. Rahul',
      email: 'contact@beaconlogistics.com',
      status: 'Inactive',
      services: ['Omnichannel Support'],
      billing: 'Monthly Retainer',
      joinedDate: 'Nov 2025',
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  
  // UI State Controls
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null); // Track which row's action menu is active
  const [editingClient, setEditingClient] = useState(null); // Tracks if we are editing an existing client

  // Form input state management
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    email: '',
    services: '',
    billing: 'Monthly Retainer',
    status: 'Active'
  });

  // Close context dropdown menus when clicking outside the application table
  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (openMenuId && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openMenuId]);

  const filteredClients = clients.filter(client =>
    client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //  Add Client Profile
  const handleOpenCreateModal = () => {
    setEditingClient(null);
    setFormData({ company: '', contactPerson: '', email: '', services: '', billing: 'Monthly Retainer', status: 'Active' });
    setIsModalOpen(true);
  };

  //  "Modify" inside context action dropdown
  const handleOpenEditModal = (client) => {
    setEditingClient(client);
    setFormData({
      company: client.company,
      contactPerson: client.contactPerson,
      email: client.email,
      services: client.services.join(', '),
      billing: client.billing,
      status: client.status
    });
    setOpenMenuId(null); 
    setIsModalOpen(true);
  };

  
  const handleDeleteClient = (id, companyName) => {
    setOpenMenuId(null);
    if (window.confirm(`Are you sure you want to permanently delete account management profiles for "${companyName}"?`)) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  // Process Submission for Save/Edit operation
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.contactPerson) return;

    if (editingClient) {
      // Logic for editing profile metrics
      setClients(clients.map(c => c.id === editingClient.id ? {
        ...c,
        company: formData.company,
        contactPerson: formData.contactPerson,
        email: formData.email,
        billing: formData.billing,
        status: formData.status,
        services: formData.services ? formData.services.split(',').map(s => s.trim()) : c.services
      } : c));
    } else {
      // Logic for adding new profile metrics
      const createdClient = {
        id: Date.now(),
        company: formData.company,
        contactPerson: formData.contactPerson,
        email: formData.email || 'N/A',
        status: formData.status,
        services: formData.services ? formData.services.split(',').map(s => s.trim()) : ['General Support'],
        billing: formData.billing,
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      };
      setClients([createdClient, ...clients]);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] p-6 text-slate-100 border rounded-2xl font-sans relative">
      
      {/* Header Panel */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight !text-white">Client Management</h1>
          <p className="text-sm text-slate-400 mt-1">Manage corporate account relationships, service agreements, and profiles.</p>
        </div>
        <button 
          onClick={handleOpenCreateModal}
          className="inline-flex items-center gap-2 rounded-lg bg-[#6366f1] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <UserPlus size={16} />
          Add Client Profile
        </button>
      </div>

      {/* Overview Stat Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-[#090d16] p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Managed Accounts</div>
          <div className="mt-2 text-3xl font-bold text-white">{clients.length}</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#090d16] p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Retainers</div>
          <div className="mt-2 text-3xl font-bold text-emerald-400">
            {clients.filter(c => c.status === 'Active').length}
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#090d16] p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Services Provisioned</div>
          <div className="mt-2 text-3xl font-bold text-indigo-400">42</div>
        </div>
      </div>

      {/* Control / Filter Bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search company or point of contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-slate-800 bg-[#090d16] py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-slate-700"
          />
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[#090d16] px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800/50">
          <Filter size={16} />
          Filter Content
        </button>
      </div>

      {/* Client Records Table Layout */}
      <div className="rounded-xl border border-slate-800 bg-[#090d16] overflow-visible">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-900/20">
                <th className="p-4">Enterprise Account</th>
                <th className="p-4">Primary Contact</th>
                <th className="p-4">Subscribed Services</th>
                <th className="p-4">Billing Framework</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-slate-800/20 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-slate-900 p-2 text-indigo-400 border border-slate-800">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-base">{client.company}</div>
                        <div className="text-xs text-slate-500">Joined: {client.joinedDate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium text-slate-200">{client.contactPerson}</div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Mail size={12} />
                        {client.email}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {client.services.map((srv, index) => (
                        <span key={index} className="inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 font-mono text-xs text-slate-300">{client.billing}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                      client.status === 'Active' ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' :
                      client.status === 'Pending Review' ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' :
                      'text-slate-400 bg-slate-500/10 border-slate-500/20'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  
                  {/* Action contextual link menu dropdown column */}
                  <td className="p-4 text-right relative overflow-visible">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors" title="View Workspace">
                        <ExternalLink size={16} />
                      </button>
                      
                      <div className="relative">
                        <button 
                          onClick={() => setOpenMenuId(openMenuId === client.id ? null : client.id)}
                          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                        >
                          <MoreVertical size={16} />
                        </button>

                        {/* Interactive Context Dropdown Element */}
                        {openMenuId === client.id && (
                          <div 
                            ref={menuRef}
                            className="absolute right-0 mt-2 w-40 rounded-lg border border-slate-800 bg-[#0e1422] p-1 shadow-xl z-50 text-left"
                          >
                            <button
                              onClick={() => handleOpenEditModal(client)}
                              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                            >
                              <Pencil size={14} className="text-indigo-400" />
                              Modify Profile
                            </button>
                            <button
                              onClick={() => handleDeleteClient(client.id, client.company)}
                              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition-colors"
                            >
                              <Trash2 size={14} />
                              Delete Account
                            </button>
                          </div>
                        )}
                      </div>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Drawer Panel for Create / Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-md h-full bg-[#090d16] border-l border-slate-800 p-6 flex flex-col justify-between text-slate-200 z-10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <UserPlus size={20} className="text-indigo-400" /> 
                  {editingClient ? 'Modify Profile' : 'Add New Profile'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800">
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Company Name *</label>
                  <input 
                    type="text" required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="e.g., Acme Innovations" 
                    className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Primary Contact *</label>
                  <input 
                    type="text" required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    placeholder="e.g., Jane Doe" 
                    className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="e.g., mail@company.com" 
                    className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Services (Comma Separated)</label>
                  <input 
                    type="text"
                    value={formData.services}
                    onChange={(e) => setFormData({...formData, services: e.target.value})}
                    placeholder="e.g., Web Dev, Infrastructure" 
                    className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Billing Framework</label>
                    <select 
                      value={formData.billing}
                      onChange={(e) => setFormData({...formData, billing: e.target.value})}
                      className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none"
                    >
                      <option value="Monthly Retainer">Monthly Retainer</option>
                      <option value="Project-Based">Project-Based</option>
                      <option value="Hourly Advisory">Hourly Advisory</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Operational Status</label>
                    <select 
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none"
                    >
                      <option value="Active">Active</option>
                      <option value="Pending Review">Pending Review</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center gap-3 justify-end">
                  <button 
                    type="button" 
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-lg border border-slate-800 px-4 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800/50 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="rounded-lg bg-[#6366f1] px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                  >
                    {editingClient ? 'Save Framework Changes' : 'Save Enterprise Profile'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ClientsPage;