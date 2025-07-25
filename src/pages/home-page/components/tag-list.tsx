import Badge from '@/shared/components/ui/badge';

interface ITagListProps {
  title: string;
  tags: Array<string>;
}

function TagList({ title, tags }: ITagListProps) {
  const headingId = `${title.toLowerCase().replace(/\s+/g, '-')}-heading`;

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId} className="text-white text-lg font-semibold mb-4">
        {title}
      </h2>

      <ul className="flex flex-wrap gap-3 list-none">
        {tags.map((tag) => (
          <li key={tag}>
            <Badge
              asChild
              className="py-1 px-3 rounded-xl bg-tag text-sm text-muted-text focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background"
            >
              <button aria-label={`${tag} tag`}>{tag}</button>
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TagList;
