import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import { CiMenuBurger } from "react-icons/ci";

function Dashboard() {
  const [isLoggedOut, setIsLoggedOut] = React.useState(false);

  const [chart, setChart] = useState({
    series: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33]
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13]
      }
    ],
    options: {
      chart: {
        height: 450,
        width: '100%',
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Average High & Low Sales',
        align: 'left',
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
          text: 'Month'
        }
      },
      yaxis: {
        title: {
          text: 'Sales'
        },
        min: 5,
        max: 40
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        offsetY: 10,
        offsetX: -5,
      }
    },


  }
  )

  const cardData = [
    {
      id: 1,
      category: "Analytics",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 4v2m0 6v2m-7 6a2 2 0 002-2V7a2 2 0 012-2h6a2 2 0 012 2v9a2 2 0 002 2M4 12h16"
          />
        </svg>
      ),
      description: "Analyze your business metrics.",
      createdAt: "2023-10-01",
      isActive: true,
      number1: 500,
      number2: 1500,
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      category: "Marketing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 10.25L7 7m4.25 0v8m0-8L14.25 7M17 11v2m0 4v2M7 11v2m0 4v2"
          />
        </svg>
      ),
      description: "Manage marketing campaigns.",
      createdAt: "2023-09-15",
      isActive: false,
      number1: 300,
      number2: 800,
      bgColor: "bg-red-100",
    },
    {
      id: 3,
      category: "Sales",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v8m-3-4h6m3 4a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h10z"
          />
        </svg>
      ),
      description: "Track your sales performance.",
      createdAt: "2023-08-05",
      isActive: true,
      number1: 250,
      number2: 1000,
      bgColor: "bg-green-100",
    },
    {
      id: 4,
      category: "Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h6m-3-3l3 3-3 3m8 0h6m-3-3l3 3-3 3m-8 0h6m-3-3l3 3-3 3"
          />
        </svg>
      ),
      description: "Manage development tasks.",
      createdAt: "2023-07-22",
      isActive: false,
      number1: 400,
      number2: 1200,
      bgColor: "bg-yellow-100",
    },
    {
      id: 5,
      category: "Support",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h2l1 3v-3h6v3l1-3h2a2 2 0 002-2zM8 11h.01M16 11h.01"
          />
        </svg>
      ),
      description: "Handle customer support tickets.",
      createdAt: "2023-06-10",
      isActive: true,
      number1: 150,
      number2: 400,
      bgColor: "bg-purple-100",
    },
    {
      id: 6,
      category: "Employee",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 18A3.001 3.001 0 018 21h8a3.001 3.001 0 012.879-3M8 21v-4a3 3 0 016 0v4M8 3h8M8 7v4a3 3 0 006 0V7M5 11V7m14 0v4M12 17v1"
          />
        </svg>
      ),
      description: "Manage employee information.",
      createdAt: "2023-05-25",
      isActive: false,
      number1: 600,
      number2: 900,
      bgColor: "bg-pink-100",
    },
  ];





  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedOut(true);
  };

  return (
    <div className="dashboard">
      <div className="flex flex-row sm:gap-4">
        <div className="sm:w-full sm:max-w-[12rem] md:max-w-[18rem] ">
          <input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state" />
          <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
          <Sidebar handleLogout={handleLogout} />
        </div>

        <div className="flex w-full flex-col p-4">
          <div className=" flex items-center justify-between gap-4">
          <label htmlFor="sidebar-mobile-fixed" className="sm:hidden">
              <CiMenuBurger />
            </label>
          <Header handleLogout={handleLogout} />
          </div>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="flex h-50 w-full flex-col items-start justify-center bg-white border rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${card.bgColor}`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{card.category}</h3>
                    <p className="text-xs text-gray-400">Created: {card.createdAt}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">{card.description}</p>
                <div className="flex justify-between items-center w-full mt-4">
                  <span className={`text-xs ${card.isActive ? 'badge-primary' : 'badge-error'} badge badge-xs`}>
                    {card.isActive ? "Active" : "Inactive"}
                  </span>
                  <div className="text-sm text-gray-700">
                    {card.number1} / {card.number2}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex h-100 w-full bg-white border rounded-lg p-8 bg-gray-1 ">
            <ReactApexChart style={{ width: "100%", maxWidth: "100%" }} options={chart.options} series={chart.series} type="line" height={450} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
