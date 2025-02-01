import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full overflow-hidden"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl" />

            {/* Glassmorphism container */}
            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-white/[0.05] rounded-xl p-8 shadow-2xl">
              {/* Background glow effects */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                {/* Header section with grid */}
                <div className="grid grid-cols-[1fr,auto] items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold gradient-text drop-shadow-sm">
                    Contact Information
                  </h2>
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white active:text-gray-200 transition-colors hover:bg-white/10 active:bg-white/5 rounded-lg text-2xl leading-none cursor-pointer"
                    aria-label="Close modal"
                  >
                    X
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2 group">
                    <h3 className="text-gray-300 text-sm font-medium">Name</h3>
                    <p className="text-white text-lg font-medium group-hover:text-blue-300 transition-colors drop-shadow-sm">
                      Mckade Daines
                    </p>
                  </div>

                  <div className="space-y-2 group">
                    <h3 className="text-gray-300 text-sm font-medium">
                      Profession
                    </h3>
                    <p className="text-white text-lg font-medium group-hover:text-blue-300 transition-colors drop-shadow-sm">
                      Software Engineer
                    </p>
                  </div>

                  <div className="space-y-2 group">
                    <h3 className="text-gray-300 text-sm font-medium">Phone</h3>
                    <a
                      href="tel:480-266-0723"
                      className="text-white text-lg font-medium hover:text-blue-300 transition-colors block drop-shadow-sm"
                    >
                      480-266-0723
                    </a>
                  </div>

                  <div className="space-y-2 group">
                    <h3 className="text-gray-300 text-sm font-medium">Email</h3>
                    <a
                      href="mailto:mckadedaines1@gmail.com"
                      className="text-white text-lg font-medium hover:text-blue-300 transition-colors block drop-shadow-sm"
                    >
                      mckadedaines1@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
