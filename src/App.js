import { useState } from 'react';
import './App.css';
import Comp from './components/Comp';
import axios from 'axios';

function App() {

  const [loading, setLoading] = useState(false)
  const [tableData, setTableData] = useState([])

  const changeData = () => {
    setTableData([])
    setLoading(true)
    setTimeout(() => {
      axios.get("https://gist.githubusercontent.com/almost/7748738/raw/575f851d945e2a9e6859fb2308e95a3697bea115/countries.json")
        .then(async (res) => {
          // res
          setLoading(false)
          setTableData(res.data);

        }).catch((err) => {
          // err
          setLoading(false)
          console.log(err);

        })
    }, 2000);
  }
  return (
    <>
      <div className="conatiner mt-4">
        <Comp loading={loading} changeData={changeData} />
        <div className="container text-center mt-5 mb-5">
          <div className="row row-cols-3">
          {tableData && tableData.map((value, index) =>
            <div key={index} className="col bg-light text-secondary p-1" style={{fontSize: "10px" ,border: "1px black solid"}}><strong>{value.code} - {value.name}</strong></div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
