import Image from '@/shared/components/ui/image';

function Logo() {
  function handleLogoClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      onClick={handleLogoClick}
      className="flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background rounded transition-opacity hover:opacity-80"
      aria-label="Worctionary home - scroll to top"
      type="button"
    >
      <Image
        src="/task1/logo.png"
        alt="Worctionary logo"
        className="w-5 md:w-4 aspect-square"
        isPriority
      />
      <div className="hidden md:block text-white font-semibold text-lg">
        Worctionary
      </div>
    </button>
  );
}

export default Logo;
