import Layout from "../components/Layout";
import { withRouter } from "next/router";
import SigninComponent from "../components/auth/SigninComponent";
//import Link from 'next/link';

const Signin = ({ router }) => {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className='alert alert-danger'>{router.query.message}</div>;
    } else {
      return;
    }
  };

  return (
    <Layout>
      <div className='sibg-img'>
        <div className='container-fluid'>
          <h2 className='text-center pt-4 pb-4'>Signin</h2>

          <div className='row'>
            <div className='col-md10 offset-md-5'>{showRedirectMessage()}</div>
          </div>

          <div className='row'>
            <div className='col-md10 offset-md-5'>
              <SigninComponent />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Signin);
