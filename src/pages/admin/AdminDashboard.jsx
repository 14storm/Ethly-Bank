import { useState } from "react";
import logo from "../../assets/logo.png";
import {
  Home2,
  Profile2User,
  ArrowSwapHorizontal,
  Card,
  Setting2,
  SearchNormal1,
  Notification,
  LogoutCurve,
  HambergerMenu,
  CloseSquare,
  ArrowUp2,
  ArrowRight2,
  ArrowDown2,
  Danger,
} from "iconsax-react";
import "../../styles/admin-dashboard.css";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const transactions = [
    {
      name: "David Johnson",
      type: "Money transfer",
      amount: "₦85,000",
      status: "Completed",
    },
    {
      name: "Sarah Williams",
      type: "Bill payment",
      amount: "₦25,500",
      status: "Completed",
    },
    {
      name: "Michael Adams",
      type: "Money transfer",
      amount: "₦120,000",
      status: "Pending",
    },
    {
      name: "Daniel Smith",
      type: "Card payment",
      amount: "₦18,200",
      status: "Completed",
    },
  ];

  return (
    <div className="admin-layout">
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="admin-brand">
          <img src={logo} alt="Ethly" className="admin-brand-logo" />

          <div>
            <h2>ETHLY</h2>
            <span>ADMIN</span>
          </div>

          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <CloseSquare size={20} color="#ffffff" />
          </button>
        </div>

        <nav className="admin-nav">
          <p className="nav-label">MAIN MENU</p>

          <a href="#" className="nav-item active">
            <Home2 size={18} variant="Bold" />
            Dashboard
          </a>

          <a href="#" className="nav-item">
            <Profile2User size={18} variant="Bold" />
            Users
          </a>

          <a href="#" className="nav-item">
            <ArrowSwapHorizontal size={18} variant="Bold" />
            Transactions
          </a>

          <a href="#" className="nav-item">
            <Card size={18} variant="Bold" />
            Cards
          </a>

          <p className="nav-label settings-label">SYSTEM</p>

          <a href="#" className="nav-item">
            <Setting2 size={18} variant="Bold" />
            Settings
          </a>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-user">
            <div className="admin-avatar">A</div>

            <div>
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>
          </div>

          <button className="logout-btn" aria-label="Log out">
            <LogoutCurve size={18} color="#777777" />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">
        {/* TOPBAR */}
        <header className="admin-topbar">
          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <HambergerMenu size={22} color="#111111" />
          </button>

          <div className="topbar-search">
            <SearchNormal1 size={18} color="#999999" />
            <input type="text" placeholder="Search users, transactions..." />
          </div>

          <div className="topbar-actions">
            <button className="notification-btn" aria-label="Notifications">
              <Notification size={20} color="#111111" variant="Bold" />
              <span className="notification-dot"></span>
            </button>

            <div className="topbar-admin">
              <div className="admin-avatar">A</div>

              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <section className="admin-content">
          {/* PAGE HEADER */}
          <div className="admin-page-header">
            <div>
              <p className="eyebrow">OVERVIEW</p>
              <h1>Good Evening, Rehoboth</h1>
              <p>Here's what's happening with ETHLY today.</p>
            </div>

            <button className="date-btn">
              Today <ArrowDown2 size={14} color="#111111" />
            </button>
          </div>

          {/* STAT CARDS */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-top">
                <span>Total users</span>
                <div className="stat-icon">
                  <Profile2User
                    size={24}
                    color="#b8901f"
                    variant="Bold"
                    style={{ display: "block" }}
                  />
                </div>
              </div>

              <div className="stat-value">1,248</div>

              <div className="stat-change positive">
                <ArrowUp2 size={12} color="#52785c" />
                12.5%
                <small>vs last month</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Transactions</span>
                <div className="stat-icon">
                  <ArrowSwapHorizontal size={16} variant="Bold" />
                </div>
              </div>

              <div className="stat-value">₦28k</div>

              <div className="stat-change positive">
                <ArrowUp2 size={12} color="#52785c" />
                8.2%
                <small>vs last month</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Active users</span>
                <div className="stat-icon">
                  <Profile2User size={16} variant="Bold" />
                </div>
              </div>

              <div className="stat-value">1,103</div>

              <div className="stat-change positive">
                <ArrowUp2 size={12} color="#52785c" />
                5.4%
                <small>vs last month</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Pending issues</span>
                <div className="stat-icon warning">
                  <Danger size={16} variant="Bold" />
                </div>
              </div>

              <div className="stat-value">12</div>

              <div className="stat-change negative">
                <ArrowUp2 size={12} color="#a35c5c" />
                2.1%
                <small>vs last month</small>
              </div>
            </div>
          </div>

          {/* LOWER GRID */}
          <div className="dashboard-grid">
            {/* TRANSACTIONS */}
            <section className="dashboard-card transactions-card">
              <div className="card-header">
                <div>
                  <h2>Recent transactions</h2>
                  <p>Latest activity across ETHLY.</p>
                </div>

                <button className="view-btn">
                  View all <ArrowRight2 size={12} color="#b8901f" />
                </button>
              </div>

              <div className="transaction-table">
                <div className="table-head">
                  <span>User</span>
                  <span>Type</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>

                {transactions.map((transaction, index) => (
                  <div className="transaction-row" key={index}>
                    <div className="transaction-user">
                      <div className="transaction-avatar">
                        {transaction.name.charAt(0)}
                      </div>

                      <span>{transaction.name}</span>
                    </div>

                    <span className="transaction-type">{transaction.type}</span>

                    <strong>{transaction.amount}</strong>

                    <span
                      className={`status ${transaction.status.toLowerCase()}`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* QUICK ACTIONS */}
            <section className="dashboard-card quick-card">
              <div className="card-header">
                <div>
                  <h2>Quick actions</h2>
                  <p>Manage ETHLY from here.</p>
                </div>
              </div>

              <div className="quick-actions">
                <button>
                  <span className="quick-icon">
                    <Profile2User size={18} variant="Bold" />
                  </span>

                  <div>
                    <strong>Manage users</strong>
                    <small>View and manage accounts</small>
                  </div>

                  <ArrowRight2 size={16} color="#999999" className="arrow" />
                </button>

                <button>
                  <span className="quick-icon">
                    <ArrowSwapHorizontal size={18} variant="Bold" />
                  </span>

                  <div>
                    <strong>Transactions</strong>
                    <small>Review recent activity</small>
                  </div>

                  <ArrowRight2 size={16} color="#999999" className="arrow" />
                </button>

                <button>
                  <span className="quick-icon">
                    <Card size={18} variant="Bold" />
                  </span>

                  <div>
                    <strong>Manage cards</strong>
                    <small>View card activity</small>
                  </div>

                  <ArrowRight2 size={16} color="#999999" className="arrow" />
                </button>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
