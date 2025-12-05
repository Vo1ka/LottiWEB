'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';


export function ContactForm() {
  const t = useTranslations('contacts.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      // TODO: Интеграция с API или email-сервисом
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">{t('name')}</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t('name')}
          disabled={isSubmitting}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">{t('email')}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t('email')}
          disabled={isSubmitting}
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">{t('phone')}</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder={t('phone')}
          disabled={isSubmitting}
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">{t('message')}</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t('message')}
          disabled={isSubmitting}
          rows={6}
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 text-green-800 text-sm">
          {t('success')}
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 text-red-800 text-sm">
          {t('error')}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : t('submit')}
      </Button>
    </form>
  );
}
