import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, CheckCircle2, Mail } from 'lucide-react';
import { useModal } from '../App';
import { useSubmitInquiry } from '../hooks/useQueries';

export default function InquiryModal() {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const submitInquiry = useSubmitInquiry();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      await submitInquiry.mutateAsync({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        message: formData.message,
      });
      setSubmitted(true);
    } catch {
      setErrors({ submit: 'Failed to submit inquiry. Please try again.' });
    }
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', message: '' });
      setErrors({});
    }, 300);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-lg bg-white border border-brand-mintyBlue/20 shadow-minty-lg p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-brand-mintyBlue px-6 py-5">
          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-xl text-white">
              Request a Consultation
            </DialogTitle>
            <DialogDescription className="text-white/80 text-sm mt-1">
              Tell us about your trade verification needs and we'll be in touch within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="px-6 py-6 bg-white">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle2 size={52} className="text-brand-mintyBlue mb-4" />
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">
                Inquiry Sent!
              </h3>
              <p className="text-brand-dark/60 text-sm mb-6 max-w-xs">
                Thank you for reaching out. A Nexiris Global specialist will contact you within 24 business hours.
              </p>
              <Button
                onClick={handleClose}
                className="bg-brand-mintyBlue hover:bg-brand-mintyDark text-white font-semibold px-8"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Direct email contact */}
              <div className="flex items-center gap-2 bg-brand-mintyBlue/8 border border-brand-mintyBlue/20 rounded-md px-4 py-3">
                <Mail size={15} className="text-brand-mintyBlue shrink-0" />
                <p className="text-brand-dark/70 text-xs">
                  Or email us directly:{' '}
                  <a
                    href="mailto:nexirisconsultants@gmail.com"
                    className="text-brand-mintyBlue font-semibold hover:text-brand-mintyDark transition-colors break-all"
                  >
                    nexirisconsultants@gmail.com
                  </a>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-brand-dark font-medium text-sm">
                    Full Name <span className="text-brand-mintyBlue">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Jane Smith"
                    className={`bg-white border-brand-mintyBlue/30 focus:border-brand-mintyBlue text-brand-dark placeholder:text-brand-dark/30 ${
                      errors.name ? 'border-red-400' : ''
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-brand-dark font-medium text-sm">
                    Company Name <span className="text-brand-mintyBlue">*</span>
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Acme Corp"
                    className={`bg-white border-brand-mintyBlue/30 focus:border-brand-mintyBlue text-brand-dark placeholder:text-brand-dark/30 ${
                      errors.company ? 'border-red-400' : ''
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-xs">{errors.company}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-brand-dark font-medium text-sm">
                  Email Address <span className="text-brand-mintyBlue">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="jane@company.com"
                  className={`bg-white border-brand-mintyBlue/30 focus:border-brand-mintyBlue text-brand-dark placeholder:text-brand-dark/30 ${
                    errors.email ? 'border-red-400' : ''
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-brand-dark font-medium text-sm">
                  Message <span className="text-brand-mintyBlue">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Describe your trade verification needs..."
                  rows={4}
                  className={`bg-white border-brand-mintyBlue/30 focus:border-brand-mintyBlue text-brand-dark placeholder:text-brand-dark/30 resize-none ${
                    errors.message ? 'border-red-400' : ''
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>

              {errors.submit && (
                <p className="text-red-500 text-sm text-center">{errors.submit}</p>
              )}

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 border-brand-mintyBlue/30 text-brand-dark hover:bg-brand-frostGray"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={submitInquiry.isPending}
                  className="flex-1 bg-brand-mintyBlue hover:bg-brand-mintyDark text-white font-semibold shadow-minty"
                >
                  {submitInquiry.isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
