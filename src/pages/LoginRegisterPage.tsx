// import Body from "../component/Body";
import LoginForm from "../component/LoginForm";
import RegisterForm from "../component/RegisterForm";

export default function LoginRegisterPage() {
  return (
    <section className="forms-page-layout">
      <LoginForm />
      <RegisterForm />
    </section>
  );
}
