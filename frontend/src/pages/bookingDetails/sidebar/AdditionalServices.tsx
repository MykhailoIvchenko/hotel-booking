import Accordion from '@/components/accordion/Accordion';
import CheckBox from '@/components/checkbox/CheckBox';
import styles from './additionalServices.module.css';

interface IAdditionalServicesProps {
  selectedServices: string[];
  setSelectedServices: React.Dispatch<React.SetStateAction<string[]>>;
}

//TODO: Get services from the server
const servicesList = [
  { id: '1', name: 'Transport' },
  { id: '2', name: 'In-Room Dining' },
  { id: '3', name: 'Fitness Center Access' },
  { id: '4', name: 'Assistive Devices' },
];

const AdditionalServices: React.FC<IAdditionalServicesProps> = ({
  selectedServices,
  setSelectedServices,
}) => {
  const handleClickItem = (serviceId: string) => {
    let updatedList = [];

    if (selectedServices.includes(serviceId)) {
      updatedList = selectedServices.filter((item) => item !== serviceId);
    } else {
      updatedList = [...selectedServices, serviceId];
    }

    setSelectedServices(updatedList);
  };

  return (
    <Accordion title='Additional Services' defaultOpen={false}>
      <ul>
        {servicesList.map((service) => (
          <li key={service.id} className={styles.item}>
            <span className={styles.name}>{service.name}</span>

            <CheckBox
              id={service.id.toString()}
              checked={selectedServices.includes(service.id)}
              onChange={() => handleClickItem(service.id)}
            />
          </li>
        ))}
      </ul>
    </Accordion>
  );
};

export default AdditionalServices;
