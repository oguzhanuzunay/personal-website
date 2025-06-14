import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { counterItems } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const { t } = useTranslation();
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector('.counter-number');
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: '0' });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: 'power2.out',
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: '#counter',
          start: 'top center',
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  const getCounterLabel = (index) => {
    switch (index) {
      case 0:
        return t('counter.experience');
      case 1:
        return t('counter.clients');
      case 2:
        return t('counter.projects');
      case 3:
        return t('counter.retention');
      default:
        return '';
    }
  };

  return (
    <div
      id="counter"
      ref={counterRef}
      className="padding-x-lg xl:mt-0 mt-32"
    >
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0 {item.suffix}
            </div>
            <div className="text-white-50 text-lg">{getCounterLabel(index)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
