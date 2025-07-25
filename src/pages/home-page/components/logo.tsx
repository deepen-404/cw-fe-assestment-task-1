function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/task1/logo.png"
        alt="Logo"
        className="w-5 md:w-4 aspect-square"
      />
      <div className="hidden md:block text-white font-semibold text-lg">
        Worctionary
      </div>
    </div>
  );
}

export default Logo;
