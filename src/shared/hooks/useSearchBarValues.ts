import { useEffect, useState } from 'react';
import type { ISearchBarProps } from '@/shared/components/search-bar';

/**
 * A custom hook for managing search bar state
 * @param initialValue='' - Initial search value
 * @param onSearch - Callback fired when search value changes
 *
 * @example const { searchValue, handleSearch } = useSearchBarValues(props);
 */
export function useSearchBarValues({
  initialValue = '',
  onSearch,
}: Pick<ISearchBarProps, 'initialValue' | 'onSearch'>) {
  const [searchValue, setSearchValue] = useState(initialValue);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchQry = e.target.value;

    setSearchValue(searchQry);
    onSearch(searchQry);
  }

  useEffect(() => {
    if (!initialValue) return;

    setSearchValue(initialValue);
  }, [initialValue]);
  return {
    searchValue,
    handleSearch,
  };
}
