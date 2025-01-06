import { motion } from "framer-motion";
import { FC } from "react";

interface RestTimeDisplayProps {
  timerTime: number; // Fixed starting value for the countdown
}

const RestTimeDisplay: FC<RestTimeDisplayProps> = ({ timerTime }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.2, 0, 0.4, 1],
      }}
    >
      <div className="text-white text-9xl font-bold relative z-10">
        {timerTime}
      </div>
    </motion.div>
  );
};

export default RestTimeDisplay;
