import GuestsDropdown from './GuestsDropdown';
import SelectionItem from './SelectionItem';

interface IGuestsCounterProps {
  adultsCount: number;
  childrenCount: number;
  setAdultsCount: React.Dispatch<React.SetStateAction<number>>;
  setChildrenCount: React.Dispatch<React.SetStateAction<number>>;
}

const GuestsCounter: React.FC<IGuestsCounterProps> = ({
  adultsCount,
  childrenCount,
  setAdultsCount,
  setChildrenCount,
}) => {
  return (
    <SelectionItem title='Guest'>
      <GuestsDropdown
        adultsCount={adultsCount}
        childrenCount={childrenCount}
        setAdultsCount={setAdultsCount}
        setChildrenCount={setChildrenCount}
      />
    </SelectionItem>
  );
};

export default GuestsCounter;
