import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, TrendingUp, Building2, MapPin, Settings } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/80 to-background pt-24 px-6">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="container mx-auto"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
          Welcome back 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Here’s your personalised infrastructure intelligence overview.
        </p>
      </motion.div>

      {/* Top Stats */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        
        {/* ROI */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="shadow-xl border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                ROI Forecast
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold text-accent">
              +15.2%
              <p className="text-sm text-muted-foreground mt-1">
                Based on your uploaded project data
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="shadow-xl border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-accent" />
                Active Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold text-accent">
              4
              <p className="text-sm text-muted-foreground mt-1">
                Ongoing infrastructure assessments
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Locations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="shadow-xl border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                Sites Covered
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold text-accent">
              12+
              <p className="text-sm text-muted-foreground mt-1">
                Across multiple geographies
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Analytics Section */}
      <div className="container mx-auto mt-14 mb-20">
        <Card className="shadow-2xl border-border/40">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-accent" />
              Performance Overview
            </CardTitle>
            <Button variant="outline" className="border-accent/40">
              Export Report
            </Button>
          </CardHeader>

          <CardContent>
            {/* Placeholder for charts */}
            <div className="w-full h-64 bg-gradient-to-br from-muted/20 to-muted/10 rounded-xl flex items-center justify-center text-muted-foreground">
              Your interactive AI charts will appear here
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="container mx-auto flex justify-end pb-20">
        <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
          <Settings className="h-4 w-4 mr-2" /> Profile Settings
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
