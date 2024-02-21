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
              <div key={index} className="col bg-light text-secondary p-1" style={{ textAlign: "left", fontSize: "10px", border: "1px black solid" }} data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + index}>
                {/* svg */}
                <img src={value.flag} alt={value.country} width="40" height="20" />
                {/* svg */}
                <strong>{value.code?.toUpperCase()} - {value.country}</strong>
                <div
                  className="modal fade"
                  id={"staticBackdrop" + index}
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body p-0">
                        <div className="card">
                          <img src={value.flag} className="card-img-top" height={300} alt={value.country} />
                          <div className="card-body text-center">
                            <h5 className="card-title text-secondary" style={{fontSize:"35px"}}><strong>{value.code?.toUpperCase()} - {value.country}</strong></h5>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
