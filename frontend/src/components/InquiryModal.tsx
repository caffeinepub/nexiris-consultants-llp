import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useSubmitInquiry } from '@/hooks/useQueries';
import { Mail, Send, CheckCircle, Loader2 } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry(form, {
      onSuccess: () => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: '', company: '', email: '', message: '' });
          onClose();
        }, 2500);
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg border-0 p-0 overflow-hidden bg-transparent shadow-none">
        <div className="glass-panel-strong rounded-2xl overflow-hidden">
          {/* Header accent */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="p-6 sm:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="font-heading text-2xl font-bold text-foreground">
                Start Your Enquiry
              </DialogTitle>
              <DialogDescription className="text-foreground/60 text-sm mt-1">
                Reach out directly or fill the form below — we respond within 24 hours.
              </DialogDescription>
            </DialogHeader>

            {/* Direct email */}
            <a
              href="mailto:nexirisconsultants@gmail.com"
              className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 mb-6 group hover:border-gold/40 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                <Mail size={15} className="text-gold" />
              </div>
              <div>
                <p className="text-xs text-foreground/50 mb-0.5">Email us directly</p>
                <p className="text-sm font-medium text-gold group-hover:text-gold-light transition-colors">
                  nexirisconsultants@gmail.com
                </p>
              </div>
            </a>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center">
                  <CheckCircle size={32} className="text-gold" />
                </div>
                <p className="font-heading font-semibold text-lg text-foreground">Enquiry Submitted!</p>
                <p className="text-sm text-foreground/60 text-center">
                  Thank you. We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="glass-input w-full px-4 py-2.5 rounded-xl text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                      Company *
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Company name"
                      className="glass-input w-full px-4 py-2.5 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="glass-input w-full px-4 py-2.5 rounded-xl text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your trade intelligence needs..."
                    className="glass-input w-full px-4 py-2.5 rounded-xl text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="glass-btn-primary w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
