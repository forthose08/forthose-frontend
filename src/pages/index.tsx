export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/home",
      permanent: false, // Set this to true if the redirection should be permanent
    },
  };
}

export default function Home() {
  return (
    <>
      <div>Home</div>
    </>
  );
}
