import GlobalLayout from "@/layouts/Global";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  
  return (
    <>
      <RecoilRoot>

        {router.pathname.startsWith("/auth") ? (
          <>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>forThose</title>
            </Head>
            <Component {...pageProps} />
          </>
        ) : router.pathname.startsWith("/home") ? (
          <SessionProvider session={session}>
            <GlobalLayout>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title>forThose -Home</title>
              </Head>
              <Component {...pageProps} />
              <ToastContainer />
            </GlobalLayout>
          </SessionProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </RecoilRoot>
    </>
  );
}
