import { createBrowserRouter, RouterProvider } from 'react-router';

// Auth pages
import Landing from './pages/Landing';
import PatientLogin from './pages/login/PatientLogin';
import DoctorLogin from './pages/login/DoctorLogin';
import AdminLogin from './pages/login/AdminLogin';

// Admin portal
import AdminLayout from '../admin/app/components/Layout';
import AdminDashboard from '../admin/imports/ArcioDashboardRedesigned/ArcioDashboardRedesigned';
import AdminDoctors from '../admin/imports/ArcioDoctorsRedesigned/ArcioDoctorsRedesigned';
import AdminPatients from '../admin/imports/ArcioPatientsRedesigned/ArcioPatientsRedesigned';
import AdminAppointments from '../admin/imports/ArcioAppointmentsRedesigned/ArcioAppointmentsRedesigned';
import AdminAnnouncements from '../admin/imports/ArcioAnnouncementsRedesigned/ArcioAnnouncementsRedesigned';
import AdminSettings from '../admin/imports/ArcioSettingsRedesigned/ArcioSettingsRedesigned';
import AdminSchedule from '../admin/imports/Schedule/Schedule';
import AdminServices from '../admin/imports/Services/Services';
import AddDepartment from '../admin/app/pages/AddDepartment';
import AddDoctor from '../admin/app/pages/AddDoctor';
import AddAnnouncement from '../admin/app/pages/AddAnnouncement';
import AddService from '../admin/app/pages/AddService';

// Doctor portal
import DoctorLayout from '../doctor/app/components/Layout';
import DoctorDashboard from '../doctor/app/pages/Dashboard';
import DoctorDepartments from '../doctor/app/pages/Departments';
import DoctorDoctors from '../doctor/app/pages/Doctors';
import DoctorAppointments from '../doctor/app/pages/Appointments';
import DoctorPatients from '../doctor/app/pages/Patients';
import DoctorAnalytics from '../doctor/app/pages/Analytics';
import DoctorSettings from '../doctor/app/pages/Settings';
import DoctorNotifications from '../doctor/app/pages/Notifications';

// Patient portal
import PatientLayout from '../patient/app/components/Layout';
import PatientDashboard from '../patient/app/pages/Dashboard';
import PatientAppointments from '../patient/app/pages/Appointments';
import PatientProfile from '../patient/app/pages/Profile';
import PatientDocuments from '../patient/app/pages/Documents';
import PatientVaccinations from '../patient/app/pages/Vaccinations';
import PatientMedicalFile from '../patient/app/pages/MedicalFile';
import PatientAnnouncements from '../patient/app/pages/Announcements';
import PatientSettings from '../patient/app/pages/Settings';

// ── Admin wrapper helpers ──
const wrap = (Component) => () => (
  <div className="w-full min-h-screen">
    <div className="[&>div]:!pl-0">
      <Component />
    </div>
  </div>
);

const wrapPatient = (Component) => () => (
  <div className="w-full min-h-screen bg-[#f1f5f9] overflow-x-hidden">
    <div className="w-full h-full">
      <Component />
    </div>
  </div>
);

const router = createBrowserRouter([
  // ── Landing ──
  { path: '/', Component: Landing },

  // ── Login pages ──
  { path: '/login/patient', Component: PatientLogin },
  { path: '/login/doctor',  Component: DoctorLogin  },
  { path: '/login/admin',   Component: AdminLogin   },

  // ── Admin dashboard ──
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true,              Component: wrap(AdminDashboard)     },
      { path: 'doctors',          Component: wrap(AdminDoctors)       },
      { path: 'patients',         Component: wrap(AdminPatients)      },
      { path: 'appointments',     Component: wrap(AdminAppointments)  },
      { path: 'schedule',         Component: wrap(AdminSchedule)      },
      { path: 'services',         Component: wrap(AdminServices)      },
      { path: 'announcements',    Component: wrap(AdminAnnouncements) },
      { path: 'settings',         Component: wrap(AdminSettings)      },
      { path: 'add-department',   Component: AddDepartment            },
      { path: 'add-doctor',       Component: AddDoctor                },
      { path: 'add-service',      Component: AddService               },
      { path: 'new-announcement', Component: AddAnnouncement          },
    ],
  },

  // ── Doctor dashboard ──
  {
    path: '/doctor',
    Component: DoctorLayout,
    children: [
      { index: true,          Component: DoctorDashboard      },
      { path: 'departments',  Component: DoctorDepartments    },
      { path: 'doctors',      Component: DoctorDoctors        },
      { path: 'appointments', Component: DoctorAppointments   },
      { path: 'patients',     Component: DoctorPatients       },
      { path: 'analytics',    Component: DoctorAnalytics      },
      { path: 'settings',     Component: DoctorSettings       },
      { path: 'notifications',Component: DoctorNotifications  },
    ],
  },

  // ── Patient dashboard ──
  {
    path: '/patient',
    Component: PatientLayout,
    children: [
      { index: true,              Component: wrapPatient(PatientDashboard)      },
      { path: 'appointments',     Component: wrapPatient(PatientAppointments)   },
      { path: 'profile',          Component: wrapPatient(PatientProfile)        },
      { path: 'documents',        Component: wrapPatient(PatientDocuments)      },
      { path: 'vaccinations',     Component: wrapPatient(PatientVaccinations)   },
      { path: 'medical-file',     Component: wrapPatient(PatientMedicalFile)    },
      { path: 'announcements',    Component: wrapPatient(PatientAnnouncements)  },
      { path: 'settings',         Component: wrapPatient(PatientSettings)       },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
