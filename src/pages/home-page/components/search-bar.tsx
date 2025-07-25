import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Button from '@/components/ui/button';
import { useSearchBarValues } from '../hooks/useSearchBarValues';
import { cn } from '@/lib/utils';

export interface ISearchBarProps {
  initialValue: string;
  onSearch: (search: string) => void;
  showButton?: boolean;
  placeholder?: string;
  rounded?: 'xl' | '2xl';
  variant?: 'small' | 'large';
  className?: string;
}

function SearchBar({
  showButton = true,
  placeholder = 'Type to search...',
  rounded = 'xl',
  variant = 'large',
  className = '',
  ...props
}: ISearchBarProps) {
  const { searchValue, handleSearch } = useSearchBarValues(props);

  return (
    <div
      className={cn(
        'px-2 flex items-center justify-between gap-x-3 bg-search-bar-bg',
        rounded === 'xl' && 'rounded-xl',
        rounded === '2xl' && 'rounded-2xl',
        variant === 'small' && 'py-[0.05rem]',
        variant === 'large' && 'py-[0.4rem]',
        className
      )}
    >
      <div className="w-full p-1 flex items-center">
        <Search className="text-gray-400 w-[1.1rem] aspect-square" />
        <Input
          value={searchValue}
          onChange={handleSearch}
          type="text"
          placeholder={placeholder}
          className="flex-1 w-full bg-transparent border-none text-white placeholder:text-muted-text placeholder:text-[0.9rem]"
        />
      </div>

      {showButton && (
        <Button className="bg-blue font-semibold rounded-lg h-10">
          Search
        </Button>
      )}
    </div>
  );
}

export default SearchBar;
