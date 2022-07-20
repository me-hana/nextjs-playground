import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>안녕~</span>
      <style jsx global>{`
        a {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
