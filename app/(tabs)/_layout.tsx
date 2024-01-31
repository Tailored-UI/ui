import BottomTab, { tab } from '../components/BottomTab';

const tabData: tab[] = [
  {
    name: 'home/index',
    Icon: 'Home',
    label: 'Home',
    size: 25,
  },
  {
    name: 'uiComponents',
    Icon: 'Sparkles',
    label: 'UI',
    size: 25,
  },
];

export default function TabLayout() {
  return (
    <>
      <BottomTab TabData={tabData} filled showLabel />
    </>
  );
}
