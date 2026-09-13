const Footer = () => {
  return (
    <footer className="border-t border-muted-foreground px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-7xl gap-3 text-sm uppercase text-muted-foreground flex-row items-center justify-between">
        <span>© 2026 Iveta N.</span>

        <div className="flex gap-6">
          <a href="mailto:novaiv.ivet@gmail.com" className="hover:text-foreground">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/iveta-nováková-1300a2275"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
