import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Code Snippets</span>
    </h1>
    <p className='desc text-center'>
      Codepiea is an open-source online library to discover and share codes
    </p>

    <Feed />
  </section>
);

export default Home;