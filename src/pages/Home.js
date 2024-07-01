import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <h1>Welcome to the Animal SPA</h1>
    <p>Discover amazing animals from around the world.</p>
  </motion.div>
);

export default Home;
