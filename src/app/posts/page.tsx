import { Posts } from '@/components';
import { ServerAPI } from '@/services';
import { getQueryClient } from '@/app/get-query-client';

export default async function PostsPage() {

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => ServerAPI.get('posts')
  })

  return (
    <Posts />
  );
}
