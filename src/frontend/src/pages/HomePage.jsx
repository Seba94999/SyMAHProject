import PageLayout from "../components/PageLayout";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="presentation">
        <h1>SyMAH</h1>
        <p>
          Bienvenido a SyMAH, tu sistema de gestión para servicios electricos.
        </p>
        <p>
          Aquí podrás gestionar clientes, trabajos, empleados y transacciones de
          manera eficiente y sencilla.
        </p>
      </div>
    </PageLayout>
  );
};

export default HomePage;
