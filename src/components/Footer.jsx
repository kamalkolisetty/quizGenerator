import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4 absolute bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} @KamalWorks..</p>
    </footer>
  );
};

export default Footer;
