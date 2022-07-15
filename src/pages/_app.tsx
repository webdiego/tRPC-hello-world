import 'tailwindcss/tailwind.css';
import { withTRPC } from '@trpc/next';
import { AppType } from 'next/dist/shared/lib/utils';
import { AppRouter } from '@/server/router/index';
import '../../styles/globals.css';
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req?.headers,
            //That means tha the request is made from the server
            'x-ssr': '1',
          };
        }
        return {};
      },
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  // ssr: true,
  ssr: false,
})(MyApp);
