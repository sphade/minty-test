
import Card from "../components/Card";
import GraphOverview from "../components/GraphOverview";
import Table from "../components/Table";
import search from '../assets/Icons/Search.svg'

const Home = () => {
  return (
    <div>
      <div className="flex gap-3  justify-between mb-[30px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <GraphOverview />

      <h1 className="text-[36px] my-6 ">Payments</h1>
      
      <div className="flex items-center gap-6">
        <p className="text-xs flex gap-5">
        show <span className="text-blue-500">20</span>
                  <span>
                  out of 500 payments
                  </span>   
              </p>
              <div>
                  <div className="border-b border-black flex gap-1 w-[250px]">
                      <img src={search } alt="" />
                  <input type="text"  name="" id="" className="outline-none bg-transparent" />
                  </div>
              </div>
      </div>
      <Table />
    </div>
  );
};

export default Home;
