import { Search } from 'lucide-react';
import { Input } from '@/shared/components/ui/input';
import Button from '@/shared/components/ui/button';
import { useSearchBarValues } from '@/shared/hooks/useSearchBarValues';
import { cn } from '@/shared/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const searchBarVariants = cva(
  'px-2 flex items-center justify-between gap-x-3 bg-search-bar-bg',
  {
    variants: {
      rounded: {
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
      },
      variant: {
        small: 'py-[0.05rem]',
        large: 'py-[0.4rem]',
      },
    },
    defaultVariants: {
      rounded: 'xl',
      variant: 'large',
    },
  }
);

export interface ISearchBarProps
  extends VariantProps<typeof searchBarVariants> {
  initialValue: string;
  onSearch: (search: string) => void;
  onSubmit?: (search: string) => void;
  showButton?: boolean;
  placeholder?: string;
  className?: string;
}

/**
 * A customizable search bar component with variants and optional button
 *
 * @param initialValue - Initial search value
 * @param onSearch - Callback fired when search value changes
 * @param showButton=true - Whether to show the search button
 * @param placeholder='Type to search...' - Input placeholder text
 * @param rounded='xl' - Border radius variant ('xl' | '2xl')
 * @param variant='large' - Size variant ('small' | 'large')
 * @param className='' - Additional CSS classes
 *
 * @example
 * <SearchBar
 *   initialValue=""
 *   onSearch={(value) => console.log(value)}
 *   variant="large"
 *   rounded="xl"
 *   showButton={true}
 * />
 */
function SearchBar({
  showButton = true,
  placeholder = 'Type to search...',
  rounded,
  variant,
  className = '',
  'aria-label': ariaLabel,
  onSubmit,
  ...props
}: ISearchBarProps & { 'aria-label'?: string }) {
  const { searchValue, handleSearch } = useSearchBarValues(props);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (onSubmit) onSubmit(searchValue);
    else handleSearch(searchValue);
  }

  return (
    <form
      className={cn(searchBarVariants({ rounded, variant }), className)}
      onSubmit={handleSubmit}
      role="search"
    >
      <div className="w-full p-1 flex items-center">
        <Search
          className="text-gray-400 w-[1.1rem] aspect-square"
          aria-hidden="true"
        />
        <Input
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          type="text"
          placeholder={placeholder}
          className="flex-1 w-full bg-transparent border-none text-white placeholder:text-muted-text placeholder:text-[0.9rem] focus:outline-none focus:ring-0"
          aria-label={ariaLabel || placeholder}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      {showButton && (
        <Button
          type="submit"
          aria-label="Submit search query"
          className="bg-blue font-semibold rounded-lg h-10"
        >
          Search
        </Button>
      )}
    </form>
  );
}

export default SearchBar;
