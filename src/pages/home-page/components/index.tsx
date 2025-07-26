import { TAGS } from '@/pages/home-page/constants/tags';
import Header from '@/pages/home-page/components/header';
import TagList from '@/pages/home-page/components/tag-list';
import Body from '@/pages/home-page/components/body';

function HomePage() {
  return (
    <main className="bg-background min-h-screen text-white">
      <Header />

      <div className="mt-9 mx-auto w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:max-w-4xl space-y-6">
        <section aria-label="Hero Search Section">
          <Body />
        </section>

        <section aria-labelledby="trending-heading">
          <h2 id="trending-heading" className="sr-only">
            Trending
          </h2>
          <TagList title="Trending" tags={TAGS} />
        </section>

        <section aria-labelledby="foryou-heading">
          <h2 id="foryou-heading" className="sr-only">
            For you
          </h2>
          <TagList title="For you" tags={TAGS} />
        </section>
      </div>
    </main>
  );
}

export default HomePage;
