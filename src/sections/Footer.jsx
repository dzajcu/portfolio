import SocialIcons from "../components/SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-blue-50/40 to-transparent mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white-50/70 text-sm">
            <p>&copy; {currentYear} Dawid Zając. All rights reserved.</p>
          </div>
          <SocialIcons
            column={false}
            iconSize="5"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
