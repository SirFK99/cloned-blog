import React from 'react';
import { motion } from "framer-motion";
import SocialButton from '../Social/SocialButton';
import Data from '../../Data';

const SocialButtons = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
        </motion.div>
    );
}

export default SocialButtons;
