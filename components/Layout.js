import Head from 'next/head';

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta
          name='description'
          content='GuitarLA es una tienda de guitarra online'
        />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
