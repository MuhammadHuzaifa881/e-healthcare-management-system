import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ShowSeverity from "./show-severity";
import Medications from "./medications";
import Common from "./common";
import Notes from "./notes";
import FormAction from "./form-action";
import { toast } from "react-toastify";

const AddNewDetailForm = ({activeTab,setShowAddForm}) => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    date: '',
    severity: '',
    notes: ''
  });

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


    const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your API
    console.log('Form submitted:', formData);
    setShowAddForm(false);
    toast.success(`${activeTab.slice(0, -1)} added successfully!`);
    setFormData({
      type: '',
      name: '',
      date: '',
      severity: '',
      notes: ''
    });
  };
  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add New {activeTab.slice(0, -1)}</CardTitle>
          <CardDescription>
            Fill out the form to add to your medical history
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Common formData={formData} handleInputChange={handleInputChange} activeTab={activeTab} />
              {activeTab !== "medications" && <ShowSeverity formData={formData} setFormData={setFormData} />}
              {activeTab === "medications" && (
               <Medications formData={formData} handleInputChange={handleInputChange}  />
              )}
            <Notes formData={formData} handleInputChange={handleInputChange} />
            </div>
           <FormAction setShowAddForm={setShowAddForm} />
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddNewDetailForm;
