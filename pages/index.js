import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <h2>The Home School Path Index Page</h2>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
      <div>
      "Free Resources, FAQ for Families Educating at Home During Coronavirus Pandemic
Around the nation, more than 124,000 schools have closed, impacting more than 55.1 million students.

Chances are that the novel coronavirus, COVID-19, has impacted your family’s school choice.

As families evaluate how to keep their children safe and healthy while still learning, here are some educational resources to navigate these unique times, including a list of free online resources and answers to commonly asked questions about homeschooling and online schooling.

If you’re looking for more learning resources, you can also check out our list of 100+ free resources for teachers and schools shifting online. For information about educating students with disabilities during COVID-19, click here." National School Choice Week 
      </div>
    </Layout>
  );
};

export default Index;