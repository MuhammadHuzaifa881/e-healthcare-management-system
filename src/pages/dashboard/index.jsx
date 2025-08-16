import MainHospitalAdmin from '@/components/page-sections/dashboard/hospital-admin/main-hospital-admin';

const Dashboard = () => {
  const userRole=localStorage.getItem('userRole')
  return (
    <div className='mx-auto'>
      {/* render admin if role is hospital */}
     {userRole==='hospital' && (
      <>
      {/* hello */}
      <MainHospitalAdmin/> 
      </>
     )}
      </div>
  )
}

export default Dashboard;