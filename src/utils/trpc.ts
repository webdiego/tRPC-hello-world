import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@/server/router/index';

export const trpc = createReactQueryHooks<AppRouter>();


