import { DirectionAwareHoverButton } from "../components";

const NavBar = () => {
  return (
    <header className="pt-5">
      <nav className="h-20 rounded-3xl mx-10 bg-dark-grey text-white flex items-center justify-between px-5">
        <p className="text-2xl">ramos</p>
        <DirectionAwareHoverButton
          label="Sign Up"
          buttonClassName="bg-white text-black hover:text-white px-12 py-5 max-sm:px-5"
          flairClassName="bg-primary"
        ></DirectionAwareHoverButton>
      </nav>
    </header>
  );
};

export default NavBar;
