import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <div className='wrapper'>
        <div style={{ backgroundColor: "#FFA500" }}>
          <div className='text-area'>
            <h2 className='display-4 font-weight-bold'>
              <span>W</span>
              <span>E</span>
              <span>L</span>
              <span>C</span>
              <span>O</span>
              <span>M</span>
              <span>E</span>&nbsp;
              <span>T</span>
              <span>O</span>&nbsp;
              <span>T</span>
              <span>H</span>
              <span>E</span>&nbsp;
              <span>H</span>
              <span>O</span>
              <span>M</span>
              <span>E</span>
              <span>S</span>
              <span>C</span>
              <span>H</span>
              <span>O</span>
              <span>O</span>
              <span>L</span>&nbsp;
              <span>P</span>
              <span>A</span>
              <span>T</span>
              <span>H</span>
            </h2>
          </div>
          <Link href='/signup'>
            <a className='font-weight-bold'>Signup</a>
          </Link>
          <div style={{ marginTop: "5px", marginBottom: "0px" }}>
            <div className='card middle'>
              <div className='front'>
                <img
                  maxheight='150px'
                  width='auto'
                  src='/static/images/happy2image.jpg'
                  alt='Happy with the word'
                />
              </div>
              <div className='back'>
                <div className='back-content middle'>
                  <h2>Kingdom Coders</h2>
                  <span>For His Glory</span>
                  <div className='sm'>
                    <a href='#'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-youtube'></i>
                    </a>
                    <a href='#'>
                      <i className='fab fa-instagram'></i>
                    </a>
                    <p>
                      "for Families Educating at Home During Coronavirus
                      Pandemic Around the nation, more than 124,000 schools have
                      closed, impacting more than 55.1 million students. Chances
                      are that the novel coronavirus, COVID-19, has impacted
                      your family’s school choice. As families evaluate how to
                      keep their children safe and healthy while still learning,
                      here are some educational resources to navigate these
                      unique times, including a list of free online resources
                      and answers to commonly asked questions about
                      homeschooling and online schooling. If you’re looking for
                      more learning resources, you can also check out our list
                      of 100+ free resources for teachers and schools shifting
                      online." National School Choice Week
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
