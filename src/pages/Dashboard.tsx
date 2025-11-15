import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, TrendingUp, Building2, MapPin, Settings, ChevronDown, BarChart3, Target, Layers, Shield, DollarSign, Activity, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Dashboard = () => {
  const [selectedFeature, setSelectedFeature] = useState("ROI Forecasting");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportForm, setExportForm] = useState({
    infrastructureType: "",
    projectStage: "",
    budgetRange: ""
  });

  const features = [
    { name: "ROI Forecasting", icon: TrendingUp, color: "text-yellow-500" },
    { name: "Market Analytics", icon: BarChart3, color: "text-blue-500" },
    { name: "Scenario Planning", icon: Target, color: "text-purple-500" },
    { name: "Asset Risk Modeling", icon: Shield, color: "text-red-500" },
    { name: "Cost Benchmarking", icon: DollarSign, color: "text-green-500" },
    { name: "Demand Simulation", icon: Activity, color: "text-orange-500" },
    { name: "Environmental Impact Analysis", icon: Leaf, color: "text-emerald-500" },
  ];

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

  const handleExportReport = () => {
    if (exportForm.infrastructureType && exportForm.projectStage && exportForm.budgetRange) {
      console.log("Exporting report with:", exportForm);
      alert("Report exported successfully!");
      setIsExportModalOpen(false);
      setExportForm({ infrastructureType: "", projectStage: "", budgetRange: "" });
    } else {
      alert("Please fill in all fields before exporting.");
    }
  };

  const getFeatureIcon = (featureName) => {
    const feature = features.find(f => f.name === featureName);
    if (!feature) return TrendingUp;
    return feature.icon;
  };

  const getFeatureColor = (featureName) => {
    const feature = features.find(f => f.name === featureName);
    return feature?.color || "text-yellow-500";
  };

  const SelectedIcon = getFeatureIcon(selectedFeature);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 pt-24 px-6">
      {/* Header with Feature Selector */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Welcome back 👋
            </h1>
            <p className="text-gray-400 mt-1">
              Here's your personalised infrastructure intelligence overview.
            </p>
          </div>

          {/* Feature Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-yellow-500/30 rounded-lg hover:bg-zinc-800 transition-all duration-200 min-w-[280px]"
            >
              <Layers className="h-5 w-5 text-yellow-500" />
              <span className="text-white font-medium flex-1 text-left">Tools</span>
              <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 w-full bg-zinc-900 border border-yellow-500/30 rounded-lg shadow-2xl z-50 overflow-hidden"
              >
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedFeature(feature.name);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-6 py-3 hover:bg-zinc-800 transition-colors ${
                        selectedFeature === feature.name ? 'bg-zinc-800/50' : ''
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${feature.color}`} />
                      <span className="text-white text-left">{feature.name}</span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Top Stats */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* ROI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="shadow-xl border-yellow-500/30 bg-zinc-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="h-5 w-5 text-yellow-500" />
                ROI Forecast
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold text-yellow-500">
              +15.2%
              <p className="text-sm text-gray-400 mt-1 font-normal">
                Based on your uploaded project data
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-xl border-yellow-500/30 bg-zinc-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Building2 className="h-5 w-5 text-yellow-500" />
                Active Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold text-yellow-500">
              4
              <p className="text-sm text-gray-400 mt-1 font-normal">
                Ongoing infrastructure assessments
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-xl border-yellow-500/30 bg-zinc-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5 text-yellow-500" />
                Sites Covered
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold text-yellow-500">
              12+
              <p className="text-sm text-gray-400 mt-1 font-normal">
                Across multiple geographies
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Analytics Section */}
      <div className="container mx-auto mt-14 mb-20">
        <Card className="shadow-2xl border-yellow-500/30 bg-zinc-900/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-white">
              <LineChart className="h-5 w-5 text-yellow-500" />
              Performance Overview
            </CardTitle>
            <Button variant="outline" className="border-yellow-500/40 text-yellow-500 hover:bg-yellow-500/10" onClick={() => setIsExportModalOpen(true)}>
              Export Report
            </Button>
          </CardHeader>
          <CardContent>
            {/* Placeholder for charts */}
            <div className="w-full h-64 bg-gradient-to-br from-zinc-800/40 to-zinc-800/20 rounded-xl flex items-center justify-center text-gray-400 border border-yellow-500/10">
              Your interactive AI charts will appear here
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="container mx-auto flex justify-end pb-20">
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium">
          <Settings className="h-4 w-4 mr-2" />
          Profile Settings
        </Button>
      </div>

      {/* Export Report Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 border border-yellow-500/30 rounded-xl shadow-2xl max-w-lg w-full p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Export Report</h2>
            
            <div className="space-y-5">
              {/* Infrastructure Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Type of Infrastructure *
                </label>
                <select
                  value={exportForm.infrastructureType}
                  onChange={(e) => setExportForm({ ...exportForm, infrastructureType: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                >
                  <option value="">Select infrastructure type</option>
                  {infrastructureTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Project Stage */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Stage *
                </label>
                <select
                  value={exportForm.projectStage}
                  onChange={(e) => setExportForm({ ...exportForm, projectStage: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                >
                  <option value="">Select project stage</option>
                  {projectStages.map((stage, idx) => (
                    <option key={idx} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Approximate Budget Range *
                </label>
                <select
                  value={exportForm.budgetRange}
                  onChange={(e) => setExportForm({ ...exportForm, budgetRange: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range, idx) => (
                    <option key={idx} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <Button
                onClick={() => {
                  setIsExportModalOpen(false);
                  setExportForm({ infrastructureType: "", projectStage: "", budgetRange: "" });
                }}
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300 hover:bg-zinc-800"
              >
                Cancel
              </Button>
              <Button
                onClick={handleExportReport}
                className="flex-1 bg-yellow-500 text-black hover:bg-yellow-600 font-medium"
              >
                Export Report
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;