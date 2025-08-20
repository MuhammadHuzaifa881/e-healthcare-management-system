import { useState } from "react";
import CurrentMedications from "./current-medication";
import PatientInformation from "./patient-information";
import { TabsContent } from "@/components/ui/tabs";
import SelectPatient from "./select-patient";
import PerscriptionTips from "./perscription-tips";

const MainCreate = ({ setSearchTerm, searchTerm }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <>
      <TabsContent value="create">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PatientInformation
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              selectedPatient={selectedPatient}
            />
            <CurrentMedications
              setSelectedPatient={setSelectedPatient}
              selectedPatient={selectedPatient}
            />
          </div>

          <div className="space-y-6">
            <SelectPatient
              selectedPatient={selectedPatient}
              setSelectedPatient={setSelectedPatient}
              
            />

          <PerscriptionTips/>

           
          </div>
        </div>
      </TabsContent>
    </>
  );
};

export default MainCreate;
