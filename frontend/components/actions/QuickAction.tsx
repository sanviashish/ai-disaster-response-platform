"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

export default function QuickAction({
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="card flex cursor-pointer items-center justify-between p-6 transition-all"
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="mt-2 text-sm text-slate-400">
          {description}
        </p>
      </div>

      <ArrowRight className="text-blue-400" />
    </motion.div>
  );
}