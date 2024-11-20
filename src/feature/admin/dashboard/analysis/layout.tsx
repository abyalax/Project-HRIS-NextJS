import DashboardAdminLayouts from "../layout"
import Headcount from "./chart/headcount";
import Attendance from "./chart/attendance";
import Education from "./chart/education";

const AdminAnalytics = () => {

  return (
    <DashboardAdminLayouts>
      <main className="mb-96">
        <div className="flex items-center gap-3">

          <div className="w-2/3">
            <Attendance />
          </div>

          <div className="border-2 bg-white border-slate-200 pl-4 rounded-lg">
            <Education />
          </div>

        </div>

        <Headcount />

      </main>
    </DashboardAdminLayouts>
  )
};

export default AdminAnalytics;