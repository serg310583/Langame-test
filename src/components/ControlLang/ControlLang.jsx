import { Select } from 'antd';
import './style.css';

const langData = {
  lang: ['En', 'Ru'],
};
export function ControlLang() {
  const handleLangChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      defaultValue={langData.lang[0]}
      onChange={handleLangChange}
      suffixIcon={null}
      style={{
        width: 45,
        height: 45,
        padding: 0,
        // fontSize: 15,
      }}
      options={[
        {
          value: 'En',
          label: 'En',
        },
        {
          value: 'Ru',
          label: 'Ru',
        },
      ]}
    ></Select>
  );
}
