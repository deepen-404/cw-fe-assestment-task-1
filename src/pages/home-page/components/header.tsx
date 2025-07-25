import UserAvatar from '@/pages/home-page/components/user-avatar';
import Logo from '@/pages/home-page/components/logo';
import HeaderSearch from '@/pages/home-page/components/header-search';

function Header() {
  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-4 border-b border-gray-400">
      <Logo />

      {/* Mobile: Search centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
        <HeaderSearch />
      </div>

      {/* Mobile: Avatar on far right */}
      <div className="flex items-center md:hidden">
        <UserAvatar />
      </div>

      {/* Desktop: Search + Avatar grouped on right */}
      <div className="hidden md:flex items-center justify-end gap-4">
        <HeaderSearch />
        <UserAvatar />
      </div>
    </header>
  );
}

export default Header;
