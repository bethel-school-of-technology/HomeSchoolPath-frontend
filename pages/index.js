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
            <br />
          </div>

          <div class='card width-: 100%'>
            <div class='card__content'>
              <div class='card__front'>
                <h3 class='card__title'>"WHEN ONE TEACHES, TWO LEARN"</h3>
                <p class='card__subtitle'>
                  Train up a child in the way he should go:
                </p>
              </div>

              <div class='card__back'>
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
                    <p class='card__body'>
                      "for Families Educating at Home During Coronavirus
                      Pandemic Around the nation, more than 124,000 schools have
                      closed, impacting more than 55.1 million students. Chances
                      are that the novel coronavirus, COVID-19, has impacted
                      your family’s school choice. As families evaluate how to
                      keep their children safe and healthy while still learning,
                      many questions arise regarding homeschooling and online
                      learning. These are unique times and amount of information
                      online can be overwhelming." The Home School Path Blog was
                      create for parents and educators to share their own, "best
                      practice."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
