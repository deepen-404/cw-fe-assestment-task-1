import SearchBar from '@/shared/components/search-bar';

function HeaderSearch() {
  return (
    <SearchBar
      initialValue=""
      onSearch={() => {}}
      showButton={false}
      placeholder="Search"
      rounded="2xl"
      variant="small"
      className="w-44"
    />
  );
}

export default HeaderSearch;
