import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Inquiry } from '../backend';

export interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitInquiry(data.name, data.company, data.email, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

export function useGetAllInquiries() {
  const { actor, isFetching } = useActor();

  return useQuery<Inquiry[]>({
    queryKey: ['inquiries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}
