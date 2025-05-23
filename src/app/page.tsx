import { Posts } from '@/components';
import { ServerAPI } from '@/services';
import { getQueryClient } from './get-query-client';

export default async function Home() {

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => ServerAPI.get('posts')
  })

  return (
    <Posts />
  );
}
