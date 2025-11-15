import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const UserDetailsModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    infrastructureType: "",
    projectStage: "",
    budgetRange: ""
  });

  const infrastructureTypes = [
    "Rail Infrastructure",
    "Roads & Highways",
    "Power Plants",
    "Renewable Energy",
    "Ports & Marine",
    "Digital Infrastructure",
    "Water & Sanitation",
    "Airports"
  ];

  const projectStages = [
    "Planning & Feasibility",
    "Design & Engineering",
    "Construction",
    "Operation & Maintenance",
    "Upgrade & Modernization"
  ];

  const budgetRanges = [
    "Under $10M",
    "$10M - $50M",
    "$50M - $100M",
    "$100M - $500M",
    "$500M - $1B",
    "Over $1B"
  ];

  const handleSubmit = () => {
    if (Object.values(formData).every(val => val !== "")) {
      console.log("Form submitted:", formData);
      alert("Details submitted successfully!");
      setFormData({
        name: "",
        email: "",
        organization: "",
        infrastructureType: "",
        projectStage: "",
        budgetRange: ""
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-zinc-900 p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-6 border border-yellow-500/30"
      >
        <h2 className="text-3xl font-bold text-center text-white">User Details</h2>

        <div className="flex flex-col gap-4">
          <input
            className="border border-yellow-500/30 p-3 rounded-xl bg-zinc-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="border border-yellow-500/30 p-3 rounded-xl bg-zinc-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            className="border border-yellow-500/30 p-3 rounded-xl bg-zinc-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
            placeholder="Organization"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          />

          {/* Type of Infrastructure */}
          <select
            value={formData.infrastructureType}
            onChange={(e) => setFormData({ ...formData, infrastructureType: e.target.value })}
            className="border border-yellow-500/30 p-3 rounded-xl bg-zinc-800 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          >
            <option value="">Type of Infrastructure</option>
            {infrastructureTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>

          {/* Project Stage */}
          <select
            value={formData.projectStage}
            onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
            className="border border-yellow-500/30 p-3 rounded-xl bg-zinc-800 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          >
            <option value="">Project Stage</option>
            {projectStages.map((stage, idx) => (
              <option key={idx} value={stage}>{stage}</option>
            ))}
          </select>

          {/* Budget Range */}
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="border border-yellow-500/30 p-3 rounded-xl bg-zinc-800 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          >
            <option value="">Approximate Budget Range</option>
            {budgetRanges.map((range, idx) => (
              <option key={idx} value={range}>{range}</option>
            ))}
          </select>

          <Button 
            onClick={handleSubmit}
            className="w-full bg-yellow-500 text-black hover:bg-yellow-600 py-3 rounded-xl text-lg font-medium"
          >
            Submit
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserDetailsModal;