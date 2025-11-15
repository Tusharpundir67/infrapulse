import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const RoiFormModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
      >
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.85 }}
          className="bg-background p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-6 border border-accent/20"
        >
          <h2 className="text-3xl font-bold text-center">ROI Forecaster</h2>

          <div className="flex flex-col gap-4">
            <input
              className="border p-3 rounded-xl bg-background/40"
              placeholder="Name"
            />
            <input
              className="border p-3 rounded-xl bg-background/40"
              type="email"
              placeholder="Email"
            />
            <input
              className="border p-3 rounded-xl bg-background/40"
              placeholder="Organization"
            />

            <Button className="w-full bg-accent text-accent-foreground py-3 rounded-xl text-lg">
              Submit
            </Button>

            <button
              onClick={onClose}
              className="text-sm text-center text-muted-foreground underline pt-2"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RoiFormModal;
