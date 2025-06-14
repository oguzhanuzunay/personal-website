import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import TitleHeader from '../components/TitleHeader';
import ContactExperience from '../components/models/contact/ContactExperience';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' }); // success, error
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Map form field names to state properties
    const fieldMap = {
      from_name: 'name',
      from_email: 'email',
      message: 'message',
    };

    setForm((prev) => ({
      ...prev,
      [fieldMap[name] || name]: value,
    }));

    // Reset status when user starts typing again
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Map form state back to EmailJS field names
    const emailJSData = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    if (
      !import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ) {
      setStatus({
        type: 'error',
        message: t('contact.form.errors.configuration'),
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setForm({ name: '', email: '', message: '' });
      setStatus({
        type: 'success',
        message: t('contact.form.success'),
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: t('contact.form.errors.sending'),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={t('contact.title')}
          sub={t('contact.subtitle')}
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="from_name">{t('contact.form.name.label')}</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.name.placeholder')}
                    className="w-full px-4 py-4 md:text-base text-sm placeholder:text-[#aaa] bg-[#151030] rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="from_email">{t('contact.form.email.label')}</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email.placeholder')}
                    className="w-full px-4 py-4 md:text-base text-sm placeholder:text-[#aaa] bg-[#151030] rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">{t('contact.form.message.label')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.message.placeholder')}
                    className="w-full px-4 py-4 md:text-base text-sm placeholder:text-[#aaa] bg-[#151030] rounded-md"
                    rows="5"
                    required
                  />
                </div>

                {status.message && (
                  <div
                    className={`text-sm ${
                      status.type === 'success' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? t('contact.form.button.sending') : t('contact.form.button.send')}
                    </p>
                    <div className="arrow-wrapper">
                      <img
                        src="/images/arrow-down.svg"
                        alt="arrow"
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
