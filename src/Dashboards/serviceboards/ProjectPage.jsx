import React, { useState, useEffect, useRef } from 'react';
import { Search, FolderPlus, Kanban, ListFilter, Clock, CheckCircle2, AlertCircle, PlayCircle, MoreVertical, Pencil, Trash2, X } from 'lucide-react';

const ProjectPage = () => {
  // Sample enterprise projects matching the current portfolio roadmap
  const [projects, setProjects] = useState([
    {
      id: 'PRJ-2026-01',
      title: 'Portal UI/UX Modernization Campaign',
      client: 'Madras Auction Properties',
      serviceType: 'Digital Portal Dev',
      progress: 78,
      status: 'In Progress',
      priority: 'High',
      dueDate: '2026-08-15',
    },
    {
      id: 'PRJ-2026-02',
      title: 'Bespoke Software Architecture Re-factoring',
      client: 'Nimble Acuity Management',
      serviceType: 'Software Engineering',
      progress: 100,
      status: 'Completed',
      priority: 'Medium',
      dueDate: '2026-06-30',
    },
    {
      id: 'PRJ-2026-03',
      title: 'End-of-Quarter Mortgage Processing Audit',
      client: 'Nimble Acuity Management',
      serviceType: 'BPO Back-Office Support',
      progress: 35,
      status: 'In Progress',
      priority: 'High',
      dueDate: '2026-09-02',
    },
    {
      id: 'PRJ-2026-04',
      title: 'Corporate Law Compliance & Audit Registry',
      client: 'Vanguard Compliance Corp',
      serviceType: 'Corporate Law Audit',
      progress: 10,
      status: 'Blocked',
      priority: 'Critical',
      dueDate: '2026-08-01',
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  
  // UI Interaction States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [editingProject, setEditingProject] = useState(null);

  // Form State Architecture
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    serviceType: '',
    progress: 0,
    status: 'In Progress',
    priority: 'Medium',
    dueDate: ''
  });

  // Global click detector to close card menu dropdowns automatically
  const menuRef = useRef();
  useEffect(() => {
    const clickHandler = (e) => {
      if (openMenuId && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', clickHandler);
    return () => document.removeEventListener('mousedown', clickHandler);
  }, [openMenuId]);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'All' || project.status === activeTab;
    return matchesSearch && matchesTab;
  });

  // Open clean form for creation
  const handleOpenCreateModal = () => {
    setEditingProject(null);
    setFormData({ title: '', client: '', serviceType: '', progress: 0, status: 'In Progress', priority: 'Medium', dueDate: '' });
    setIsModalOpen(true);
  };

  // Open pre-populated form for edits
  const handleOpenEditModal = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      client: project.client,
      serviceType: project.serviceType,
      progress: project.progress,
      status: project.status,
      priority: project.priority,
      dueDate: project.dueDate
    });
    setOpenMenuId(null);
    setIsModalOpen(true);
  };

  // Delete Action Handler
  const handleDeleteProject = (id, title) => {
    setOpenMenuId(null);
    if (window.confirm(`Are you sure you want to permanently delete roadmap tracker: "${title}"?`)) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  // Form Submission Logic
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.client) return;

    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? {
        ...p,
        ...formData,
        progress: formData.status === 'Completed' ? 100 : Number(formData.progress)
      } : p));
    } else {
      const newProj = {
        id: `PRJ-2026-${String(projects.length + 1).padStart(2, '0')}`,
        ...formData,
        progress: formData.status === 'Completed' ? 100 : Number(formData.progress)
      };
      setProjects([...projects, newProj]);
    }
    setIsModalOpen(false);
  };

  // Dynamic style helpers
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'In Progress': return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'Blocked': return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  const getPriorityColor = (priority) => {
    if (priority === 'Critical' || priority === 'High') return 'text-rose-400';
    return 'text-slate-400';
  };

  return (
    <div className="min-h-screen bg-[#030712] p-6 text-slate-100 border rounded-2xl font-sans relative overflow-x-hidden">
      
      {/* Header Panel */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Project Lifecycles</h1>
          <p className="text-sm text-slate-400 mt-1">Track operational milestones, project pipelines, and execution health metrics.</p>
        </div>
        <button 
          onClick={handleOpenCreateModal}
          className="inline-flex items-center gap-2 rounded-lg bg-[#6366f1] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus:outline-none"
        >
          <FolderPlus size={16} />
          Create New Project
        </button>
      </div>

      {/* Overview Stat Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-[#090d16] p-5">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Active Tasks</span>
            <PlayCircle size={18} className="text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {projects.filter(p => p.status === 'In Progress').length} Active
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#090d16] p-5">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Completed</span>
            <CheckCircle2 size={18} className="text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {projects.filter(p => p.status === 'Completed').length} Closed
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#090d16] p-5">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Blocked</span>
            <AlertCircle size={18} className="text-rose-400" />
          </div>
          <div className="text-2xl font-bold text-rose-400">
            {projects.filter(p => p.status === 'Blocked').length} Latency
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#090d16] p-5">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Global Pool</span>
            <Clock size={18} className="text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-white">{projects.length} Tracked</div>
        </div>
      </div>

      {/* Control Navigation & Filter Bar */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex border-b border-slate-800 text-sm">
          {['All', 'In Progress', 'Completed', 'Blocked'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-4 font-medium transition-colors relative ${
                activeTab === tab ? 'text-[#6366f1]' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center w-full lg:w-auto">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Filter by title or client name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-[#090d16] py-2 pl-10 pr-4 text-sm text-slate-200 outline-none focus:border-slate-700"
            />
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#090d16] px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800/50">
              <Kanban size={14} /> Board
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#090d16] px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800/50">
              <ListFilter size={14} /> Sort
            </button>
          </div>
        </div>
      </div>

      {/* Project Matrix Cards Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div key={project.id} className="rounded-xl border border-slate-800 bg-[#090d16] p-6 flex flex-col justify-between hover:border-slate-700/60 transition-all group relative overflow-visible">
            
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="font-mono text-xs text-slate-500 tracking-wider">{project.id}</span>
                <div className="flex items-center gap-1 relative">
                  <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium border ${getStatusStyle(project.status)}`}>
                    {project.status}
                  </span>
                  
                  {/* Three-dots contextual button trigger */}
                  <div className="relative">
                    <button 
                      onClick={() => setOpenMenuId(openMenuId === project.id ? null : project.id)}
                      className="p-1 text-slate-500 hover:text-white rounded transition-colors"
                    >
                      <MoreVertical size={16} />
                    </button>
                    
                    {openMenuId === project.id && (
                      <div ref={menuRef} className="absolute right-0 mt-1 w-36 rounded-lg border border-slate-800 bg-[#0e1422] p-1 shadow-xl z-30 text-left">
                        <button
                          onClick={() => handleOpenEditModal(project)}
                          className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                          <Pencil size={12} className="text-indigo-400" /> Modify
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id, project.title)}
                          className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-medium text-rose-400 hover:bg-rose-500/10"
                        >
                          <Trash2 size={12} /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1 mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-4">Client Account: <span className="text-slate-300">{project.client}</span></p>

              <div className="mb-4 inline-block text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800/60 text-indigo-300">
                {project.serviceType}
              </div>
            </div>

            <div className="mt-4 border-t border-slate-800/50 pt-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-400">Milestone Progress</span>
                <span className="font-bold text-white font-mono">{project.progress}%</span>
              </div>
              
              <div className="h-1.5 w-full rounded-full bg-slate-900 overflow-hidden mb-4">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    project.status === 'Completed' ? 'bg-emerald-400' :
                    project.status === 'Blocked' ? 'bg-rose-500' : 'bg-[#6366f1]'
                  }`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <div>
                  Priority: <span className={`font-semibold ${getPriorityColor(project.priority)}`}>{project.priority}</span>
                </div>
                <div>
                  Target Due: <span className="text-slate-400">{project.dueDate}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Slide-over Side Drawer Configuration Panel */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-md h-full bg-[#090d16] border-l border-slate-800 p-6 flex flex-col justify-between text-slate-200 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <FolderPlus size={20} className="text-indigo-400" /> 
                  {editingProject ? 'Modify Project Parameters' : 'Create New Project'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800">
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Project Campaign Title *</label>
                  <input 
                    type="text" required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g., Enterprise Database Migration" 
                    className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Corporate Client *</label>
                  <input 
                    type="text" required
                    value={formData.client}
                    onChange={(e) => setFormData({...formData, client: e.target.value})}
                    placeholder="e.g., Nimble Acuity Management" 
                    className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Provisioned Service Category</label>
                  <input 
                    type="text"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                    placeholder="e.g., Digital Infrastructure" 
                    className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Status Layout</label>
                    <select 
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none"
                    >
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Blocked">Blocked</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Risk Priority</label>
                    <select 
                      value={formData.priority}
                      onChange={(e) => setFormData({...formData, priority: e.target.value})}
                      className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                </div>

                {formData.status !== 'Completed' && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Milestone Progress ({formData.progress}%)
                    </label>
                    <input 
                      type="range" min="0" max="100"
                      value={formData.progress}
                      onChange={(e) => setFormData({...formData, progress: e.target.value})}
                      className="w-full accent-indigo-500 bg-slate-900 h-2 rounded-lg cursor-pointer"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Target Due Date</label>
                  <input 
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                    className="w-full rounded-lg border border-slate-800 bg-[#030712] py-2 px-3 text-sm text-slate-200 outline-none focus:border-indigo-500"
                  />
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
                    {editingProject ? 'Save Configurations' : 'Launch Project Roadmap'}
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

export default ProjectPage;