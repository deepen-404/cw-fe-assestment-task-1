import { TAGS } from '@/pages/home-page/constants/tags';
import Header from '@/pages/home-page/components/header';
import TagList from '@/pages/home-page/components/tag-list';
import Body from '@/pages/home-page/components/body';

function HomePage() {
  return (
    <main className="bg-background min-h-screen text-white">
      <div className="sticky top-0 z-10 bg-background">
        <Header />
      </div>

      <div className="mt-9 mx-auto w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:max-w-4xl space-y-6">
        <Body />
        <TagList title="Trending" tags={TAGS} />
        <TagList title="For you" tags={TAGS} />
      </div>
    </main>
  );
}

export default HomePage;
