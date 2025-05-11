import GuestsDropdown from './GuestsDropdown';
import SelectionItem from './SelectionItem';

const GuestsCounter: React.FC = () => {
  return (
    <SelectionItem title='Guest'>
      <GuestsDropdown />
    </SelectionItem>
  );
};

export default GuestsCounter;
