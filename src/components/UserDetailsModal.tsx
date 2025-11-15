import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function UserDetailsModal({ open, setOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    infrastructureType: "",
    projectStage: "",
    budgetRange: ""
  });

  const infrastructureTypes = [
    "Rail Infrastructure", "Roads & Highways", "Power Plants", "Renewable Energy",
    "Ports & Marine", "Digital Infrastructure", "Water & Sanitation", "Airports"
  ];

  const projectStages = [
    "Planning & Feasibility", "Design & Engineering", "Construction",
    "Operation & Maintenance", "Upgrade & Modernization"
  ];

  const budgetRanges = [
    "Under $10M", "$10M - $50M", "$50M - $100M",
    "$100M - $500M", "$500M - $1B", "Over $1B"
  ];

  const handleSubmit = () => {
    if (Object.values(formData).every(v => v !== "")) {
      alert("Details submitted successfully!");
      setOpen(false);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-zinc-900 rounded-3xl border border-yellow-500/30 p-8 max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-yellow-400 text-3xl font-semibold">
            User Details
          </DialogTitle>
          <p className="text-gray-400 text-sm mt-1">
            Provide accurate project information to get tailored insights.
          </p>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 space-y-4"
        >
          {/* GRID FOR PERFECT ALIGNMENT */}
          <div className="grid grid-cols-1 gap-4">

            <input
              className="p-3 bg-zinc-800 border border-yellow-500/20 rounded-xl 
                         text-white focus:outline-none focus:border-yellow-500/60"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              className="p-3 bg-zinc-800 border border-yellow-500/20 rounded-xl 
                         text-white focus:outline-none focus:border-yellow-500/60"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              className="p-3 bg-zinc-800 border border-yellow-500/20 rounded-xl 
                         text-white focus:outline-none focus:border-yellow-500/60"
              placeholder="Organization"
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
            />

            <select
              className="p-3 bg-zinc-800 border border-yellow-500/20 rounded-xl 
                         text-white focus:outline-none focus:border-yellow-500/60"
              value={formData.infrastructureType}
              onChange={(e) =>
                setFormData({ ...formData, infrastructureType: e.target.value })
              }
            >
              <option value="">Type of Infrastructure</option>
              {infrastructureTypes.map((item, i) => (
                <option key={i}>{item}</option>
              ))}
            </select>

            <select
              className="p-3 bg-zinc-800 border border-yellow-500/20 rounded-xl 
                         text-white focus:outline-none focus:border-yellow-500/60"
              value={formData.projectStage}
              onChange={(e) =>
                setFormData({ ...formData, projectStage: e.target.value })
              }
            >
              <option value="">Project Stage</option>
              {projectStages.map((item, i) => (
                <option key={i}>{item}</option>
              ))}
            </select>

            <select
              className="p-3 bg-zinc-800 border border-yellow-500/20 rounded-xl 
                         text-white focus:outline-none focus:border-yellow-500/60"
              value={formData.budgetRange}
              onChange={(e) =>
                setFormData({ ...formData, budgetRange: e.target.value })
              }
            >
              <option value="">Estimated Budget</option>
              {budgetRanges.map((item, i) => (
                <option key={i}>{item}</option>
              ))}
            </select>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full py-3 text-black bg-yellow-500 rounded-xl 
                       font-bold text-lg hover:bg-yellow-600 transition-all"
          >
            Submit Details
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
