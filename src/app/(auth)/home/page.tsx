import { AuthRequiredError } from "../../../lib/exceptions";

const session = null;

const Home = () => {
  if (!session) throw new AuthRequiredError();

  return <div>This is an auth-only Home Page</div>;
};

export default Home;
