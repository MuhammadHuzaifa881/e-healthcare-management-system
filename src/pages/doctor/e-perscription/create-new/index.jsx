import MainPerscriptios from "@/components/page-sections/doctor/e-perscription/create-new-perscription/main-perscription/main-perscription";
import PerscriptionCreateHeader from "@/components/page-sections/doctor/e-perscription/create-new-perscription/perscription-create-header/header";

const NewEPrescription = () => {
  return (
    <div className="p-6 space-y-6 bg-blue-300 rounded-lg">
      <PerscriptionCreateHeader />

      <MainPerscriptios />
    </div>
  );
};

export default NewEPrescription;
