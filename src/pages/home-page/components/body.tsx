import SearchBar from '@/shared/components/search-bar';

function Body() {
  return (
    <section aria-labelledby="hero-heading" className="relative" role="banner">
      <img
        src="/task1/hero-bg.png"
        alt=""
        className="w-full h-[28rem] md:h-[calc(100dvh-22rem)] object-cover rounded-xl"
        role="presentation"
      />

      <div className="absolute inset-0 flex flex-col gap-y-4 items-center justify-center">
        <div className="w-4/5 space-y-8">
          <h1
            id="hero-heading"
            className="text-3xl md:text-5xl text-center font-[900] tracking-tight font-stretch-condensed text-white"
          >
            Search for words, phrases and meanings
          </h1>
          <div className="flex items-center justify-center">
            <SearchBar
              initialValue=""
              onSearch={() => {}}
              className="w-full md:w-[65%]"
              aria-label="Main search input"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
