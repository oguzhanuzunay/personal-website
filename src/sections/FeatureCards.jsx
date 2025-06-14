import { useTranslation } from 'react-i18next';
import { abilities } from '../constants';

const FeatureCards = () => {
  const { t } = useTranslation();

  const getAbilityTranslation = (index) => {
    switch (index) {
      case 0:
        return {
          title: t('abilities.qualityFocus.title'),
          desc: t('abilities.qualityFocus.desc'),
        };
      case 1:
        return {
          title: t('abilities.communication.title'),
          desc: t('abilities.communication.desc'),
        };
      case 2:
        return {
          title: t('abilities.delivery.title'),
          desc: t('abilities.delivery.desc'),
        };
      default:
        return { title: '', desc: '' };
    }
  };

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath }, index) => {
          const translation = getAbilityTranslation(index);
          return (
            <div
              key={translation.title}
              className="card-border rounded-xl p-8 flex flex-col gap-4"
            >
              <div className="size-14 flex items-center justify-center rounded-full">
                <img
                  src={imgPath}
                  alt={translation.title}
                />
              </div>
              <h3 className="text-white text-2xl font-semibold mt-2">{translation.title}</h3>
              <p className="text-white-50 text-lg">{translation.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
