import Badge from '@/shared/components/ui/badge';

interface ITagListProps {
  title: string;
  tags: Array<string>;
}

function TagList({ title, tags }: ITagListProps) {
  return (
    <div>
      <div className="text-white text-lg font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="py-1 px-3 rounded-lg bg-tag text-sm text-muted-text hover:bg-gray-700 cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default TagList;
