import React from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaEdit,
} from "react-icons/fa";

export default function MyProfile() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">My Profile</h1>
        <p className="text-slate-400 mt-2">
          Manage your personal information and account details.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Card */}
        <div className="bg-[#111827] rounded-2xl p-6 border border-slate-700 shadow-lg">
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-8xl text-indigo-500 mb-4" />

            <h2 className="text-2xl font-semibold !text-white">
              Nikitha R
            </h2>

            <p className="text-slate-400">
              Software Devoloper
            </p>

            <span className="mt-3 bg-indigo-600 px-4 py-1 rounded-full text-sm">
              IT Services
            </span>

            <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 rounded-lg flex items-center gap-2">
              <FaEdit />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-[#111827] rounded-2xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold mb-6">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <InfoCard
                icon={<FaEnvelope />}
                title="Email"
                value="xxx@hadoglobalservice.com"
              />

              <InfoCard
                icon={<FaPhone />}
                title="Phone"
                value="+91 98-24-76"
              />

              <InfoCard
                icon={<FaBuilding />}
                title="Department"
                value="IT Services"
              />

              <InfoCard
                icon={<FaBriefcase />}
                title="Designation"
                value="Senior Software Devoloper"
              />

              <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Chennai, India"
              />

              <InfoCard
                icon={<FaCalendarAlt />}
                title="Joined"
                value="09-03-2026"
              />
            </div>
          </div>

          {/* Skills */}
          <div className="bg-[#111827] rounded-2xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold mb-5">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Node.js",
                "JavaScript",
                "Tailwind CSS",
                "MySQL",
                "Python",
                "Gitn & GitHub",
                
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-indigo-600/20 border border-indigo-500 text-indigo-300 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-5">
            <StatCard title="Projects" value="24" />
            <StatCard title="Tasks Done" value="186" />
            <StatCard title="Performance" value="96%" />
            <StatCard title="Experience" value="2 Years" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-[#1f2937] rounded-xl p-4 flex gap-4 items-center">
      <div className="text-indigo-500 text-xl">
        {icon}
      </div>

      <div>
        <p className="text-slate-400 text-sm">
          {title}
        </p>

        <p className="font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-[#111827] rounded-xl border border-slate-700 p-5 text-center">
      <h3 className="text-3xl font-bold text-indigo-500">
        {value}
      </h3>

      <p className="text-slate-400 mt-2">
        {title}
      </p>
    </div>
  );
}