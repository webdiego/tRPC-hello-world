import { appRouter} from '@/server/router/index'
import * as trpcNext from '@trpc/server/adapters/next';
import { createContext } from '../../../server/router/createContext';
// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});

