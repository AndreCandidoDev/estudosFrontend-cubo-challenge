import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './App.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  options: {
    plugins: {
        legend: {
          position: "right",
          align: "middle"
      }
    }
  }
};


function App() {
  return (
    <>
      <header>
        <div className="form-area">
          <form>
            <input type="text" name="firstName" placeholder="First Name"/>
            <input type="text" name="lastName" placeholder="Last Name"/>
            <input type="text" name="participation" placeholder="Participation"/>
            <button type="submit">Send</button>
          </form>
        </div>
      </header>
      <section>
        <div className="container">

          <div className="title-area">
            <div className="title">
              <h1>Data</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          

            {/* insert grid here */}
          <div className="grid-area">
            <div className="table-area">
              <table>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Participation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xx.xx%</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xx.xx%</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xx.xx%</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>xxxxx</td>
                      <td>xxxxx</td>
                      <td>xx.xx%</td>
                    </tr>
                  </tbody>
                </table>
              </div>


          
              <div className="chart-area">
                <Pie data={data} />
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default App;
