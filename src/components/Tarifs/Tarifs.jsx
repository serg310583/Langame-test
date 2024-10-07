import style from './Tarifs.module.scss';

export function Tarifs() {
  const tarifs = [
    {
      title: 'Часовой тариф',
      price: 100,
      id: 1,
    },
    {
      title: 'Пакет на 3 часа',
      price: 270,
      id: 2,
    },
    {
      title: 'Пакет на 5 часов',
      price: 400,
      id: 3,
    },
    {
      title: 'Пакет “День” (9:00 - 16:00)',
      price: 450,
      id: 4,
    },
    {
      title: 'Пакет ”Вечер” (16:00 - 22:00)',
      price: 450,
      id: 5,
    },
    {
      title: 'Пакет “Сутки” 24 часа',
      price: 1450,
      id: 6,
    },
  ];
  return (
    <div className={style.tarifWrapper}>
      <h3 className={style.tarifsTitle}>Тарифы, доступные на данном ПК</h3>
      <ul className={style.tarifList}>
        {tarifs.map((tarif) => (
          <li key={tarif.id} className={style.tarifListItem}>
            <span className={style.tarifTitle}>{tarif.title}</span>
            <span className={style.tarifPrice}>{tarif.price} ₽</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
