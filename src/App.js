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
      axios.get("https://gist.githubusercontent.com/pratikbutani/20ded7151103bb30737e2ab1b336eb02/raw/be1391e25487ded4179b5f1c8eedb81b01226216/country-flag.json")
        .then(async (res) => {
          // res
          setLoading(false)
          setTableData(res.data);
          console.log(tableData);

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
              <div key={index} className="col bg-light text-secondary p-1" style={{ textAlign:"left",fontSize: "10px", border: "1px black solid" }}>
                {/* svg */}
                <img src={value.flag} alt={value.country} width="40" height="20"/>
                {/* svg */}
                <strong>{value.code} - {value.country}</strong></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
