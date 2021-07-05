import Header from '../components/Header';

export default function Tango({ data }) {
  const Word = ({ wordData }) => (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-5xl">
        {wordData.num}
      </div>
      <div className="mt-4 text-8xl">
        {wordData.word}
      </div>
      <div className="mt-16 text-6xl">
        {wordData.ans}
      </div>
    </div>
  );
  const validData = data
    .filter(
      (wordData) => wordData.done === false,
    );
  return (
    <>
      <Header
        title="tango"
        description="show random tangos"
        noindex
      />
      <Word wordData={
        validData[Math.floor(Math.random() * validData.length)]
}
      />
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch('https://gist.githubusercontent.com/h13o/2d7080897665c0ef58706f46c47c0499/raw/tango.json');
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
