import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FiActivity, FiDroplet, FiHeart } from 'react-icons/fi';

const TabLists = ({setActiveTab}) => {
  return (
    <>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger
          value="conditions"
          onClick={() => setActiveTab("conditions")}
        >
          <FiHeart className="mr-2" /> Conditions
        </TabsTrigger>
        <TabsTrigger
          value="medications"
          onClick={() => setActiveTab("medications")}
        >
          <FiDroplet className="mr-2" /> Medications
        </TabsTrigger>
        <TabsTrigger
          value="allergies"
          onClick={() => setActiveTab("allergies")}
        >
          <FiActivity className="mr-2" /> Allergies
        </TabsTrigger>
      </TabsList>
      
    </>
  );
};

export default TabLists;
