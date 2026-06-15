import Layout from "../../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Total Doctors</h2>
          <h1>12</h1>
        </div>

        <div className="dashboard-card">
          <h2>Appointments</h2>
          <h1>8</h1>
        </div>

        <div className="dashboard-card">
          <h2>Notifications</h2>
          <h1>4</h1>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;