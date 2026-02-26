import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

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
